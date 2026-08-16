import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <div className="footer__name">Prakhar Sachan</div>
          <div className="footer__role">Video Editor · Short-Form Content · Motion</div>
        </div>

        <div className="footer__divider" />

        <button className="footer__back-top" onClick={scrollToTop} data-cursor="cta">
          Back To Top ↑
        </button>

        <div className="footer__divider" />

        <div className="footer__right">
          <div className="footer__available">Available for freelance</div>
          <div className="footer__copy">© {year} Prakhar Sachan. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
