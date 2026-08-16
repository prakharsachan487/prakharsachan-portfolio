import { useEffect, useRef } from 'react';
import './Timeline.css';

const markers = [
  { time: '00:00', label: 'Hook', sub: 'Grab Attention' },
  { time: '00:02', label: 'Cut', sub: 'Set The Pace' },
  { time: '00:05', label: 'Build', sub: 'Create Tension' },
  { time: '00:08', label: 'Impact', sub: 'Deliver The Moment' },
  { time: '00:12', label: 'Payoff', sub: 'Leave An Impression' },
];

export default function Timeline() {
  const trackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline">
      <div className="timeline__header">
        <div className="timeline__tag">The Anatomy of an Edit</div>
        <h2 className="timeline__title">Every Second Counts</h2>
      </div>

      <div className="timeline__track" ref={trackRef}>
        <div className="timeline__line">
          <div className="timeline__line-fill" />
        </div>
        <div className="timeline__playhead" />
        <div className="timeline__markers">
          {markers.map((marker) => (
            <div key={marker.time} className="timeline__marker">
              <span className="timeline__marker-time">{marker.time}</span>
              <span className="timeline__marker-dot" />
              <span className="timeline__marker-label">{marker.label}</span>
              <span className="timeline__marker-sub">{marker.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
