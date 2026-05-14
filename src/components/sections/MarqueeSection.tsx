import { MARQUEE_ITEMS } from '@/lib/site-data'

export default function MarqueeSection() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span className="marquee-item" key={i}>
            <svg className="star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
            </svg>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
