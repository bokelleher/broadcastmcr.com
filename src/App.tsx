import { Nav } from './components/Nav'
import { Shot } from './components/Shot'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <div id="top" />
      <Nav />

      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__grid">
            <div>
              <img
                className="hero__mark"
                src="/broadcastmcr-logo.png"
                alt="broadcastMCR"
              />
              <h1 id="hero-title">
                Operator monitoring for <span>Darwin</span> lanes
              </h1>
              <p className="hero__line">
                HTML5/WebRTC MCR panel for Techex Darwin playout-protection —
                live wall, Priority-1 lamps, and switching that never takes air
                on a single click.
              </p>
              <ul className="hero__meta">
                <li>1–N tiles per view</li>
                <li>TR 101 290 P1</li>
                <li>Arm then take</li>
                <li>608 / 708 captions</li>
                <li>Stream Deck tokens</li>
              </ul>
            </div>
            <div className="hero__shot reveal">
              <Shot
                src="/mcr-panel-wall.png"
                alt="MCR Panel live wall showing a 2×3 grid of game tiles with WebRTC previews, LIVE badges, and telemetry lamps"
                label="Live wall"
                variant="hero"
                caption={
                  <>
                    <strong>The wall at a glance.</strong> Six live tiles —
                    WebRTC preview, PRI/BAK source state, TR 101 290 lamps, and
                    audio LUFS — in one operator view.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The wall */}
      <section id="wall" className="section band" aria-labelledby="wall-title">
        <div className="container">
          <div className="split reveal">
            <div className="split__copy">
              <p className="eyebrow">The wall</p>
              <h2 id="wall-title" className="h2">
                One view. One to N tiles.
              </h2>
              <p className="lede">
                Each tile is a game lane: WebRTC preview, network and playout
                identity, LIVE state, and the controls you need without leaving
                the wall. Expand a tile when you need the glass up close.
              </p>
              <ul className="points">
                <li>
                  <span>
                    <strong>WebRTC preview per game</strong> — bitrate overlay
                    on the picture so contribution health is visible without a
                    digression.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Dense, not decorative</strong> — source buttons,
                    lamps, LUFS, SCTE, and PRI/BAK bitrates stay in the tile
                    footer.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Focus when it matters</strong> — open a single feed
                    for captions and audio detail, then return to the wall.
                  </span>
                </li>
              </ul>
            </div>
            <div className="split__media">
              <Shot
                src="/mcr-preview-expand.png"
                alt="Expanded tile for KC at BUF with live NFL preview, captions control, and LUFS readouts"
                label="Tile focus"
                variant="tall"
                caption={
                  <>
                    <strong>Focused preview.</strong> Captions dropdown and
                    MON-PCM / AC3 LUFS sit under the picture — operator
                    telemetry without covering the feed.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Know before you switch */}
      <section
        id="telemetry"
        className="section"
        aria-labelledby="telemetry-title"
      >
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Know before you switch</p>
            <h2 id="telemetry-title" className="h2">
              Lamps, PIDs, audio, SCTE — then decide.
            </h2>
            <p className="lede">
              Switching is only as safe as the picture of health underneath it.
              Broadcast MCR surfaces TR 101 290 Priority-1, per-PID bitrate, LUFS,
              and SCTE-35 on the same glass as the preview.
            </p>
          </div>

          <div className="split reveal">
            <div className="split__copy">
              <ul className="points">
                <li>
                  <span>
                    <strong>TR 101 290 Priority-1 lamps</strong> — Sync, SyncB,
                    PAT, CC, PMT, PID on PRI and BAK rows, with clear actions when
                    counters climb.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Audio LUFS</strong> — 2.0, 5.1, and AC3 readouts
                    beside the source strip so loudness is not a separate
                    destination.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>SCTE-35 feed</strong> — events visible on the tile;
                    empty state is honest when nothing has fired yet.
                  </span>
                </li>
              </ul>
            </div>
            <div className="split__media">
              <Shot
                src="/mcr-audio-metering.png"
                alt="DAL at PHI tile with PRI armed red, BAK green, LUFS meters, healthy TR 101 290 lamps, and SCTE-35 panel"
                label="Tile telemetry"
                variant="dense"
                caption={
                  <>
                    <strong>Instrumentation under the preview.</strong> PRI
                    armed in red, BAK ready, LUFS modules, Priority-1 lamps, and
                    SCTE-35 on one strip.
                  </>
                }
              />
            </div>
          </div>

          <div className="shot-grid shot-grid--2" style={{ marginTop: '2.5rem' }}>
            <div className="reveal">
              <Shot
                src="/mcr-pid-monitor.png"
                alt="HOM at AWY PID monitor showing SERVICES and PACKETS tables with bitrate bars and CC counters"
                label="PID monitor"
                variant="compact"
                caption={
                  <>
                    <strong>Per-PID bitrate graphs.</strong> Video, audio, SCTE,
                    PAT/PMT, and null packets with real-time share of the mux —
                    PRI or BAK lane selectable.
                  </>
                }
              />
            </div>
            <div className="reveal">
              <Shot
                src="/mcr-channel-detail.png"
                alt="NFLST01 channel tile showing off-air slate, Live-1/Live-2 sources, LUFS meters, and switcher states"
                label="Channel detail"
                variant="compact"
                caption={
                  <>
                    <strong>Lane detail.</strong> Source legs, LUFS, guarded
                    Pre-Game / Post-Game / Off Air / Tech Diff takes, and PID
                    bitrate footer on one channel.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Guardrails */}
      <section
        id="guardrails"
        className="section band"
        aria-labelledby="guardrails-title"
      >
        <div className="container">
          <div className="split split--flip reveal">
            <div className="split__copy">
              <p className="eyebrow">Guardrails</p>
              <h2 id="guardrails-title" className="h2">
                Nothing reaches air on a single click.
              </h2>
              <p className="lede">
                PRI, BAK, and slate paths use an arm-then-take sequence. Confirmed
                actions keep muscle memory from becoming an on-air incident.
              </p>
              <ul className="points">
                <li>
                  <span>
                    <strong>Arm, then take</strong> — the glass shows what is
                    armed before it can go to air.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Confirmed switching</strong> — primary, backup, and
                    slate changes are deliberate, not accidental.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Staleness is not health</strong> — frozen telemetry
                    must not read as green. If the picture of the plant is stale,
                    the UI says so.
                  </span>
                </li>
              </ul>
              <p className="callout callout--warn">
                Healthy lamps require live data. A quiet wall with old packets is
                a warning condition — not a pass.
              </p>
            </div>
            <div className="split__media">
              <Shot
                src="/mcr-channel-detail.png"
                alt="Off Air button glowing red with Pre-Game, Post-Game, and Tech Diff armable states"
                label="Guarded takes"
                variant="dense"
                caption={
                  <>
                    <strong>State on the glass.</strong> Off Air taken in red;
                    adjacent states wait for an explicit arm/take — matching the
                    Stream Deck ARM pattern.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Captions */}
      <section
        id="captions"
        className="section"
        aria-labelledby="captions-title"
      >
        <div className="container">
          <div className="split reveal">
            <div className="split__copy">
              <p className="eyebrow">Captions</p>
              <h2 id="captions-title" className="h2">
                Sidecar 608 / 708 you can actually read.
              </h2>
              <p className="lede">
                Caption health is a first-class lamp — not a buried log. Monitor
                PRI, BAK, and OUT paths with pair rates, last-data age, and live
                decoded text when the sidecar is flowing.
              </p>
              <ul className="points">
                <li>
                  <span>
                    <strong>608 + 708</strong> — standards called out with pairs
                    per second when the path is healthy.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Path clarity</strong> — CAP OK vs CAP UNKNOWN across
                    upstream, inserter, and post-transcode legs.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Preview text</strong> — decoded CC lines when data is
                    present, so “OK” is not an empty claim.
                  </span>
                </li>
              </ul>
            </div>
            <div className="split__media">
              <Shot
                src="/mcr-captions-wall.png"
                alt="Captions view with four cards showing CAP OK on BAK with 608/708 metrics and CAP UNKNOWN on other paths"
                label="Captions wall"
                variant="dense"
                caption={
                  <>
                    <strong>Caption cards per path.</strong> BAK shows CAP OK,
                    H264 PID, 608/708 rates, and live CC1 text; other legs stay
                    UNKNOWN until the sidecar connects.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Hands on glass — Stream Deck */}
      <section
        id="stream-deck"
        className="section band"
        aria-labelledby="deck-title"
      >
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Hands on glass</p>
            <h2 id="deck-title" className="h2">
              Stream Deck via device tokens.
            </h2>
            <p className="lede">
              Physical keys for ON AIR, READY, ARM, and Priority-1 OK — scoped
              like an operator, revocable when the desk leaves the room.
            </p>
          </div>

          <div className="shot-grid shot-grid--2">
            <div className="reveal">
              <Shot
                src="/streamdeck-profile.png"
                alt="Stream Deck profile grid with FOX PRI ON AIR, BAK READY, SLATE ARM, and P1 OK keys"
                label="Stream Deck"
                variant="compact"
                caption={
                  <>
                    <strong>Hardware that mirrors the wall.</strong> PRI on air
                    in red, BAK ready in green, slate armed with a blue guard,
                    Priority-1 OK on the same profile.
                  </>
                }
              />
            </div>
            <div className="reveal">
              <Shot
                src="/mcr-device-tokens.png"
                alt="Device tokens admin card listing Stream Deck Mk2 with revoke and create token controls"
                label="Device tokens"
                variant="compact"
                caption={
                  <>
                    <strong>Tokens act as you, in your views.</strong> At most
                    the operator role. Label the desk, create a token, revoke
                    when the surface goes away.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Run the plant */}
      <section id="plant" className="section" aria-labelledby="plant-title">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Run the plant</p>
            <h2 id="plant-title" className="h2">
              Access, game config, system controls.
            </h2>
            <p className="lede">
              Admins see everything. Operators land where they are assigned.
              Game-level config and system actions say what they do to air —
              including what they deliberately do not touch.
            </p>
          </div>

          <div className="shot-grid shot-grid--3">
            <div className="reveal">
              <Shot
                src="/mcr-operator-access.png"
                alt="Operator access panel assigning allowed views and default landing view for demoops"
                label="Operator access"
                variant="compact"
                caption={
                  <>
                    <strong>View scoping.</strong> Allowed views per user, with
                    a default landing — assignment applies to viewers and
                    operators; admins always see all.
                  </>
                }
              />
            </div>
            <div className="reveal">
              <Shot
                src="/mcr-game-config.png"
                alt="Add game configuration form with network, Darwin instance, SCTE, captions delay, and slate mappings"
                label="Game config"
                variant="compact"
                caption={
                  <>
                    <strong>Game-level config.</strong> Network, Darwin instance,
                    SCTE keep-alives, caption delay, fill offset, and slate file
                    mappings for the lane.
                  </>
                }
              />
            </div>
            <div className="reveal">
              <Shot
                src="/mcr-system-admin.png"
                alt="System admin page with restart panel, rebuild runtime, and restart ccmon actions and impact descriptions"
                label="System"
                variant="compact"
                caption={
                  <>
                    <strong>System actions with consequences named.</strong>{' '}
                    Restart panel, rebuild runtime, restart ccmon — each card
                    states what reconnects and what stays off the air path.
                  </>
                }
              />
            </div>
          </div>

          <p className="callout callout--health reveal" style={{ marginTop: '2rem' }}>
            Built for Techex Darwin playout-protection lanes — the panel monitors
            and guards the plant; it does not invent a second control plane.
          </p>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src="/app-icon.png" alt="" width={28} height={28} />
            <span className="footer__name">Broadcast MCR</span>
          </div>
          <p className="footer__copy">© 2026</p>
        </div>
      </footer>
    </>
  )
}
