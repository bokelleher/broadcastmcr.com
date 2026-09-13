import type { ReactNode } from 'react'

type ShotProps = {
  src: string
  alt: string
  caption: ReactNode
  label?: string
  variant?: 'hero' | 'dense' | 'tall' | 'compact' | 'default'
}

export function Shot({
  src,
  alt,
  caption,
  label = 'MCR Panel',
  variant = 'default',
}: ShotProps) {
  const cls = ['shot', variant !== 'default' ? `shot--${variant}` : '']
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={cls}>
      <div className="shot__chrome" aria-hidden="true">
        <span className="shot__dot" />
        <span className="shot__dot" />
        <span className="shot__dot" />
        <span className="shot__label">{label}</span>
      </div>
      <div className="shot__viewport">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
      <figcaption className="shot__caption">{caption}</figcaption>
    </figure>
  )
}
