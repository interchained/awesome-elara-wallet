/* ============================================================
   Elara — Ecosystem, Open Source, CTA, Closer, Footer
   ============================================================ */

/* ---------------- ECOSYSTEM ---------------- */
function Ecosystem() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          eyebrow="THE COMB"
          eyebrowClass="gold"
          title='The wallet becomes the <span class="grad-gold">surface area.</span>'
          subtitle="Elara begins as a wallet. Over time it becomes the surface for chains, nodes, prices, and contributor tools — every connection one more cell in the comb."
        />
        <div className="eco-wrap">
          <div className="eco-center">
            <div className="eco-hub">
              <img src="assets/elara-logo.png" alt="Elara" />
              <span><b>Elara Wallet</b><br /><span>org.interchained.elara</span></span>
            </div>
          </div>
          {ECO.map((n, i) => (
            <Reveal key={n.name} delay={i * 50}>
              <div className="card eco-node" style={{ height: "100%" }}>
                <b><span className="hex"><Icon name={n.icon} size={15} /></span>{n.name} <span className="tag">{n.tag}</span></b>
                <p>{n.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- OPEN SOURCE / LICENSE ---------------- */
function OpenSource() {
  return (
    <section className="section-pad" id="opensource">
      <div className="wrap">
        <SectionHead
          eyebrow="OPEN SOURCE"
          title='Built in the open, <span class="grad-gold">released with intent.</span>'
          subtitle="Open source is not a marketing word — it is an audit you can run yourself. Every line that touches your keys is in the repo. Elara is dual-licensed so it can stay open and stay alive."
        />
        <div className="lic-split">
          <Reveal>
            <div className="card lic-card open" style={{ height: "100%" }}>
              <div className="lh">
                <span className="hex"><Icon name="branch" size={20} /></span>
                <div><b>Open Source</b><span>GPL-3.0-OR-LATER</span></div>
              </div>
              <p>Free to use, study, modify, and distribute. If you distribute Elara or a derivative, your work must also be open under the GPL — so the next builder inherits what you learned.</p>
              <div className="lic-spdx">SPDX-License-Identifier: <b>GPL-3.0-or-later</b></div>
              <a className="btn btn-gold" href={LINKS.github} target="_blank" rel="noopener"><Icon name="github" size={17} fill /> Read the source</a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card lic-card commercial" style={{ height: "100%" }}>
              <div className="lh">
                <span className="hex"><Icon name="cube" size={20} /></span>
                <div><b>Commercial</b><span>INTERCHAINED LLC</span></div>
              </div>
              <p>Want to use Elara in a closed-source, proprietary, white-label, or embedded product without GPL obligations? A separate commercial license is available — so open-source maintenance stays funded, not abandoned.</p>
              <div className="lic-spdx">Contact: <b>dev@interchained.org</b></div>
              <a className="btn btn-ghost" href={LINKS.email}><Icon name="globe" size={17} /> Request a license</a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="qs">
            <div className="code-card" style={{ boxShadow: "none" }}>
              <div className="code-head">
                <span className="dots"><i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} /></span>
                <span className="fn">run it in 60 seconds</span>
                <span className="run"><span style={{ width: 6, height: 6, borderRadius: 9, background: "var(--cyan)", boxShadow: "0 0 7px var(--cyan)" }} /> node 18+</span>
              </div>
              <div className="code-body">
                <span className="cmd"><span className="pr">$ </span>git clone {`https://github.com/interchained/elara`}</span>
                <span className="cmd"><span className="pr">$ </span>npm install</span>
                <span className="cmd"><span className="pr">$ </span>cp .env.example .env <span className="cm"># keys optional</span></span>
                <span className="cmd"><span className="pr">$ </span>npm run dev <span className="cm"># open the printed URL</span></span>
              </div>
            </div>
            <div className="qs-foot"><Icon name="branch" size={13} /> Fork → branch → build → PR. By contributing you agree your work ships under GPL-3.0-or-later.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
const CTAS = [
  { cls: "", kicker: "For users", title: "Hold your own keys", body: "Download Elara, write down your seed offline, and own your BTC and ITC outright — no custodian, no permission needed.", btn: "Visit elarawallet.com", icon: "wallet", href: LINKS.site },
  { cls: "gold", kicker: "For developers", title: "Read the code, then check", body: "Study the BIP32/39 cryptography, the three-phase send pipeline, and the ElectrumX bridge. Open an issue or send a PR.", btn: "Open GitHub", icon: "github", href: LINKS.github, fill: true },
  { cls: "green", kicker: "For builders", title: "Claim an empty cell", body: "Fork it, rebrand it, add your chain. The license demands only that you keep it open — that is how a hive grows.", btn: "Read the manifesto", icon: "moon", href: LINKS.lore },
];

function CTASection() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHead
          eyebrow="GET INVOLVED"
          title='The comb has an empty cell <span class="grad-gold">with your name on it.</span>'
        />
        <div className="cta-grid">
          {CTAS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className={"card cta-card " + c.cls} style={{ height: "100%" }}>
                <span className="ck">{c.kicker}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <a className={"btn " + (c.cls === "gold" ? "btn-gold" : c.cls === "green" ? "btn-ghost" : "btn-ghost")} href={c.href} target="_blank" rel="noopener">
                  <Icon name={c.icon} size={17} fill={c.fill} /> {c.btn}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CLOSER ---------------- */
function Closer() {
  return (
    <section className="closer wrap">
      <Reveal>
        <span className="eyebrow gold" style={{ justifyContent: "center", display: "flex" }}><Icon name="hex" size={13} /> ⬡ the promise, kept</span>
        <h2 style={{ marginTop: 18 }}>Hold your keys.<br /><span className="grad-gold">Build the comb.</span> Keep it open.</h2>
        <p>Self-custody is the beginning. Elara is the interface. Then build something that outlives us.</p>
        <div className="hero-cta" style={{ justifyContent: "center", marginTop: 30 }}>
          <a className="btn btn-gold" href={LINKS.github} target="_blank" rel="noopener"><Icon name="github" size={18} fill /> Fork on GitHub</a>
          <a className="btn btn-ghost" href={LINKS.site} target="_blank" rel="noopener"><Icon name="wallet" size={17} /> Get Elara</a>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    { h: "Project", links: [["GitHub", LINKS.github], ["The manifesto", LINKS.lore], ["elarawallet.com", LINKS.site], ["Interchained", LINKS.interchained]] },
    { h: "Community", links: [["X / Twitter", LINKS.x], ["Discord", LINKS.discord], ["Telegram", LINKS.telegram], ["dev@interchained.org", LINKS.email]] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top"><img src="assets/elara-logo.png" alt="Elara" /><span className="bt"><b>Elara Wallet</b><span>INTERCHAINED LLC</span></span></a>
            <p>Your keys. Your coins. Your sovereignty — carved in gold. A premium open-source, non-custodial BTC + ITC mobile wallet.</p>
          </div>
          <div className="footer-cols">
            {cols.map((c) => (
              <div className="footer-col" key={c.h}>
                <h4>{c.h}</h4>
                {c.links.map(([l, h]) => <a key={l} href={h} target="_blank" rel="noopener">{l}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="disc">Elara Wallet is provided without warranty. Cryptocurrency software carries risk — always review, test, and secure your own use before relying on it for real funds. There is no "forgot password." · GPL-3.0-or-later</span>
          <span className="copy">⬡ Made with gold by Interchained LLC · © 2026</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Ecosystem, OpenSource, CTASection, Closer, Footer });
