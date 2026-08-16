import { useEffect, useRef } from 'react';
import './Process.css';

const steps = [
  { num: '01', name: 'Raw Footage', desc: 'Receive the raw material — clips, audio, assets and creative direction.' },
  { num: '02', name: 'Select', desc: 'Review everything. Pick the strongest moments, the sharpest angles, the best takes.' },
  { num: '03', name: 'Cut', desc: 'Build the structure. Create the rough cut that shapes the narrative.' },
  { num: '04', name: 'Pace', desc: 'Refine the rhythm. Every cut, every beat, every transition earns its place.' },
  { num: '05', name: 'Sound', desc: 'Layer the audio. Music, SFX, voiceover — all synchronized to the visual flow.' },
  { num: '06', name: 'Polish', desc: 'Color grade, add motion graphics, fine-tune every detail until it feels premium.' },
  { num: '07', name: 'Export', desc: 'Deliver the final product — optimized, formatted, and ready to post.' },
];

export default function Process() {
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
    <section className="process">
      <div className="process__header">
        <div className="process__tag">Workflow</div>
        <h2 className="process__title">The Process</h2>
      </div>

      <div className="process__steps">
        {steps.map((step, i) => (
          <div
            key={step.num}
            ref={(el) => (refs.current[i] = el)}
            className="process-step"
            data-delay={i * 120}
          >
            <div className="process-step__marker">
              <span className="process-step__number">{step.num}</span>
              <span className="process-step__dot" />
            </div>
            <div className="process-step__content">
              <h3 className="process-step__name">{step.name}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
