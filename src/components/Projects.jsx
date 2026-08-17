import { useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    num: '01',
    video: '/videos/project-01.mp4',
    category: 'Cinematic Edit',
    name: 'Visual Story',
    desc: 'Cinematic editing with dynamic pacing and visual storytelling.',
    year: '2024',
    layout: 'landscape',
  },
  {
    id: 2,
    num: '02',
    video: '/videos/project-04.mp4',
    category: 'Short-Form',
    name: 'Reels Edit',
    desc: 'High-retention short-form content built for social platforms.',
    year: '2024',
    layout: 'portrait',
    reverse: true,
  },
  {
    id: 3,
    num: '03',
    video: '/videos/project-02.mp4',
    category: 'Content Edit',
    name: 'Motion Content',
    desc: 'Fast-paced visual content with impactful transitions.',
    year: '2024',
    layout: 'wide',
  },
  {
    id: 4,
    num: '04',
    video: '/videos/0188.mp4',
    category: 'Social Media',
    name: 'Social Cut',
    desc: 'Scroll-stopping edits for modern social media.',
    year: '2024',
    layout: 'square',
  },
  {
    id: 5,
    num: '05',
    video: '/videos/project-03.mp4',
    category: 'Cinematic Edit',
    name: 'Story Arc',
    desc: 'Narrative-driven editing with cinematic treatment.',
    year: '2024',
    layout: 'landscape',
    reverse: true,
  },
  {
    id: 6,
    num: '06',
    video: '/videos/0882.mp4',
    category: 'Short-Form',
    name: 'Quick Impact',
    desc: 'Maximum impact in minimum time — short-form at its best.',
    year: '2024',
    layout: 'portrait',
  },
  {
    id: 7,
    num: '07',
    video: '/videos/project-07.mp4',
    category: 'Motion',
    name: 'Visual Flow',
    desc: 'Smooth transitions and rhythm-driven motion editing.',
    year: '2024',
    layout: 'landscape',
    reverse: true,
  },
  {
    id: 8,
    num: '08',
    video: '/videos/0816.mp4',
    category: 'Content Edit',
    name: 'Creator Cut',
    desc: 'Content editing tailored for creators and brands.',
    year: '2024',
    layout: 'square',
  },
  {
    id: 9,
    num: '09',
    video: '/videos/Video-3373.mp4',
    category: 'Short-Form',
    name: 'Rapid Fire',
    desc: 'Quick-cut sequences that command attention in seconds.',
    year: '2024',
    layout: 'portrait',
  },
  {
    id: 10,
    num: '10',
    video: '/videos/Video-25529.mp4',
    category: 'Motion',
    name: 'Kinetic Pulse',
    desc: 'Energy-driven motion graphics with punchy timing.',
    year: '2024',
    layout: 'landscape',
    reverse: true,
  },
  {
    id: 11,
    num: '11',
    video: '/videos/Video-20489.mp4',
    category: 'Content Edit',
    name: 'Micro Story',
    desc: 'Bite-sized storytelling crafted for maximum engagement.',
    year: '2024',
    layout: 'square',
  },
  {
    id: 12,
    num: '12',
    video: '/videos/Video-51870.mp4',
    category: 'Social Media',
    name: 'Scroll Hook',
    desc: 'Attention-grabbing edits designed to stop the scroll.',
    year: '2024',
    layout: 'portrait',
    reverse: true,
  },
  {
    id: 13,
    num: '13',
    video: '/videos/0816-1.mp4',
    category: 'Cinematic Edit',
    name: 'Frame Perfect',
    desc: 'Precision editing with cinematic grade and polish.',
    year: '2024',
    layout: 'landscape',
  },
  {
    id: 14,
    num: '14',
    video: '/videos/Video-70140.mp4',
    category: 'Short-Form',
    name: 'Snap Edit',
    desc: 'Ultra-short format with razor-sharp cuts.',
    year: '2024',
    layout: 'square',
    reverse: true,
  },
  {
    id: 15,
    num: '15',
    video: '/videos/Video-72634.mp4',
    category: 'Motion',
    name: 'Drift',
    desc: 'Fluid motion design with seamless visual transitions.',
    year: '2024',
    layout: 'portrait',
  },
  {
    id: 16,
    num: '16',
    video: '/videos/Video-81678.mp4',
    category: 'Content Edit',
    name: 'Raw Cut',
    desc: 'Authentic content editing with raw, unfiltered energy.',
    year: '2024',
    layout: 'landscape',
    reverse: true,
  },
  {
    id: 17,
    num: '17',
    video: '/videos/showreel.mp4',
    category: 'Selected Work',
    name: 'Main Showreel',
    desc: 'A compilation of the best work — cinematic, fast, and impactful.',
    year: '2024',
    layout: 'wide',
  },
  {
    id: 18,
    num: '18',
    video: '/videos/17aug_analysis.mp4',
    category: 'Clipping',
    name: 'Clipping',
    desc: 'In-depth analysis with precise clipping and sharp editorial cuts.',
    year: '2024',
    layout: 'landscape',
  },
];

export default function Projects({ onPlay }) {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  function handleVideoHover(e, play) {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      if (play) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }

  return (
    <section className="projects" id="work">
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__title">Selected Work</h2>
          <span className="projects__count">{projectsData.length} Projects</span>
        </div>
        <div className="projects__divider" />

        <div className="projects__grid">
          {projectsData.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[i] = el)}
              className={`project project--${project.layout} ${project.reverse ? 'project--reverse' : ''}`}
            >
              <div className="project__number">{project.num}</div>

              <div
                className="project__video-wrap"
                data-cursor="video"
                onMouseEnter={(e) => handleVideoHover(e, true)}
                onMouseLeave={(e) => handleVideoHover(e, false)}
                onClick={() => onPlay(project.video, project.name, project.category, i)}
              >
                <video
                  className="project__video"
                  src={project.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="project__overlay" />
              </div>

              <div className="project__info">
                <span className="project__category">{project.category}</span>
                <h3 className="project__name">{project.name}</h3>
                <div className="project__line" />
                <p className="project__desc">{project.desc}</p>
                <span className="project__year">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
