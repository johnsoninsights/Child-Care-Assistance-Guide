// Photo: replace with a real project image — ideally a warm, vertical shot of
// a child or parent/child at a childcare setting (portrait orientation, 3:4).
// This warm-toned image features a mother and child in golden-hour light.
const HERO_IMG = 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=740&auto=format&fit=crop&q=80'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">

      {/* Animated gradient orbs */}
      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      {/* Drifting ghost letters */}
      <span className="hero__bg-text" aria-hidden="true">NY</span>

      <div className="container">
        <div className="hero__split">

          {/* ── Left: content ── */}
          <div className="hero__content">
            <div className="hero__badge">
              New York State Program
            </div>

            <h1 className="hero__heading">
              <span className="hero__line-wrap">
                <span className="hero__line hero__line--1">Help Is Here</span>
              </span>
              <span className="hero__line-wrap">
                <span className="hero__line hero__line--2">for <em>Your Family</em></span>
              </span>
            </h1>

            <p className="hero__subtext">
              Childcare costs shouldn't hold your family back. New York's CCAP
              helps cover the cost of quality care — so you can work, study, or
              train knowing your child is in good hands.
            </p>

            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary btn--large">
                Check My Eligibility
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#apply" className="btn btn--ghost">
                How It Works
              </a>
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div className="hero__photo-col" aria-hidden="true">
            {/* Depth layers behind the frame */}
            <div className="hero__depth-block" />
            <div className="hero__accent-ring" />

            <div className="hero__photo-frame">
              <img
                src={HERO_IMG}
                alt="A parent and young child together"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Pop-out tag — sits above the frame top edge */}
            <div className="hero__frame-tag">
              <span className="hero__frame-tag__dot" />
              NY Licensed Provider
            </div>

            {/* Info pill below the frame */}
            <div className="hero__photo-pill">
              <span className="hero__photo-pill__dot" />
              Free to apply · Decision in 30 days
            </div>
          </div>

        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll__line" />
        <span className="hero__scroll__label">Scroll</span>
      </div>

    </section>
  )
}
