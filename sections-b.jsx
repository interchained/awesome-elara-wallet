/* ============================================================
   Elara — Architecture, BTC matters, Roadmap
   ============================================================ */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

/* ---------------- ARCHITECTURE ---------------- */
const CODE_LINES = [
  [["tk-key", "type"], ["tk-type", " ElaraWallet"], ["tk-punc", " = {"]],
  [["", "  "], ["tk-key", "custody"], ["tk-punc", ": "], ["tk-str", '"self"'], ["tk-punc", ";"]],
  [["", "  "], ["tk-key", "networks"], ["tk-punc", ": ["], ["tk-str", '"BTC"'], ["tk-punc", ", "], ["tk-str", '"ITC"'], ["tk-punc", "];"]],
  [["", "  "], ["tk-key", "signing"], ["tk-punc", ": "], ["tk-str", '"on-device"'], ["tk-punc", ";"]],
  [["", "  "], ["tk-key", "storage"], ["tk-punc", ": "], ["tk-str", '"encrypted-local"'], ["tk-punc", ";"]],
  [["", "  "], ["tk-key", "recovery"], ["tk-punc", ": "], ["tk-str", '"BIP39-seed"'], ["tk-punc", ";"]],
  [["", "  "], ["tk-key", "derivation"], ["tk-punc", ": "], ["tk-str", '"BIP32 / 84 / 49 / 44"'], ["tk-punc", ";"]],
  [["", "  "], ["tk-key", "backend"], ["tk-punc", ": "], ["tk-str", '"none"'], ["tk-punc", ";"], ["tk-com", "  // direct ElectrumX"]],
  [["", "  "], ["tk-key", "license"], ["tk-punc", ": "], ["tk-str", '"GPL-3.0-or-later"'], ["tk-punc", ";"]],
  [["tk-punc", "};"]],
];

const HIGHLIGHTS = [
  { b: "Three-phase send pipeline", t: " — ", code: "PREPARE → FILTER → FINALIZE", after: " for fast, reliable UTXO selection." },
  { b: "Optimized transaction indexer", t: " with rate-limited batch fetching, smart caching, and resume-on-interruption." },
  { b: "Direct ElectrumX over TCP/TLS", t: " via a custom Capacitor plugin — no centralized backend." },
  { b: "Blue Wallet-compatible", t: " 20+20 gap-limit scanning across every BTC derivation path." },
];

function ArchitectureSection() {
  const ref = useRefB(null);
  useEffectB(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { el.classList.add("lit"); io.unobserve(el); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section className="section-pad" id="architecture">
      <div className="wrap">
        <SectionHead
          eyebrow="ARCHITECTURE"
          title='The interface is mobile.<br/>The <span class="grad-cyan">principle</span> is old-school.'
          subtitle="Elara's job is not to hide the chain. It is to make the chain usable without taking ownership away from the user — four honest layers, no servers in the middle."
        />
        <div className="arch-grid">
          <Reveal>
            <div className="code-card lit" ref={ref}>
              <div className="code-head">
                <span className="dots"><i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} /></span>
                <span className="fn">wallet/elara.config.ts</span>
                <span className="run"><span style={{ width: 6, height: 6, borderRadius: 9, background: "var(--green)", boxShadow: "0 0 7px var(--green)" }} /> running as product layer</span>
              </div>
              <div className="code-body">
                {CODE_LINES.map((line, i) => (
                  <span className="ln" style={{ transitionDelay: i * 70 + "ms" }} key={i}>
                    {line.map(([cls, txt], j) => <span key={j} className={cls}>{txt}</span>)}
                  </span>
                ))}
              </div>
            </div>
            <p className="code-cap">Elara cannot read your seed, freeze your funds, or lock you out. Those are not missing features — they are the whole point.</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="arch-stack">
              {ARCH_LAYERS.map((l, i) => (
                <React.Fragment key={l.label}>
                  <div className={"arch-layer " + l.accent}>
                    <b>{l.label}</b>
                    <span>{l.sub}</span>
                  </div>
                  {i < ARCH_LAYERS.length - 1 ? <div className="arch-conn" /> : null}
                </React.Fragment>
              ))}
            </div>
            <div className="arch-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <div className="h" key={i}>
                  <span className="hi"><Icon name="hex" size={16} /></span>
                  <span><b>{h.b}</b>{h.t}{h.code ? <code>{h.code}</code> : null}{h.after || ""}</span>
                </div>
              ))}
            </div>
            <div className="tech-chips">
              {TECH.map((t) => <span className="chip" key={t}>{t}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BTC MATTERS ---------------- */
const BTC_CARDS = [
  { icon: "key", title: "Familiar primitives", body: "Addresses, keys, transactions, confirmations, proof-of-work — Bitcoin-native users already speak the language Elara is built in." },
  { icon: "globe", title: "ITC in context", body: "Supporting BTC positions Interchained beside the network that shaped the original self-custody movement, instead of away from it." },
  { icon: "layers", title: "One wallet, broader literacy", body: "Elara teaches users to think across chains without forcing them into custodial abstractions to do it." },
];

function BtcSection() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          eyebrow="WHY BTC"
          eyebrowClass="gold"
          title='BTC support is not <span class="grad-gold">decoration.</span>'
          subtitle="Interchained carries Bitcoin's design language in its DNA. Elara's BTC support keeps that relationship visible at the wallet layer — and gives users familiar self-custody ground to stand on."
        />
        <div className="three-up">
          {BTC_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="card big-card" style={{ height: "100%" }}>
                <span className="hex bi" style={{ background: "rgba(245,158,11,.10)", color: "var(--gold-bright)", borderColor: "var(--line-gold)" }}><Icon name={c.icon} size={24} /></span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ROADMAP ---------------- */
function Roadmap() {
  const [open, setOpen] = useStateB(4);
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          eyebrow="DEVELOPMENT PATH"
          title='From prototype to <span class="grad-cyan">public wallet.</span>'
          subtitle="Four phases shipped — wallet core, transactions, compatibility, security. The fifth phase is open: the comb has cells waiting for the next builder."
        />
        <div className="roadmap">
          {ROADMAP.map((p, i) => (
            <Reveal key={p.num} delay={i * 50}>
              <div className={"phase" + (open === i ? " open" : "") + (p.done ? " done" : "")}>
                <div className="phase-head" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="phase-num">{p.num}</span>
                  <span className="phase-title">
                    <b>{p.title} {p.done ? <span className="pill live" style={{ marginLeft: 8, verticalAlign: "middle" }}>shipped</span> : <span className="pill planned" style={{ marginLeft: 8, verticalAlign: "middle" }}>open</span>}</b>
                    <span>{p.note}</span>
                  </span>
                  <span className="phase-chev"><Icon name="arrowRight" size={20} style={{ transform: "rotate(90deg)" }} /></span>
                </div>
                <div className="phase-body">
                  <div className="phase-items">
                    {p.items.map((it) => (
                      <span className="it" key={it}><span className="dot" />{it}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ArchitectureSection, BtcSection, Roadmap });
