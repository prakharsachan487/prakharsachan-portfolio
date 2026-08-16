import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorState, setCursorState] = useState('');
  const [label, setLabel] = useState('');
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    function onMouseMove(e) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }

    function animate() {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      requestAnimationFrame(animate);
    }

    function onMouseOver(e) {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        const type = el.dataset.cursor;
        setCursorState(`hover-${type}`);
        const labels = { video: 'PLAY', project: 'VIEW', cta: '→' };
        setLabel(labels[type] || '');
      }
    }

    function onMouseOut(e) {
      const el = e.target.closest('[data-cursor]');
      if (el) {
        setCursorState('');
        setLabel('');
      }
    }

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`custom-cursor ${cursorState}`}>
      <div className="cursor__dot" />
      <div className="cursor__ring" />
      {label && <div className="cursor__label">{label}</div>}
    </div>
  );
}
