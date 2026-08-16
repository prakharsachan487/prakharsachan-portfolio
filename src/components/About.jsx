import './About.css';

const areas = [
  'Short-Form Editing', 'Reels', 'YouTube Shorts', 'Social Media Content',
  'Motion Graphics', 'Visual Storytelling', 'Pacing', 'Transitions',
  'Sound Design', 'Color Grading',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__bg-number" aria-hidden="true">A</div>
      <div className="about__content">
        <div className="about__left">
          <div className="about__tag">About</div>
          <h2 className="about__headline">
            I Don&apos;t Just<br />
            Cut Videos.<br />
            <em>I Build<br />Attention.</em>
          </h2>
        </div>

        <div className="about__right">
          <p className="about__text">
            <strong>Prakhar Sachan</strong> is a video editor focused on creating engaging,
            visually sharp and story-driven content for modern digital platforms.
          </p>
          <p className="about__text">
            With <strong>6 months of hands-on experience</strong>, he focuses on turning raw footage
            into content that feels fast, intentional and memorable — the kind that makes people
            stop scrolling and actually watch.
          </p>
          <p className="about__text">
            Every cut is deliberate. Every transition earns its place. The goal is never
            just to edit — it&apos;s to create content that holds attention from the first
            frame to the last.
          </p>

          <div className="about__areas">
            {areas.map((area) => (
              <span key={area} className="about__area">{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
