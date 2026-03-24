import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="/" className="header__logo" aria-label="CCAP NY home">
          CCAP NY
          <span className="header__logo__dot" aria-hidden="true" />
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`} aria-label="Main navigation">
          <a href="#eligibility" onClick={close}>Eligibility</a>
          <a href="#income" onClick={close}>Income Limits</a>
          <a href="#apply" onClick={close}>How to Apply</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#contact" className="header__nav__cta" onClick={close}>Apply Now</a>
        </nav>

        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="header__burger__line" />
          <span className="header__burger__line" />
          <span className="header__burger__line" />
        </button>
      </div>
    </header>
  )
}
