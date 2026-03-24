import useInView from '../hooks/useInView'

// Clean stroke-based SVG icons — one per card
const icons = [
  // Financial relief — dollar coin
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M14.5 9.5a2.5 2.5 0 00-5 0c0 3.5 5 3.5 5 7a2.5 2.5 0 01-5 0" />
  </svg>,
  // More families — people/community
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>,
  // Quality care — shield with checkmark
  <svg key="c" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
]

const cards = [
  {
    num: '01',
    title: 'No Out-of-Pocket Tuition While You Apply',
    desc: 'Once you submit your CCAP application, you pay nothing toward tuition while we process your case — keeping your child enrolled without financial stress.',
    tag: 'Immediate Relief',
  },
  {
    num: '02',
    title: 'Expanded Income Limits – More Families Qualify',
    desc: "Recent updates raised the income threshold to 85% of State Median Income, meaning hundreds of thousands more New York families now qualify for assistance.",
    tag: 'Updated 2024',
  },
  {
    num: '03',
    title: 'Peace of Mind with Quality Care',
    desc: "CCAP-enrolled providers meet New York State licensing standards. You choose the childcare that's right for your family from a network of trusted, vetted providers.",
    tag: 'Licensed Providers',
  },
]

export default function Benefits() {
  const [ref, visible] = useInView()

  return (
    <section className="benefits section" id="benefits" ref={ref}>
      {/* Background glow orbs — the glass cards blur these into halos */}
      <div className="benefits__orb benefits__orb--1" aria-hidden="true" />
      <div className="benefits__orb benefits__orb--2" aria-hidden="true" />
      <div className="benefits__orb benefits__orb--3" aria-hidden="true" />

      <div className="container">
        <div className={`benefits__header reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Why CCAP</span>
          <h2 className="section-heading">Support designed<br />for real families</h2>
        </div>

        <div className="benefits__grid">
          {cards.map((c, i) => (
            <div
              key={c.num}
              className={`benefits__card reveal${visible ? ` visible d${i + 1}` : ''}`}
            >
              <div className="benefits__card__icon-wrap">
                {icons[i]}
              </div>
              <div className="benefits__card__num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="benefits__card__tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
