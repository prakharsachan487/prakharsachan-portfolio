import { useEffect, useRef } from 'react';
import './EditingStyle.css';

const principles = [
  { num: '01', name: 'Pacing', desc: 'Every cut has a purpose. The rhythm of the edit drives the emotion of the story.' },
  { num: '02', name: 'Story', desc: 'Editing is more than transitions. It\'s about building a narrative that keeps viewers invested.' },
  { num: '03', name: 'Retention', desc: 'The first seconds matter. Hook fast, hold attention, deliver impact.' },
  { num: '04', name: 'Sound', desc: 'Audio creates emotion. The right sound design transforms a good edit into a great one.' },
  { num: '05', name: 'Rhythm', desc: 'Visuals should move with intention. Every frame follows a beat, a flow, a purpose.' },
  { num: '06', name: 'Detail', desc: 'Small choices create premium results. Color, timing, typography — the details matter.' },
];

export default function EditingStyle() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, parseInt(entry.target.dataset.delay) || 0);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="editing-style">
      <div className="editing-style__header">
        <div className="editing-style__tag">Philosophy</div>
        <h2 className="editing-style__title">How I Edit</h2>
      </div>

      <div className="editing-style__grid">
        {principles.map((p, i) => (
          <div
            key={p.num}
            ref={(el) => (refs.current[i] = el)}
            className="style-principle"
            data-delay={i * 100}
          >
            <span className="style-principle__number">{p.num}</span>
            <h3 className="style-principle__name">{p.name}</h3>
            <div className="style-principle__line" />
            <p className="style-principle__desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
