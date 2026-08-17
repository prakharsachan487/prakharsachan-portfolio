import { useRef } from 'react';
import './Clipping.css';

export default function Clipping({ onPlay }) {
  const videoRef = useRef(null);

  function handleMouseEnter() {
    videoRef.current?.play().catch(() => {});
  }

  function handleMouseLeave() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <section className="clipping" id="clipping">
      <div className="container">
        <div className="clipping__header">
          <h2 className="clipping__title">
            Clipping
            <em>Analysis</em>
          </h2>
          <span className="clipping__label">2024 — Present</span>
        </div>

        <div
          className="clipping__video-wrap"
          data-cursor="video"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onPlay('/videos/17aug_analysis.mp4', 'Aug Analysis', 'Clipping')}
        >
          <video
            ref={videoRef}
            className="clipping__video"
            src="/videos/17aug_analysis.mp4"
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="clipping__overlay" />
          <div className="clipping__play" />
          <div className="corner-mark corner-mark--tl" />
          <div className="corner-mark corner-mark--br" />
          <div className="clipping__rec">
            <span className="clipping__rec-dot" />
            Rec
          </div>
          <div className="clipping__info">
            <div className="clipping__info-title">Aug Analysis</div>
            <div className="clipping__info-cat">Clipping · 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}
