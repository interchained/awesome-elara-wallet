/* ============================================================
   Elara — Nav, Hero, PhoneMockup, Manifesto
   ============================================================ */
const { useState, useEffect } = React;

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Overview", "#overview"], ["Features", "#features"], ["Security", "#security"],
    ["Architecture", "#architecture"], ["Open Source", "#opensource"],
  ];
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <img src="assets/elara-logo.png" alt="Elara" />
          <span className="bt"><b>Elara Wallet</b><span>INTERCHAINED · ITC + BTC</span></span>
        </a>
        <div className={"nav-links" + (open ? " open" : "")}>
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a href={LINKS.github} target="_blank" rel="noopener">GitHub</a>
        </div>
        <div className="nav-right">
          <span className="nav-status"><span className="dot" />open source · GPL-3.0</span>
          <a className="btn btn-gold" href={LINKS.github} target="_blank" rel="noopener">
            <Icon name="branch" size={17} /> Contribute
          </a>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">≡</button>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- PHONE MOCKUP ---------------- */
const PHONE = {
  ITC: {
    netLabel: "ITC · Interchained", accent: "var(--cyan-bright)", coin: "ITC", ci: "itc",
    amount: "1,240.5012", fiat: "≈ $2,134.86", 
    rows: [
      { ci: "itc", t: "Received", s: "from itc1q…7f4k · 12 conf", v: "+128.40", f: "ITC" },
      { ci: "itc", t: "Baking reward", s: "epoch 2,041", v: "+0.8500", f: "ITC" },
      { ci: "itc", t: "Sent", s: "to itc1q…9xz2 · 41 conf", v: "−42.00", f: "ITC", neg: true },
    ],
    context: "Native ITC balances, transfers, baking rewards, and on-chain confirmations.",
  },
  BTC: {
    netLabel: "BTC · Bitcoin", accent: "var(--gold-bright)", coin: "BTC", ci: "btc",
    amount: "0.042108", fiat: "≈ $2,940.12",
    rows: [
      { ci: "btc", t: "Received", s: "bc1q…m4r8 · 6 conf", v: "+0.01200", f: "BTC" },
      { ci: "btc", t: "Sent", s: "bc1q…2k9p · 88 conf", v: "−0.00450", f: "BTC", neg: true },
      { ci: "btc", t: "Received", s: "watch-only · xpub", v: "+0.03000", f: "BTC" },
    ],
    context: "Full BTC self-custody across BIP84 / 49 / 44 / P2PKH paths, Blue Wallet-compatible.",
  },
};

function PhoneScreen({ net }) {
  if (net === "FUTURE") {
    return (
      <div className="screen-content" key="future">
        <div className="scr-status">
          <span>9:41</span>
          <span style={{ display: "flex", gap: 6, alignItems: "center" }}><span className="scr-demo">fork</span>▮▮▮</span>
        </div>
        <div className="scr-head">
          <span style={{ fontWeight: 600, fontSize: 15 }}>Elara</span>
          <span className="net" style={{ borderColor: "var(--line-gold)", color: "var(--gold-bright)" }}>Forks · Open</span>
        </div>
        <div className="scr-fork">
          <div className="ftitle">Add a chain.</div>
          <div className="fsub">fork-friendly coin adapters</div>
          {[
            { h: "₿", b: "Bitcoin adapter", done: true },
            { h: "ɨ", b: "Interchained adapter", done: true },
          ].map((a) => (
            <div className="adapter" key={a.b}>
              <span className="hex h">{a.h}</span><b>{a.b}</b>
              <span className="ck"><Icon name="check" size={16} /></span>
            </div>
          ))}
          <div className="adapter open">
            <span className="hex h"><Icon name="branch" size={14} /></span>
            <b style={{ color: "var(--gold-bright)" }}>Your chain here</b>
            <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--muted)" }}>open cell</span>
          </div>
        </div>
        <div className="scr-foot">
          <span className="scr-secbadge"><Icon name="branch" size={11} /> GPL-3.0 · fork & build</span>
          <div className="scr-nav"><span /><span /><span className="on" style={{ background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }} /></div>
        </div>
      </div>
    );
  }
  const d = PHONE[net];
  return (
    <div className="screen-content" key={net}>
      <div className="scr-status">
        <span>9:41</span>
        <span style={{ display: "flex", gap: 6, alignItems: "center" }}><span className="scr-demo">demo</span>▮▮▮</span>
      </div>
      <div className="scr-head">
        <span style={{ fontWeight: 600, fontSize: 15 }}>Elara</span>
        <span className="net" style={{ color: d.accent, borderColor: net === "BTC" ? "var(--line-gold)" : "var(--line-cyan)" }}>{d.netLabel}</span>
      </div>
      <div className="scr-bal">
        <div className="lbl">Total balance</div>
        <div className="amt" style={{ color: d.accent }}>{d.amount}<small>{d.coin}</small></div>
        <div className="fiat">{d.fiat}</div>
      </div>
      <div className="scr-actions">
        {[["send", "Receive"], ["send", "Send"], ["qr", "Scan"]].map(([ic, lbl], i) => (
          <div className="a" key={lbl}>
            <span className="ico" style={i === 1 ? { transform: "rotate(0)" } : {}}><Icon name={lbl === "Scan" ? "qr" : "send"} size={16} /></span>
            <span>{lbl}</span>
          </div>
        ))}
      </div>
      <div className="scr-list">
        {d.rows.map((r, i) => (
          <div className="row" key={i}>
            <span className={"ci " + r.ci}>{r.ci === "btc" ? "₿" : "ɨ"}</span>
            <span className="tx"><b>{r.t}</b><span>{r.s}</span></span>
            <span className="val"><b style={{ color: r.neg ? "var(--ink-soft)" : "var(--green)" }}>{r.v}</b><span>{r.f}</span></span>
          </div>
        ))}
      </div>
      <div className="scr-foot">
        <span className="scr-secbadge"><Icon name="lock" size={11} /> encrypted · self-custody</span>
        <div className="scr-nav"><span className="on" /><span /><span /></div>
      </div>
    </div>
  );
}

