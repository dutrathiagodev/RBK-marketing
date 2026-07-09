import { createElement, useRef } from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal.js';

export default function Reveal({
  as = 'div',
  children,
  className = '',
  stagger = false,
  selector,
  y,
}) {
  const ref = useRef(null);

  useGsapReveal(ref, {
    selector: selector ?? (stagger ? '.stagger-item' : undefined),
    stagger,
    y,
  });

  return createElement(
    as,
    {
      ref,
      className: ['reveal-block', className].filter(Boolean).join(' '),
    },
    children,
  );
}
