import { useState } from 'react'
import useInView from '../hooks/useInView'

const onlineSteps = [
  {
    num: '01',
    title: 'Create a MyBenefits NY account',
    body: <>
      Visit <a href="https://mybenefits.ny.gov" target="_blank" rel="noopener noreferrer">mybenefits.ny.gov</a> and
      create a free account. You'll use this to track your application status.
    </>,
  },
  {
    num: '02',
    title: 'Complete the online application',
    body: 'Fill out the Child Care Assistance application. Have your income documents, childcare provider info, and household details ready — the form takes about 20–30 minutes.',
  },
  {
    num: '03',
    title: 'Upload required documents',
    body: 'Attach proof of income, residency, and child age. See the Required Documents section below for the full checklist.',
  },
  {
    num: '04',
    title: 'Wait for a determination',
    body: "Your local Department of Social Services will review your application. You'll receive a written notice within 30 days. Your child can attend childcare while you wait.",
  },
]

const mailSteps = [
  {
    num: '01',
    title: 'Download or request the LDSS-4699 form',
    body: <>
      Download the <a href="https://otda.ny.gov/programs/applications/4699.pdf" target="_blank" rel="noopener noreferrer">LDSS-4699 application form</a> from
      the OTDA website, or call your local Social Services office to have one mailed to you.
    </>,
  },
  {
    num: '02',
    title: 'Complete and sign the form',
    body: 'Fill in all required fields completely. Incomplete applications may delay processing. Sign and date the form.',
  },
  {
    num: '03',
    title: 'Attach supporting documents',
    body: 'Include copies (not originals) of all required documents. See the Required Documents section below for the full checklist.',
  },
  {
    num: '04',
    title: 'Submit to your local Social Services office',
    body: 'Mail or hand-deliver your completed application to your county Department of Social Services. You can also drop it off in person at the front desk.',
  },
]

export default function HowToApply() {
  const [tab, setTab] = useState('online')
  const [ref, visible] = useInView()
  const steps = tab === 'online' ? onlineSteps : mailSteps

  return (
    <section className="apply section" id="apply" ref={ref}>
      <div className="container">
        <div className={`reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Application Process</span>
          <h2 className="section-heading">How to apply</h2>
          <p className="section-subtext">
            You can apply online from any device, or submit a paper application
            by mail or in person. Both paths lead to the same outcome.
          </p>
        </div>

        <div
          className={`apply__tabs-row reveal${visible ? ' visible d1' : ''}`}
          role="tablist"
          aria-label="Application method"
        >
          <button
            role="tab"
            aria-selected={tab === 'online'}
            className={`apply__tab${tab === 'online' ? ' apply__tab--active' : ''}`}
            onClick={() => setTab('online')}
          >
            Online
          </button>
          <button
            role="tab"
            aria-selected={tab === 'mail'}
            className={`apply__tab${tab === 'mail' ? ' apply__tab--active' : ''}`}
            onClick={() => setTab('mail')}
          >
            By Mail / In Person
          </button>
        </div>

        <ol className="apply__steps" aria-label={`${tab === 'online' ? 'Online' : 'Mail'} application steps`}>
          {steps.map((step, i) => (
            <li key={step.num} className="apply__step">
              <div className="apply__step__num" aria-hidden="true">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
