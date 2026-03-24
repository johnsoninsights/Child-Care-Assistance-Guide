import useInView from '../hooks/useInView'

export default function CTA() {
  const [ref, visible] = useInView()

  return (
    <section className="cta" id="contact" ref={ref} aria-label="Apply now">
      <div className="container">
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>
          Ready to Start?
        </span>

        <h2 className={`section-heading reveal${visible ? ' visible d1' : ''}`}>
          Your family deserves<br />this support.
        </h2>

        <p className={`cta__subtext reveal${visible ? ' visible d2' : ''}`}>
          Apply today — it's free, and you could be approved within 30 days.
          No income is too high to check.
        </p>

        <div className={`cta__actions reveal${visible ? ' visible d3' : ''}`}>
          <a
            href="https://mybenefits.ny.gov"
            className="btn btn--primary btn--large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply on MyBenefits NY
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="tel:18773227669" className="btn btn--white">
            Call 1-877-322-7669
          </a>
        </div>

        <div className={`cta__contact reveal${visible ? ' visible d4' : ''}`}>
          <p>Office hours: Mon–Fri, 8:30am – 5:00pm EST</p>
          <p>
            Questions? Email{' '}
            <a href="mailto:childcare@dss.ny.gov">childcare@dss.ny.gov</a>
          </p>
          <p>
            Find your local office at{' '}
            <a href="https://otda.ny.gov/workingfamilies/dss.asp" target="_blank" rel="noopener noreferrer">
              otda.ny.gov
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
