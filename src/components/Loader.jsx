import { useState, useEffect } from 'react';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let frame;
    let start = null;
    const duration = 2200;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setLoaded(true);
          setTimeout(() => onComplete?.(), 600);
        }, 400);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <div className={`loader ${loaded ? 'loaded' : ''}`}>
      <div className="loader__name">Prakhar Sachan</div>
      <div className="loader__role">Video Editor</div>
      <div className="loader__bar-container">
        <div className="loader__bar" style={{ width: `${count}%` }} />
      </div>
      <div className="loader__count">{String(count).padStart(3, '0')}</div>
      <div className="loader__line">Loading Showreel</div>
    </div>
  );
}
