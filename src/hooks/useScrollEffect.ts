import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export const useScrollEffect = () => {
    useEffect(() => {
        // Initialize ScrollTrigger
        ScrollTrigger.refresh();

        // Cleanup on unmount
        return () => {
            ScrollTrigger.killAll();
        };
    }, []);
};

export const useFadeIn = (options: {
    trigger: string | Element | null;
    start?: string;
    end?: string;
    scrub?: number | boolean;
}) => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!options.trigger) return; // guard: skip if null

        const ctx = gsap.context(() => {
            gsap.fromTo(
                options.trigger,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: options.trigger,
                        start: options.start || "top 80%",
                        end: options.end || "bottom bottom",
                        scrub: options.scrub ?? false,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [options.trigger, options.start, options.end, options.scrub]);
};

export const useStaggerFadeIn = (options: {
    targets: string | (Element | null)[];
    stagger?: number;
    start?: string;
    end?: string;
    scrub?: number | boolean;
}) => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Guard: filter out null elements; skip if nothing to animate
        const validTargets = Array.isArray(options.targets)
            ? options.targets.filter(Boolean)
            : options.targets;
        if (!validTargets || (Array.isArray(validTargets) && validTargets.length === 0)) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                validTargets,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: options.stagger ?? 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: validTargets,
                        start: options.start || "top 80%",
                        end: options.end || "bottom bottom",
                        scrub: options.scrub ?? false,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [options.targets, options.stagger, options.start, options.end, options.scrub]);
};

export const useParallax = (options: {
    target: string | Element | null;
    speed?: number;
}) => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (!options.target) return; // guard: skip if null

        const ctx = gsap.context(() => {
            gsap.to(options.target, {
                yPercent: options.speed ?? 20,
                ease: "none",
                scrollTrigger: {
                    trigger: options.target,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, [options.target, options.speed]);
};