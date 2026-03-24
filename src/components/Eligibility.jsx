import useInView from '../hooks/useInView'

// Replace with a warm photo of a parent/child or family — ideally outdoors or
// in a welcoming indoor setting. Portrait or square crop works best.
const ASIDE_IMG = 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&auto=format&fit=crop&q=80'

const criteria = [
  {
    title: "Child's Age",
    desc: "Your child must be under 13 years old. Children up to age 19 may qualify if they have a disability or are under court supervision.",
  },
  {
    title: 'Parent Activity',
    desc: "At least one parent or caretaker must be working, attending school or job training, or actively looking for work. You may also qualify if a parent has a documented disability.",
  },
  {
    title: 'Household Income',
    desc: "Your household income must be at or below 85% of New York State Median Income (SMI). See the income table below for specific limits by family size.",
  },
  {
    title: 'Residency',
    desc: 'You must be a New York State resident. There is no minimum residency requirement — you may apply as soon as you establish residency in NY.',
  },
]

export default function Eligibility() {
  const [ref, visible] = useInView()

  return (
    <section className="eligibility section" id="eligibility" ref={ref}>
      <div className="container">
        <div className={`reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Do I Qualify?</span>
          <h2 className="section-heading">Eligibility requirements</h2>
          <p className="section-subtext">
            CCAP is designed to be accessible. Meet all four criteria below and
            you're likely eligible for assistance.
          </p>
        </div>

        <div className="eligibility__layout">
          <ol className="eligibility__list" aria-label="Eligibility criteria">
            {criteria.map((item, i) => (
              <li
                key={item.title}
                className={`eligibility__item reveal${visible ? ` visible d${i + 1}` : ''}`}
              >
                <div className="eligibility__item__num" aria-hidden="true">{i + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Sticky aside with photo background */}
          <aside className={`eligibility__aside reveal${visible ? ' visible d3' : ''}`}>
            <div className="eligibility__aside__img">
              <img src={ASIDE_IMG} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            </div>
            <div className="eligibility__aside__content">
              <h3>Not sure if you qualify?</h3>
              <p>
                Many families are surprised to find out they're eligible. Income
                limits were recently expanded — it only takes a few minutes to
                find out.
              </p>
              <a href="#contact" className="btn btn--primary">
                Check Eligibility — Free
              </a>
              <p className="eligibility__aside__footnote">
                No commitment required
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
