export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            CCAP NY
            <span className="footer__logo__dot" aria-hidden="true" />
          </div>

          <nav className="footer__links" aria-label="Footer navigation">
            <a href="#eligibility">Eligibility</a>
            <a href="#income">Income Limits</a>
            <a href="#apply">How to Apply</a>
            <a href="#documents">Documents</a>
            <a href="#faq">FAQ</a>
          </nav>

          <p>
            © {new Date().getFullYear()} New York Childcare Assistance Program.
            Information is for guidance only — confirm details with your local DSS office.
          </p>
        </div>
      </div>
    </footer>
  )
}
