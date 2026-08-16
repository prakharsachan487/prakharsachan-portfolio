import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastY);
      setLastY(y);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="navbar__logo" data-cursor="cta">
        <span className="navbar__logo-dot" />
        PS
      </div>

      <div className="navbar__links">
        <button className="navbar__link" data-cursor="cta" onClick={() => scrollTo('work')}>Work</button>
        <button className="navbar__link" data-cursor="cta" onClick={() => scrollTo('about')}>About</button>
        <button className="navbar__link" data-cursor="cta" onClick={() => scrollTo('services')}>Services</button>
        <button className="navbar__link" data-cursor="cta" onClick={() => scrollTo('contact')}>Contact</button>
      </div>

      <div className="navbar__status">
        <span className="navbar__status-dot" />
        Available
      </div>
    </nav>
  );
}
