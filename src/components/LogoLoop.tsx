import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | { node: React.ReactNode; href?: string; title?: string; ariaLabel?: string }
  | { src: string; alt?: string; href?: string; title?: string; srcSet?: string; sizes?: string; width?: number; height?: number };

// Official vector SVG brand logos (zero emojis)
export const APP_ICONS: Record<string, React.ReactNode> = {
  Figma: (
    <svg viewBox="0 0 38 57" className="w-5 h-5 inline-block shrink-0" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  ),
  React: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 inline-block shrink-0">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 128 128" className="w-5 h-5 inline-block shrink-0 rounded-sm">
      <rect width="128" height="128" fill="#3178C6" rx="14" />
      <path
        d="M70.92 78.85c2.37 3.84 5.92 6.07 10.66 6.07 5.11 0 8.35-2.65 8.35-6.35 0-4.18-3.34-5.71-8.91-8.08l-3.06-1.32c-8.77-3.69-14.62-8.35-14.62-18.38 0-9.89 7.66-17.13 19.49-17.13 8.36 0 14.49 2.92 18.52 9.61l-7.94 5.01c-2.37-3.9-5.15-5.57-10.44-5.57-4.6 0-7.38 2.37-7.38 5.71 0 3.62 2.78 5.01 8.21 7.38l3.06 1.32c10.44 4.45 15.45 9.19 15.45 19.07 0 11.42-8.91 17.82-20.88 17.82-11.42 0-18.79-4.87-22.83-12.8l8.32-4.36zM32 41.52h37.45v8.77H53.05V102H41.4V50.29H32V41.52z"
        fill="#FFF"
      />
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 54 33" className="w-5 h-5 inline-block shrink-0" fill="#38BDF8">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
      />
    </svg>
  ),
  DaVinciResolve: (
    <svg viewBox="0 0 100 100" className="w-5 h-5 inline-block shrink-0">
      <rect width="100" height="100" rx="20" fill="#141824" />
      <g transform="translate(50, 50)">
        <path d="M-6 -9 L-13 -36 C-7 -42 7 -42 13 -36 L6 -9 Z" fill="#FF4554" />
        <g transform="rotate(120)">
          <path d="M-6 -9 L-13 -36 C-7 -42 7 -42 13 -36 L6 -9 Z" fill="#00C0FF" />
        </g>
        <g transform="rotate(240)">
          <path d="M-6 -9 L-13 -36 C-7 -42 7 -42 13 -36 L6 -9 Z" fill="#FFB800" />
        </g>
        <circle cx="0" cy="0" r="5" fill="#141824" />
      </g>
    </svg>
  ),
  PremierePro: (
    <svg viewBox="0 0 100 100" className="w-5 h-5 inline-block shrink-0">
      <rect width="100" height="100" rx="20" fill="#00005B" />
      <rect x="5" y="5" width="90" height="90" rx="16" fill="none" stroke="#9999FF" strokeWidth="4" />
      <text
        x="50"
        y="63"
        fill="#9999FF"
        fontSize="42"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle"
      >
        Pr
      </text>
    </svg>
  ),
  DJI: (
    <svg viewBox="0 0 24 24" className="w-5 h-5 inline-block shrink-0" fill="#14213D">
      <path d="M19.2 7.8a716.856 716.856 0 0 0-1.232 4.63c-.202.772-.401 1.544-.634 2.308-.226.743-.504 1.535-.91 2.21-.422.703-.969 1.253-1.726 1.604-.3.137-.615.24-.939.306-.46.09-.926.146-1.394.165-1.163.065-3.628.056-4.79.056l.713-2.64c.539 0 1.078.002 1.617-.013.52-.014 1.092-.042 1.605-.163.56-.133.984-.36 1.355-.817.337-.416.564-.935.75-1.424.34-.893.688-2.173.934-3.093.277-1.041.544-2.085.812-3.129zm4.8 0-2.072 7.68h-3.84l2.073-7.68ZM11.339 4.92h3.84c-.403 1.5-.805 2.999-1.212 4.496-.283 1.044-.565 2.088-.872 3.124-.135.452-.269.903-.445 1.342-.141.352-.3.666-.591.93a1.908 1.908 0 0 1-.734.405c-.356.112-.717.154-1.085.184-.53.043-1.06.054-1.591.063-1.991.02-3.983.02-5.974-.001a21.408 21.408 0 0 1-.954-.034 5.319 5.319 0 0 1-.632-.07 1.851 1.851 0 0 1-.412-.119c-.44-.192-.664-.575-.677-1.043 0-.263.032-.525.093-.78.076-.367.171-.728.265-1.09.179-.691.506-1.966.762-2.638.2-.526.464-1.05.966-1.382.28-.186.576-.285.901-.35.241-.05.483-.075.728-.093.41-.03.82-.04 1.23-.047.582-.01 1.165-.013 1.748-.015L8.148 7.8h1.454l-.518 1.92c-.864 0-1.728-.002-2.593.003-.252.001-.504 0-.756.016a.968.968 0 0 0-.264.042c-.113.04-.17.11-.22.213-.073.15-.115.31-.162.468a84.804 84.804 0 0 0-.503 1.857c-.035.14-.07.28-.1.42-.022.099-.04.197-.05.298-.01.11-.014.242.053.345.068.103.182.127.29.143.12.018.241.021.363.025.199.006.398.007.597.008.544.003 1.089.003 1.633 0 .25-.002.501-.004.752-.014.173-.007.343-.013.513-.054.13-.031.23-.08.318-.186.056-.071.1-.15.133-.235.088-.209.15-.425.213-.641.245-.83.466-1.665.692-2.499l.675-2.503.67-2.505h3.84z"/>
    </svg>
  ),
  ThreeJS: (
    <svg viewBox="0 0 128 128" className="w-5 h-5 inline-block shrink-0" fill="#14213D">
      <path d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z" />
      <path d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z" />
      <path d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z" />
    </svg>
  ),
  VSCode: (
    <svg viewBox="0 0 100 100" className="w-5 h-5 inline-block shrink-0">
      <path d="M71.4 99.3a6.2 6.2 0 0 0 5-.2l20.6-9.9a6.2 6.2 0 0 0 3.5-5.6V16.4a6.2 6.2 0 0 0-3.5-5.6L76.4.9a6.2 6.2 0 0 0-7.1 1.2L29.9 38 12.2 25a4.2 4.2 0 0 0-5.3.2L1.4 30.2a4.2 4.2 0 0 0 0 6.2L16.2 50 1.4 63.6a4.2 4.2 0 0 0 0 6.2l5.5 5a4.2 4.2 0 0 0 5.3.2L29.9 62l39.4 36a6.2 6.2 0 0 0 2.1 1.3z" fill="#0065A9" />
      <path d="M76.4 99.1l20.6-9.9a6.2 6.2 0 0 0 3.5-5.6V16.4a6.2 6.2 0 0 0-3.5-5.6L76.4.9c2.3 2.3 6.2.7 6.2-2.6v97.4c0-3.3-3.9-4.9-6.2-2.6z" fill="#1F9CF0" />
      <path d="M75.5 27.3L45.1 50l30.4 22.7V27.3z" fill="#007ACC" />
    </svg>
  ),
};

export const DEFAULT_APP_LOGOS: LogoItem[] = [
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.Figma} Figma</span>, title: "Figma" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.React} React</span>, title: "React" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.TypeScript} TypeScript</span>, title: "TypeScript" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.TailwindCSS} Tailwind CSS</span>, title: "Tailwind CSS" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.DaVinciResolve} DaVinci Resolve</span>, title: "DaVinci Resolve" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.PremierePro} Premiere Pro</span>, title: "Premiere Pro" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.DJI} DJI Fly</span>, title: "DJI Fly" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.ThreeJS} Three.js</span>, title: "Three.js" },
  { node: <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-[#14213D]">{APP_ICONS.VSCode} VS Code</span>, title: "VS Code" },
];

export interface LogoLoopProps {
  logos?: LogoItem[];
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
  logos = DEFAULT_APP_LOGOS, speed = 120, direction = 'left', width = '100%',
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
