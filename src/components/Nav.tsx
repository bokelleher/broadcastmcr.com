import { useState } from 'react'

const LINKS = [
  { href: '#wall', label: 'The Wall' },
  { href: '#telemetry', label: 'Telemetry' },
  { href: '#guardrails', label: 'Guardrails' },
  { href: '#captions', label: 'Captions' },
  { href: '#stream-deck', label: 'Stream Deck' },
  { href: '#plant', label: 'Run the Plant' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top" aria-label="Broadcast MCR home">
          <img src="/broadcastmcr-logo.png" alt="broadcastMCR" />
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <ul
          id="site-nav"
          className={`nav__links${open ? ' is-open' : ''}`}
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
