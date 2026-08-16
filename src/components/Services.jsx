import { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    num: '01',
    name: 'Short-Form Video Editing',
    tags: ['Instagram Reels', 'YouTube Shorts', 'TikTok-Style Content', 'Vertical Video'],
  },
  {
    num: '02',
    name: 'Social Media Editing',
    tags: ['High-Retention Content', 'Creator Content', 'Brand Content', 'Trending Formats'],
  },
  {
    num: '03',
    name: 'Motion & Visuals',
    tags: ['Motion Graphics', 'Text Animation', 'Visual Effects', 'Kinetic Typography'],
  },
  {
    num: '04',
    name: 'Content Editing',
    tags: ['Talking-Head Edits', 'Story-Driven Edits', 'Dynamic Pacing', 'Podcast Clips'],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="services" id="services">
      <div className="services__header">
        <h2 className="services__title">Services</h2>
        <span className="services__subtitle">What I can do for you</span>
      </div>

      <div className="services__list">
        {servicesData.map((service, i) => (
          <div key={service.num} className={`service-item ${openIndex === i ? 'open' : ''}`}>
            <button className="service-item__header" onClick={() => toggle(i)} data-cursor="cta">
              <div className="service-item__left">
                <span className="service-item__number">{service.num}</span>
                <span className="service-item__name">{service.name}</span>
              </div>
              <span className="service-item__toggle">+</span>
            </button>
            <div className="service-item__body">
              <div className="service-item__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-item__tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
