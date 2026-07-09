import { useCallback, useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

const defaultMarkers = [
  {
    id: 'america-sul',
    location: [-23.55, -46.63],
    name: 'América',
    note: 'Brasil e LATAM',
  },
  {
    id: 'america-norte',
    location: [40.71, -74.0],
    name: 'América',
    note: 'Estados Unidos',
  },
  {
    id: 'europa',
    location: [48.85, 2.35],
    name: 'Europa',
    note: 'clientes e parceiros',
  },
  {
    id: 'asia',
    location: [35.68, 139.65],
    name: 'Ásia',
    note: 'operações digitais',
  },
];

export default function GlobeInteractive({ markers = defaultMarkers, className = '', speed = 0.003 }) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const dragOffset = useRef({ phi: 0, theta: 0 });
  const phiOffsetRef = useRef(0);
  const thetaOffsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const [activeMarker, setActiveMarker] = useState(markers[0]?.id ?? null);

  const handlePointerDown = useCallback((event) => {
    pointerInteracting.current = { x: event.clientX, y: event.clientY };
    isPausedRef.current = true;

    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grabbing';
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi;
      thetaOffsetRef.current += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
    }

    pointerInteracting.current = null;
    isPausedRef.current = false;

    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab';
    }
  }, []);

  useEffect(() => {
    function handlePointerMove(event) {
      if (pointerInteracting.current === null) {
        return;
      }

      dragOffset.current = {
        // Horizontal pixels become globe radians. A larger divisor makes dragging feel premium,
        // not twitchy, while still using only transform-like shader state updates.
        phi: (event.clientX - pointerInteracting.current.x) / 300,
        theta: (event.clientY - pointerInteracting.current.y) / 1000,
      };
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerUp]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    let globe = null;
    let animationId = 0;
    let phi = 0;
    let resizeObserver = null;

    function initializeGlobe() {
      const width = canvas.offsetWidth;

      if (!width || globe) {
        return;
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.18,
        dark: 0,
        diffuse: 1.45,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.29, 0.17],
        glowColor: [1, 0.94, 0.9],
        markerElevation: 0.02,
        markers: markers.map((marker) => ({
          location: marker.location,
          size: marker.id === activeMarker ? 0.06 : 0.035,
          id: marker.id,
        })),
        arcs: [
          { from: [-23.55, -46.63], to: [48.85, 2.35], id: 'america-europa' },
          { from: [-23.55, -46.63], to: [35.68, 139.65], id: 'america-asia' },
          { from: [40.71, -74.0], to: [48.85, 2.35], id: 'america-norte-europa' },
        ],
        arcColor: [1, 0.29, 0.17],
        arcWidth: 0.55,
        arcHeight: 0.28,
        opacity: 0.92,
      });

      function animate() {
        if (!prefersReducedMotion && !isPausedRef.current) {
          phi += speed;
        }

        globe.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.18 + thetaOffsetRef.current + dragOffset.current.theta,
        });

        animationId = requestAnimationFrame(animate);
      }

      animate();
      canvas.classList.add('is-ready');
    }

    if (canvas.offsetWidth > 0) {
      initializeGlobe();
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver.disconnect();
          resizeObserver = null;
          initializeGlobe();
        }
      });
      resizeObserver.observe(canvas);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      if (globe) {
        globe.destroy();
      }

      canvas.classList.remove('is-ready');
    };
  }, [activeMarker, markers, prefersReducedMotion, speed]);

  return (
    <div className={`global-globe ${className}`}>
      <canvas
        ref={canvasRef}
        className="global-globe__canvas"
        onPointerDown={handlePointerDown}
        aria-label="Globo interativo mostrando presença da RBK na América, Europa e Ásia"
      />

      <div className="global-globe__labels" aria-label="Regiões atendidas">
        {markers.map((marker) => (
          <button
            className={`global-globe__label ${activeMarker === marker.id ? 'is-active' : ''}`}
            key={marker.id}
            type="button"
            onClick={() => setActiveMarker(marker.id)}
          >
            <span>{marker.name}</span>
            <small>{marker.note}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
