/* ============================================================
   Elara — What Elara Is, Feature Matrix, Security
   ============================================================ */
const { useState: useStateA } = React;

/* ---------------- WHAT ELARA IS ---------------- */
const WHAT = [
  { icon: "coins", cls: "gold", title: "Multi-coin, one vault", body: "Native Bitcoin and Interchained in a single wallet — create, import, switch, and delete wallets with fully isolated caches." },
  { icon: "key", cls: "", title: "Real cryptography", body: "BIP39 seeds, BIP32 HD derivation, and on-device signing via bitcoinjs-lib and interchainedjs-lib. No shortcuts, no black boxes." },
  { icon: "shield", cls: "green", title: "Self-custody, by design", body: "Elara cannot freeze, seize, read, or recover your funds. There is no admin key. The app should never be able to betray you." },
  { icon: "branch", cls: "gold", title: "Built to be forked", body: "A gold honeycomb design system and a GPL-3.0 codebase. Rebrand it, add your chain, prove you can do it better." },
];

function WhatElara() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          eyebrow="WHAT ELARA IS"
          title='One wallet layer. Two chains.<br/>Built for <span class="grad-gold">self-custody.</span>'
          subtitle="Elara makes ITC and BTC usable without sacrificing custody — a clean mobile interface for holding, receiving, sending, backing up, importing, and inspecting what you own."
        />
        <div className="feat-grid">
          {WHAT.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className={"card feat-card " + f.cls} style={{ height: "100%" }}>
                <span className={"hex fi"}><Icon name={f.icon} size={22} /></span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE MATRIX ---------------- */
function FeatureMatrix() {
  const [filter, setFilter] = useStateA("All");
  const counts = FEATURES.reduce((a, f) => { a[f.status] = (a[f.status] || 0) + 1; return a; }, {});
  counts.All = FEATURES.length;
  return (
    <section className="section-pad" id="features">
      <div className="wrap">
        <SectionHead
          eyebrow="THE WALLET STACK, MAPPED"
          title='Every feature earns its <span class="grad-cyan">cell.</span>'
          subtitle="Elara is a practical mobile wallet, not a brochure. Most of this is already shipping on Android; the rest are open cells on the roadmap."
        />
        <div className="matrix-filters">
          {FILTERS.map((f) => (
            <button key={f.key} className={"fbtn" + (filter === f.key ? " on" : "")} onClick={() => setFilter(f.key)}>
              {f.cls ? <span className={"pill " + f.cls} style={{ pointerEvents: "none", padding: "2px 7px" }}>{f.label}</span> : f.label}
              <span className="ct">{counts[f.key] || 0}</span>
            </button>
          ))}
        </div>
        <Reveal>
          <div className="matrix">
            <div className="matrix-head">
              <span>Feature</span><span>Purpose</span><span>Status</span>
            </div>
            {FEATURES.map((f, i) => {
              const hide = filter !== "All" && f.status !== filter;
              return (
                <div className={"matrix-row" + (hide ? " hide" : "")} key={i}>
                  <span className="feat-name"><Icon name={f.icon} size={18} className="mi" /> {f.name}</span>
                  <span className="feat-purpose">{f.purpose}</span>
                  <span className="feat-status"><span className={"pill " + f.status}>{STATUS_LABEL[f.status]}</span></span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECURITY ---------------- */
const SECURITY = [
  { icon: "cpu", title: "On-device keys", body: "Seeds and private keys are generated using the device's secure crypto APIs — never on a server, never in transit." },
  { icon: "lock", title: "Encrypted at rest", body: "Keys are encrypted locally; a 6-digit PIN and biometrics gate every unlock. Your seed never leaves the device." },
  { icon: "eye", title: "Auditable by design", body: "Every line that touches your keys lives in the public repo. Network calls are limited to ElectrumX nodes and price feeds." },
];

function Security() {
  return (
    <section className="section-pad" id="security">
      <div className="wrap">
        <SectionHead
          eyebrow="SECURITY MODEL"
          eyebrowClass="gold"
          title='The app should never be able to <span class="grad-gold">betray you.</span>'
          subtitle="Self-custody is not a feature — it is the foundation. No custody, no backdoor, no admin key, no telemetry on your secrets."
        />
        <div className="three-up">
          {SECURITY.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="card big-card" style={{ height: "100%" }}>
                <span className="hex bi"><Icon name={s.icon} size={24} /></span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="note-strip">
            <span className="ni"><Icon name="alert" size={20} /></span>
            <span><b>Non-custodial software.</b> You alone are responsible for your keys, seed phrases, and funds. Back up your seed offline, test with small amounts first — there is no "forgot password."</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { WhatElara, FeatureMatrix, Security });
