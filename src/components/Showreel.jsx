import { useRef } from 'react';
import './Showreel.css';

export default function Showreel({ onPlay }) {
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
    <section className="showreel" id="showreel">
      <div className="container">
        <div className="showreel__header">
          <h2 className="showreel__title">
            The Reel
            <em>Featured Work</em>
          </h2>
          <span className="showreel__label">2024 — Present</span>
        </div>

        <div
          className="showreel__video-wrap"
          data-cursor="video"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onPlay('/videos/Video-70140.mp4', 'Snap Edit', 'Short-Form')}
        >
          <video
            ref={videoRef}
            className="showreel__video"
            src="/videos/Video-70140.mp4"
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="showreel__overlay" />
          <div className="showreel__play" />
          <div className="corner-mark corner-mark--tl" />
          <div className="corner-mark corner-mark--br" />
          <div className="showreel__rec">
            <span className="showreel__rec-dot" />
            Rec
          </div>
          <div className="showreel__info">
            <div className="showreel__info-title">Snap Edit</div>
            <div className="showreel__info-cat">Short-Form · 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}
