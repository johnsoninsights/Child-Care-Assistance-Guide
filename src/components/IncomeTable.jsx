import useInView from '../hooks/useInView'

const rows = [
  { size: '1 person',  monthly: '$3,247', annual: '$38,964',  highlight: false },
  { size: '2 people',  monthly: '$4,245', annual: '$50,940',  highlight: false },
  { size: '3 people',  monthly: '$5,243', annual: '$62,916',  highlight: false },
  { size: '4 people',  monthly: '$6,241', annual: '$74,892',  highlight: true  },
  { size: '5 people',  monthly: '$7,239', annual: '$86,868',  highlight: false },
  { size: '6 people',  monthly: '$8,237', annual: '$98,844',  highlight: false },
  { size: '7 people',  monthly: '$9,235', annual: '$110,820', highlight: false },
  { size: '8 people',  monthly: '$10,233', annual: '$122,796', highlight: false },
]

export default function IncomeTable() {
  const [ref, visible] = useInView()

  return (
    <section className="income section" id="income" ref={ref}>
      <div className="container">
        <div className={`reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Income Limits</span>
          <h2 className="section-heading">Does my income qualify?</h2>
        </div>

        <div className={`income__intro reveal${visible ? ' visible d1' : ''}`}>
          <p>
            Your gross monthly income must be at or below the limits shown. These
            figures represent 85% of New York State Median Income (SMI) as of
            2024. Limits are updated annually.
          </p>
        </div>

        <div className={`income__wrap reveal${visible ? ' visible d2' : ''}`}>
          <table className="income__table" aria-label="CCAP income limits by family size">
            <thead>
              <tr>
                <th scope="col">Family Size</th>
                <th scope="col">Max Monthly Income</th>
                <th scope="col">Max Annual Income</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr
                  key={row.size}
                  className={row.highlight ? 'income__table__highlight' : ''}
                >
                  <td>{row.size}</td>
                  <td>{row.monthly}</td>
                  <td>{row.annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={`income__note reveal${visible ? ' visible d3' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{flexShrink:0,marginTop:'2px'}}>
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Income limits vary by family size. If your income is slightly above
          these limits, you may still qualify for a co-payment subsidy. Contact
          your local Social Services office to confirm.
        </p>
      </div>
    </section>
  )
}
