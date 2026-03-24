const items = [
  { label: 'No waiting list', value: '0' },
  { label: 'Tuition upfront', value: '$0' },
  { label: 'Apply in minutes', value: '20' },
  { label: 'Days to decision', value: '30' },
  { label: 'Of SMI income limit', value: '85%' },
  { label: 'Providers statewide', value: '100k+' },
  { label: 'Families served', value: 'Millions' },
]

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {/* Duplicated for seamless loop */}
        {[0, 1].map(copy => (
          <div className="ticker__set" key={copy}>
            {items.map((item, i) => (
              <div className="ticker__item" key={i}>
                <strong>{item.value}</strong>
                {item.label}
                <span className="ticker__dot" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
