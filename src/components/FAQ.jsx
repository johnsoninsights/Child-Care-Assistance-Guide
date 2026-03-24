import { useState } from 'react'
import useInView from '../hooks/useInView'

const faqs = [
  {
    q: 'How long does it take to get approved?',
    a: 'Most applications are processed within 30 days of submission. During peak enrollment periods it may take slightly longer. You will receive a written notice in the mail with the determination. Your child can attend childcare while your application is being reviewed — you will not owe tuition during this period.',
  },
  {
    q: 'What happens if my income changes after I apply?',
    a: 'You must report income changes to your local Social Services office within 10 days. An increase in income may affect your subsidy amount, while a decrease may increase your benefit. Changes are applied at your next redetermination or sooner if requested.',
  },
  {
    q: 'Can I use CCAP at any childcare provider?',
    a: 'CCAP works with licensed or registered childcare providers in New York State, including daycare centers, family daycare homes, group family daycare homes, and some school-age programs. Your provider must be enrolled with the state to accept CCAP payments. Ask your provider, or use the Child Care Resource & Referral network to find enrolled providers near you.',
  },
  {
    q: 'Is there a waiting list for CCAP?',
    a: 'New York eliminated its CCAP waiting list in 2023 as part of expanded funding. All eligible families who apply should receive assistance. If you are told there is a wait, contact your local Social Services office or call the Child Care Helpline.',
  },
  {
    q: 'What if I am self-employed or work irregular hours?',
    a: 'Self-employed parents can qualify for CCAP. You will need to provide documentation of your self-employment income such as business records, invoices, or a signed self-employment statement. Parents with irregular schedules may need to provide a work schedule signed by an employer or a statement explaining the variability.',
  },
  {
    q: 'How often do I need to renew my CCAP benefits?',
    a: 'CCAP benefits must be redetermined at least every 12 months. You will receive a notice from your local Social Services office when it is time to renew. Complete the redetermination promptly to avoid any gap in your benefits. Renewing online through MyBenefits NY is the fastest option.',
  },
]

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, visible] = useInView()

  const toggle = (i) => setOpen(prev => prev === i ? null : i)

  return (
    <section className="faq section" id="faq" ref={ref}>
      <div className="container">
        <div className="faq__layout">
          <div className={`faq__sidebar reveal${visible ? ' visible' : ''}`}>
            <span className="section-label">Questions</span>
            <h2 className="section-heading">Common questions</h2>
            <p className="section-subtext">
              Can't find what you're looking for? Call the Child Care Helpline
              at <a href="tel:18773227669" style={{color:'var(--accent)'}}>1-877-322-7669</a>.
            </p>
          </div>

          <div className="faq__list" role="list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq__item${open === i ? ' faq__item--open' : ''} reveal${visible ? ` visible d${Math.min(i + 1, 5)}` : ''}`}
                role="listitem"
              >
                <button
                  className="faq__btn"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <h3 className="faq__btn__q" style={{fontSize:'16px', fontWeight:600, lineHeight:1.4, color:'var(--ink)', textAlign:'left'}}>{item.q}</h3>
                  <span className="faq__icon">
                    <PlusIcon />
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq__body"
                  role="region"
                >
                  <p className="faq__body__inner">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