function PhoneMockup({ net }) {
  const tags = [
    { t: "BIP39", c: "cy", s: { top: "6%", left: "-6%" } },
    { t: "secp256k1", c: "", s: { top: "20%", right: "-14%" } },
    { t: "P2PKH", c: "gd", s: { top: "44%", left: "-16%" } },
    { t: "Bech32", c: "cy", s: { bottom: "30%", right: "-14%" } },
    { t: "WIF import", c: "gd", s: { bottom: "10%", left: "-8%" } },
    { t: "watch-only", c: "", s: { bottom: "2%", right: "-4%" } },
  ];
  return (
    <div className="phone-stage">
      <div className="phone-glow" style={{ background: net === "BTC" ? "radial-gradient(circle, rgba(245,158,11,.28), transparent 65%)" : net === "FUTURE" ? "radial-gradient(circle, rgba(52,211,153,.22), transparent 65%)" : "radial-gradient(circle, rgba(34,211,238,.30), transparent 65%)" }} />
      {tags.map((t, i) => (
        <span key={t.t} className={"float-tag " + t.c} style={{ ...t.s, animationDelay: i * 0.7 + "s" }}>{t.t}</span>
      ))}
      <div className="phone">
        <div className="phone-notch" />
        <div className="screen"><PhoneScreen net={net} /></div>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [net, setNet] = useState("ITC");
  const context = net === "FUTURE"
    ? "Fork-friendly coin adapters: rebrand Elara, drop in your own chain, keep it open under the GPL."
    : PHONE[net].context;
  return (
    <header className="hero wrap" id="top">
      <div className="hero-grid">
        <div>
          <Reveal>
            <span className="hero-badge"><span className="hex" style={{ width: 12, height: 12, background: "var(--gold)" }} /> non-custodial · open source · GPL-3.0</span>
          </Reveal>
          <Reveal delay={60}>
            <h1>Your keys. Your coins.<br /><span className="grad-gold">Your sovereignty</span> — carved in gold.</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">Elara is a premium, <b>open-source mobile wallet</b> for Bitcoin and Interchained. Real cryptography, zero custody, and a gold honeycomb interface that treats your money like it matters.</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="net-toggle" style={{ marginTop: 28 }}>
              {[["ITC", ""], ["BTC", "gold"], ["FUTURE", "green"]].map(([k, cls]) => (
                <button key={k} className={(net === k ? "on " + cls : "")} onClick={() => setNet(k)}>
                  {k === "FUTURE" ? "Forks" : k}
                </button>
              ))}
            </div>
            <p className="net-context">{context}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-cta">
              <a className="btn btn-gold" href={LINKS.github} target="_blank" rel="noopener"><Icon name="github" size={18} fill /> Read the source</a>
              <a className="btn btn-ghost" href="#features"><Icon name="hex" size={17} /> Explore the wallet</a>
              <a className="btn btn-ghost" href={LINKS.lore} target="_blank" rel="noopener"><Icon name="moon" size={17} /> The manifesto</a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-meta">
              <div className="m"><b className="grad-gold">0</b><span>SERVERS HOLD YOUR KEYS</span></div>
              <div className="m"><b>BTC + ITC</b><span>NATIVE CHAINS</span></div>
              <div className="m"><b className="grad-cyan">100%</b><span>ON-DEVICE SIGNING</span></div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}><PhoneMockup net={net} /></Reveal>
      </div>
    </header>
  );
}

/* ---------------- MANIFESTO STRIP ---------------- */
function Manifesto() {
  return (
    <section className="section-pad" id="overview">
      <div className="wrap">
        <Reveal className="manifesto">
          <span className="eyebrow gold"><Icon name="moon" size={13} /> Why a moon, why a comb</span>
          <p className="manifesto-quote">Most wallets ask you to trust them.<br /><span className="grad-gold">Elara asks you to trust math.</span></p>
          <div className="manifesto-grid">
            <div className="mtile">
              <span className="hex mtile-ic"><Icon name="moon" size={20} /></span>
              <b>In orbit. Self-held.</b>
              <p>Elara orbits Jupiter — small, distant, impossible to capture. That is the posture we want for your money: close enough to move value through the giants of finance, far enough that none of them can reach in and take it.</p>
            </div>
            <div className="mtile">
              <span className="hex mtile-ic gold"><Icon name="hex" size={20} /></span>
              <b>Build the comb.</b>
              <p>A hive is the strongest structure nature ever drew — no central cell the whole thing depends on. Every wallet running Elara is one cell. Every contributor who forks the repo is one cell. The comb only gets stronger.</p>
            </div>
            <div className="mtile">
              <span className="hex mtile-ic cy"><Icon name="key" size={20} /></span>
              <b>Hold your keys.</b>
              <p>Every key is generated, encrypted, and signed on your device. No server holds your seed. No company holds your coins. The source is open, so you never have to take our word for it.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Manifesto, PhoneMockup });
