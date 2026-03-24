import useInView from '../hooks/useInView'

const docs = [
  {
    title: 'Proof of Identity',
    desc: "Driver's license, passport, or other government-issued photo ID for each parent/caretaker in the household.",
  },
  {
    title: 'Proof of Income',
    desc: 'Recent pay stubs (last 4 weeks), tax returns, or a letter from your employer. Self-employed? Provide business records.',
  },
  {
    title: "Child's Birth Certificate",
    desc: 'Official birth certificate for each child you are applying for. Hospital records are not accepted.',
  },
  {
    title: 'Proof of NY Residency',
    desc: 'A utility bill, lease agreement, or official mail showing your name and current New York address.',
  },
  {
    title: 'Childcare Provider Info',
    desc: "Your provider's name, address, contact number, and license/registration number. Get this from your childcare center or family daycare.",
  },
  {
    title: 'Proof of Activity',
    desc: 'Work schedule or employer letter, school enrollment letter, or training program documentation showing your current activity.',
  },
  {
    title: 'Social Security Numbers',
    desc: 'SSN cards or official documents showing SSNs for all household members applying for benefits.',
  },
  {
    title: 'Immigration Status (if applicable)',
    desc: "Proof of lawful presence in the U.S. if you are not a U.S. citizen. Children's citizenship status is considered separately from parents.",
  },
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function RequiredDocuments() {
  const [ref, visible] = useInView()

  return (
    <section className="docs section" id="documents" ref={ref}>
      <div className="container">
        <div className={`reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Checklist</span>
          <h2 className="section-heading">Required documents</h2>
          <p className="section-subtext">
            Gather these before you start your application to keep things moving
            smoothly.
          </p>
        </div>

        <div className="docs__grid">
          {docs.map((doc, i) => (
            <div
              key={doc.title}
              className={`docs__item reveal${visible ? ` visible d${Math.min(i + 1, 5)}` : ''}`}
            >
              <div className="docs__check">
                <CheckIcon />
              </div>
              <div>
                <h3>{doc.title}</h3>
                <p>{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
