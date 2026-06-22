import { useState } from 'react'
import { UNIVERSITY_CLIENTS } from '../data/universityClients'
import './UniversityClientsSection.css'

function rotateClients(list, offset) {
  if (!list.length) return []
  const o = ((offset % list.length) + list.length) % list.length
  return [...list.slice(o), ...list.slice(0, o)]
}

function ClientLogo({ client }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="u-clients-fallback" title={client.name}>
        <span className="u-clients-fallback-txt">{client.shortName}</span>
      </div>
    )
  }

  return (
    <img
      className="u-clients-logo-img"
      src={client.logo}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

function MarqueeRibbon({ clients, directionLeft, durationSec, layer }) {
  const dirClass = directionLeft ? 'u-clients-viewport--left' : 'u-clients-viewport--right'

  return (
    <div
      className={`u-clients-ribbon u-clients-ribbon--${layer}`}
      style={{ '--u-marquee-dur': `${durationSec}s` }}
    >
      <div className="u-clients-ribbon-inner">
        <div className={`u-clients-viewport ${dirClass}`}>
          <div className="u-clients-track">
            <div className="u-clients-chunk" role="list">
              {clients.map((c) => (
                <div
                  key={c.id}
                  className="u-clients-tile"
                  role="listitem"
                  aria-label={c.name}
                >
                  <div className="u-clients-tile-frame">
                    <ClientLogo client={c} />
                  </div>
                  <span className="u-clients-tile-name">{c.name}</span>
                </div>
              ))}
            </div>
            <div className="u-clients-chunk" aria-hidden="true">
              {clients.map((c) => (
                <div key={`${c.id}-dup`} className="u-clients-tile">
                  <div className="u-clients-tile-frame">
                    <ClientLogo client={c} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UniversityClientsSection() {
  const list = UNIVERSITY_CLIENTS
  const row1 = list
  const row2 = rotateClients(list, 5)
  const row3 = rotateClients(list, 10)

  return (
    <section className="u-clients" aria-labelledby="u-clients-heading">
      <div className="u-clients-inner page-inner">
        <header className="u-clients-head">
          <p className="u-sec-eyebrow u-sec-eyebrow--dark">Our clients</p>
          <h2 id="u-clients-heading" className="u-sec-title u-clients-heading">
            Trusted on campus, across India&apos;s leading universities
          </h2>
          <p className="u-sec-lead u-clients-lead">
            Partner institutions where Skilltrixa helps students prove role readiness, from foundational
            coding to placements.
          </p>
        </header>

        <div className="u-clients-motion">
          <div className="u-clients-stage" role="presentation">
            <div className="u-clients-fan">
              <MarqueeRibbon clients={row1} directionLeft durationSec={88} layer="a" />
              <MarqueeRibbon clients={row2} directionLeft={false} durationSec={102} layer="b" />
              <MarqueeRibbon clients={row3} directionLeft durationSec={118} layer="c" />
            </div>
          </div>

        </div>

        <ul className="u-clients-static" aria-label="Partner institutions">
          {list.map((c) => (
            <li key={c.id} className="u-clients-static-item">
              <div className="u-clients-tile-frame">
                <ClientLogo client={c} />
              </div>
              <span className="u-clients-static-name">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
