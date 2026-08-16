import { useEffect, useRef } from 'react';
import './VideoModal.css';

export default function VideoModal({ isOpen, videoSrc, title, category, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen, videoSrc]);

  useEffect(() => {
    function handleKey(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className={`video-modal ${isOpen ? 'open' : ''}`}>
      <div className="video-modal__backdrop" onClick={onClose} />
      <div className="video-modal__content">
        <button className="video-modal__close" onClick={onClose} data-cursor="cta">
          Close <span className="video-modal__close-x">✕</span>
        </button>
        <div className="video-modal__video-wrap">
          {isOpen && videoSrc && (
            <video
              ref={videoRef}
              className="video-modal__video"
              src={videoSrc}
              controls
              playsInline
              preload="auto"
            />
          )}
        </div>
        <div className="video-modal__info">
          <div className="video-modal__title">{title}</div>
          <div className="video-modal__category">{category}</div>
        </div>
        {(hasPrev || hasNext) && (
          <div className="video-modal__nav">
            <button className="video-modal__nav-btn" onClick={onPrev} disabled={!hasPrev} data-cursor="cta">
              ← Prev
            </button>
            <button className="video-modal__nav-btn" onClick={onNext} disabled={!hasNext} data-cursor="cta">
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
