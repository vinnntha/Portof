import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | { node: React.ReactNode; href?: string; title?: string; ariaLabel?: string }
  | { src: string; alt?: string; href?: string; title?: string; srcSet?: string; sizes?: string; width?: number; height?: number };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 } as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

function useResizeObserver(
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) {
  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener('resize', callback);
      callback();
      return () => window.removeEventListener('resize', callback);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => { observers.forEach(o => o?.disconnect()); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

function useImageLoader(
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) { onLoad(); return; }
    let remaining = images.length;
    const done = () => { if (--remaining === 0) onLoad(); };
    images.forEach(img => {
      const el = img as HTMLImageElement;
      if (el.complete) done();
      else { el.addEventListener('load', done, { once: true }); el.addEventListener('error', done, { once: true }); }
    });
    return () => { images.forEach(img => { img.removeEventListener('load', done); img.removeEventListener('error', done); }); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}

function useAnimationLoop(
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  seqHeight: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
  isVertical: boolean
) {
  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);
  const offset = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const seqSize = isVertical ? seqHeight : seqWidth;
    if (seqSize > 0) {
      offset.current = ((offset.current % seqSize) + seqSize) % seqSize;
      track.style.transform = isVertical ? `translate3d(0,${-offset.current}px,0)` : `translate3d(${-offset.current}px,0,0)`;
    }
    if (prefersReduced) { track.style.transform = 'translate3d(0,0,0)'; return () => { lastTs.current = null; }; }

    const animate = (ts: number) => {
      if (lastTs.current === null) lastTs.current = ts;
      const dt = Math.max(0, ts - lastTs.current) / 1000;
      lastTs.current = ts;
      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
      const ease = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocity.current += (target - velocity.current) * ease;
      if (seqSize > 0) {
        let next = ((offset.current + velocity.current * dt) % seqSize + seqSize) % seqSize;
        offset.current = next;
        track.style.transform = isVertical ? `translate3d(0,${-next}px,0)` : `translate3d(${-next}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; } lastTs.current = null; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical]);
}

export const LogoLoop = React.memo<LogoLoopProps>(({
  logos, speed = 120, direction = 'left', width = '100%',
  logoHeight = 28, gap = 32, pauseOnHover, hoverSpeed,
  fadeOut = false, fadeOutColor, scaleOnHover = false,
  renderItem, ariaLabel = 'Partner logos', className, style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);
  const [seqWidth, setSeqWidth] = useState(0);
  const [seqHeight, setSeqHeight] = useState(0);
  const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true) return 0;
    if (pauseOnHover === false) return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const isVertical = direction === 'up' || direction === 'down';

  const targetVelocity = useMemo(() => {
    const mag = Math.abs(speed);
    const dir = isVertical ? (direction === 'up' ? 1 : -1) : (direction === 'left' ? 1 : -1);
    return mag * dir * (speed < 0 ? -1 : 1);
  }, [speed, direction, isVertical]);

  const updateDimensions = useCallback(() => {
    const cw = containerRef.current?.clientWidth ?? 0;
    const rect = seqRef.current?.getBoundingClientRect();
    const sw = rect?.width ?? 0, sh = rect?.height ?? 0;
    if (isVertical) {
      const ph = containerRef.current?.parentElement?.clientHeight ?? 0;
      if (containerRef.current && ph > 0) containerRef.current.style.height = `${Math.ceil(ph)}px`;
      if (sh > 0) {
        setSeqHeight(Math.ceil(sh));
        const vp = containerRef.current?.clientHeight ?? ph ?? sh;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, Math.ceil(vp / sh) + ANIMATION_CONFIG.COPY_HEADROOM));
      }
    } else if (sw > 0) {
      setSeqWidth(Math.ceil(sw));
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, Math.ceil(cw / sw) + ANIMATION_CONFIG.COPY_HEADROOM));
    }
  }, [isVertical]);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

  const cssVars = useMemo(() => ({
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {})
  }) as React.CSSProperties, [gap, logoHeight, fadeOutColor]);

  const rootCls = useMemo(() => cx(
    'relative group',
    isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
    '[--logoloop-gap:32px]', '[--logoloop-logoHeight:28px]',
    '[--logoloop-fadeColorAuto:#ffffff]', 'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
    scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
    className
  ), [isVertical, scaleOnHover, className]);

  const onEnter = useCallback(() => { if (effectiveHoverSpeed !== undefined) setIsHovered(true); }, [effectiveHoverSpeed]);
  const onLeave = useCallback(() => { if (effectiveHoverSpeed !== undefined) setIsHovered(false); }, [effectiveHoverSpeed]);

  const renderLogoItem = useCallback((item: LogoItem, key: React.Key) => {
    const liCls = cx(
      'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
      isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
      scaleOnHover && 'overflow-visible group/item'
    );

    if (renderItem) return <li className={liCls} key={key} role="listitem">{renderItem(item, key)}</li>;

    const isNode = 'node' in item;
    const scaleCls = scaleOnHover ? 'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120' : '';

    const content = isNode
      ? <span className={cx('inline-flex items-center motion-reduce:transition-none', scaleCls)}>{(item as { node: React.ReactNode }).node}</span>
      : <img className={cx('h-[var(--logoloop-logoHeight)] w-auto block object-contain [-webkit-user-drag:none] pointer-events-none motion-reduce:transition-none', scaleCls)}
          src={(item as any).src} srcSet={(item as any).srcSet} sizes={(item as any).sizes}
          width={(item as any).width} height={(item as any).height}
          alt={(item as any).alt ?? ''} title={(item as any).title}
          loading="lazy" decoding="async" draggable={false} />;

    const label = isNode ? ((item as any).ariaLabel ?? (item as any).title) : ((item as any).alt ?? (item as any).title);
    const inner = (item as any).href
      ? <a className="inline-flex items-center no-underline rounded transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
           href={(item as any).href} aria-label={label || 'logo link'} target="_blank" rel="noreferrer noopener">{content}</a>
      : content;

    return <li className={liCls} key={key} role="listitem">{inner}</li>;
  }, [isVertical, scaleOnHover, renderItem]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, ci) => (
      <ul className={cx('flex items-center', isVertical && 'flex-col')} key={`copy-${ci}`} role="list" aria-hidden={ci > 0} ref={ci === 0 ? seqRef : undefined}>
        {logos.map((item, ii) => renderLogoItem(item, `${ci}-${ii}`))}
      </ul>
    )), [copyCount, logos, renderLogoItem, isVertical]);

  const containerStyle = useMemo((): React.CSSProperties => ({
    width: isVertical ? (toCssLength(width) === '100%' ? undefined : toCssLength(width)) : (toCssLength(width) ?? '100%'),
    ...cssVars, ...style
  }), [width, cssVars, style, isVertical]);

  const fadeEdge = (from: string, extra: string) => (
    <div aria-hidden className={cx('pointer-events-none absolute z-10', extra,
      `bg-[linear-gradient(${from},var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]`)} />
  );

  return (
    <div ref={containerRef} className={rootCls} style={containerStyle} role="region" aria-label={ariaLabel}>
      {fadeOut && (isVertical ? <>
        {fadeEdge('to_bottom', 'inset-x-0 top-0 h-[clamp(24px,8%,120px)]')}
        {fadeEdge('to_top', 'inset-x-0 bottom-0 h-[clamp(24px,8%,120px)]')}
      </> : <>
        {fadeEdge('to_right', 'inset-y-0 left-0 w-[clamp(24px,8%,120px)]')}
        {fadeEdge('to_left', 'inset-y-0 right-0 w-[clamp(24px,8%,120px)]')}
      </>)}
      <div className={cx('flex will-change-transform select-none relative z-0 motion-reduce:transform-none', isVertical ? 'flex-col h-max w-full' : 'flex-row w-max')}
        ref={trackRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
