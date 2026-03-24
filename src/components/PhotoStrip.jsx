import useInView from '../hooks/useInView'

// Replace with real project photos showing the families and communities you serve.
// Aim for diverse, warm, candid-feeling shots. Portrait / square crops work best.
const photos = [
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&auto=format&fit=crop&q=80',
    alt: 'Children playing together outdoors',
    caption: 'Quality care in your community',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&auto=format&fit=crop&q=80',
    alt: 'A parent and child sharing a moment',
    caption: 'Peace of mind for working families',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&auto=format&fit=crop&q=80',
    alt: 'Children learning and exploring',
    caption: 'Licensed providers across New York',
    tall: true,
  },
]

export default function PhotoStrip() {
  const [ref, visible] = useInView()

  return (
    <div className="photo-strip" ref={ref} aria-label="Community photos">
      <div className="photo-strip__grid">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`photo-strip__item photo-strip__item--${p.tall ? 'tall' : 'short'} reveal${visible ? ` visible d${i + 1}` : ''}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            <div className="photo-strip__overlay">
              <span className="photo-strip__caption">{p.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
