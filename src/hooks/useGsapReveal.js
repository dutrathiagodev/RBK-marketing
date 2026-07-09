import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion.js';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(ref, { selector, stagger = false, y = 24 } = {}) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = ref.current;

    if (!root) {
      return undefined;
    }

    if (prefersReducedMotion) {
      gsap.set(selector ? root.querySelectorAll(selector) : root, {
        autoAlpha: 1,
        y: 0,
        clearProps: 'transform,opacity,visibility',
      });
      return undefined;
    }

    const targets = selector ? root.querySelectorAll(selector) : root;

    // Transform and opacity stay on the compositor path, avoiding layout recalculation.
    gsap.set(targets, { autoAlpha: 0, y });

    const tween = gsap.to(targets, {
      autoAlpha: 1,
      y: 0,
      duration: 0.72,
      ease: 'power2.out',
      // Each item waits a tiny multiple of its index, creating a cascade without animating layout.
      stagger: stagger ? 0.08 : 0,
      scrollTrigger: {
        trigger: root,
        start: 'top 90%',
        once: true,
      },
    });

    return () => {
      tween.kill();
      tween.scrollTrigger?.kill();
    };
  }, [prefersReducedMotion, ref, selector, stagger, y]);
}
