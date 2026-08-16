import './Skills.css';

const skills = [
  'Video Editing', 'Short-Form Editing', 'Motion Graphics',
  'Sound Design', 'Color Grading', 'Transitions',
  'Typography', 'Visual Storytelling', 'Retention Editing', 'Content Pacing',
];

const tools = [
  'Premiere Pro', 'After Effects', 'CapCut', 'DaVinci Resolve', 'Photoshop',
];

export default function Skills() {
  // Double the skills array for seamless marquee
  const doubled = [...skills, ...skills];

  return (
    <section className="skills">
      <div className="skills__header">
        <div className="skills__tag">Expertise</div>
        <h2 className="skills__title">Skills & Tools</h2>
      </div>

      <div className="skills__marquee">
        <div className="skills__marquee-track">
          {doubled.map((skill, i) => (
            <span key={i}>
              <span className="skills__marquee-item">{skill}</span>
              {i < doubled.length - 1 && (
                <span className="skills__marquee-separator"> · </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="skills__tools">
        <div className="skills__tools-title">Tools I Work With</div>
        <div className="skills__tools-grid">
          {tools.map((tool) => (
            <div key={tool} className="skills__tool">{tool}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
