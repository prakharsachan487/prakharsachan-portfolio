import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__bg-text">HIRE</div>
      </div>

      <div className="contact__content">
        <div className="contact__tag">Let&apos;s Work Together</div>
        <h2 className="contact__headline">
          Got Footage?<br />
          Let&apos;s Make It<br />
          <em>Hit Different.</em>
        </h2>
        <p className="contact__sub">
          Looking for a video editor who cares about every cut, every transition,
          and every second of watch time? Let&apos;s talk.
        </p>

        <a
          className="contact__cta"
          href="mailto:prakharsachan487@gmail.com"
          data-cursor="cta"
        >
          Start A Project
          <span className="contact__cta-arrow">→</span>
        </a>

        <div className="contact__links">
          <a className="contact__link" href="mailto:prakharsachan487@gmail.com" data-cursor="cta">
            <span className="contact__link-label">Email</span>
            <span className="contact__link-value">prakharsachan487@gmail.com</span>
          </a>
          <a className="contact__link" href="https://t.me/prakharsachan666" target="_blank" rel="noopener noreferrer" data-cursor="cta">
            <span className="contact__link-label">Telegram</span>
            <span className="contact__link-value">prakharsachan666</span>
          </a>
          <span className="contact__link" data-cursor="cta">
            <span className="contact__link-label">Discord</span>
            <span className="contact__link-value">prakharsachan_</span>
          </span>
        </div>

        <div className="contact__available">
          <span className="contact__available-dot" />
          Available For Freelance
        </div>
      </div>
    </section>
  );
}
