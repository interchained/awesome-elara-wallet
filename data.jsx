/* ============================================================
   Elara Wallet — data + icon helpers
   All content grounded in the real repo (github.com/interchained/elara)
   ============================================================ */

/* ---- minimal stroke icon set (functional UI glyphs) ---- */
const ICONS = {
  key: "M14 7a4 4 0 1 0-3.5 3.96L12 12.5 10.5 14 12 15.5 10.5 17l2 2 6-6M16 7h.01",
  coins: "M9 8a6 3 0 1 0 12 0 6 3 0 1 0-12 0v8a6 3 0 0 0 12 0M3 5a6 3 0 1 0 12 0 6 3 0 1 0-12 0v8a6 3 0 0 0 8 2.8",
  shield: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z",
  lock: "M6 10V8a6 6 0 1 1 12 0v2M5 10h14v10H5zM12 14v3",
  fingerprint: "M12 5a7 7 0 0 0-7 7v3M12 9a3 3 0 0 0-3 3v5M15 12a3 3 0 0 0-6 0v6M19 12a7 7 0 0 0-3-5.7M12 12v7",
  qr: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z",
  send: "M4 12l16-8-6 16-3-7-7-1z",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  bell: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6zM10 20a2 2 0 0 0 4 0",
  chart: "M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3M20 16V6",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5",
  wallet: "M3 7h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zM3 7l2-3h11l2 3M16 13h.01",
  moon: "M20 13a8 8 0 1 1-9-9 6.5 6.5 0 0 0 9 9z",
  hex: "M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z",
  branch: "M6 4v8m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 4a3 3 0 1 0 0 0zM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v2a4 4 0 0 1-4 4H9",
  terminal: "M4 5h16v14H4zM7 9l3 3-3 3M13 15h4",
  cpu: "M6 6h12v12H6zM9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 4 6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-6-4-9s1.5-6.5 4-9z",
  swap: "M7 4v13m0 0l-3-3m3 3l3-3M17 20V7m0 0l3 3m-3-3l-3 3",
  cube: "M12 2l8.5 5v10L12 22l-8.5-5V7L12 2zM12 22V12M3.5 7L12 12l8.5-5",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  check: "M4 12l5 5L20 6",
  alert: "M12 3l9 16H3l9-16zM12 10v4M12 17h.01",
  github: "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.300000-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.6 4.9.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
};

function Icon({ name, size = 22, stroke = 1.6, fill = false, style }) {
  const d = ICONS[name] || ICONS.hex;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"} strokeWidth={stroke} strokeLinecap="round"
      strokeLinejoin="round" style={style} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/* ---- FEATURE MATRIX (real features + accurate status) ---- */
const FEATURES = [
  { name: "Multi-coin: BTC + ITC", icon: "coins", purpose: "Native Bitcoin and Interchained support in one wallet.", status: "live" },
  { name: "BIP39 seed phrases", icon: "key", purpose: "Standard recovery phrases, generated on-device.", status: "live" },
  { name: "BIP32 HD derivation", icon: "branch", purpose: "Hierarchical deterministic key trees from a single seed.", status: "live" },
  { name: "On-device signing", icon: "cpu", purpose: "Every transaction is signed locally — keys never leave the phone.", status: "live" },
  { name: "Full HD multi-path", icon: "layers", purpose: "BIP84 / BIP49 / BIP44 / P2PKH import & scanning.", status: "live" },
  { name: "Lightning Mode (WIF)", icon: "bolt", purpose: "Simplified WIF-only wallets — one address per coin, zero rotation.", status: "live" },
  { name: "Watch-only wallets", icon: "eye", purpose: "Monitor any address without exposing private keys.", status: "live" },
  { name: "QR send & receive", icon: "qr", purpose: "Scan & generate codes with live fee estimation and VWAP pricing.", status: "live" },
  { name: "Encrypted local storage", icon: "lock", purpose: "Keys encrypted at rest on the device.", status: "live" },
  { name: "PIN + biometric unlock", icon: "fingerprint", purpose: "6-digit PIN and Face/Touch unlock gate every session.", status: "live" },
  { name: "Smart notifications", icon: "bell", purpose: "Price alerts plus incoming / confirmed transaction pushes.", status: "live" },
  { name: "Live prices + offline cache", icon: "chart", purpose: "HTTPS polling with service-worker caching when offline.", status: "live" },
  { name: "Multi-wallet", icon: "wallet", purpose: "Create, import, switch & delete wallets with isolated caches.", status: "live" },
  { name: "Direct ElectrumX (TCP/TLS)", icon: "terminal", purpose: "Talks to nodes directly via a custom Capacitor plugin — no backend.", status: "live" },
  { name: "Hardware wallet signing", icon: "shield", purpose: "External signer support for cold-key custody.", status: "planned" },
  { name: "Lightning Network channels", icon: "bolt", purpose: "Full Lightning routing beyond simplified WIF mode.", status: "planned" },
  { name: "Reproducible builds", icon: "cube", purpose: "Verifiable, deterministic binaries from source.", status: "planned" },
  { name: "Multi-language (i18n)", icon: "globe", purpose: "In-app localization for a global contributor base.", status: "planned" },
  { name: "Fork-friendly coin adapters", icon: "branch", purpose: "Drop-in chain modules so builders can add their own coin.", status: "planned" },
  { name: "AI concierge (Malachi)", icon: "cpu", purpose: "Optional in-app guidance, gated behind an API key.", status: "research" },
  { name: "In-app swaps", icon: "swap", purpose: "Optional cross-asset swaps via ChangeNOW integration.", status: "research" },
];

const FILTERS = [
  { key: "All", label: "All" },
  { key: "live", label: "Live", cls: "live" },
  { key: "planned", label: "Planned", cls: "planned" },
  { key: "research", label: "Research", cls: "research" },
];
const STATUS_LABEL = { live: "live", planned: "planned", research: "research" };

/* ---- ROADMAP (shipped phases + real roadmap) ---- */
const ROADMAP = [
  { num: "01", title: "Wallet Core", note: "Keys, seeds, and storage — shipped.", done: true,
    items: ["On-device key generation", "BIP39 seed backup", "BIP32 HD derivation", "Encrypted local storage", "Multi-wallet management"] },
  { num: "02", title: "Transaction Layer", note: "Move value in and out — shipped.", done: true,
    items: ["QR receive & send", "Live fee estimation", "VWAP pricing & breakdowns", "Three-phase send pipeline", "ElectrumX broadcast"] },
  { num: "03", title: "Compatibility", note: "Meet wallets where they are — shipped.", done: true,
    items: ["BTC + ITC support", "BIP84 / 49 / 44 / P2PKH", "WIF / Lightning Mode", "Watch-only mode", "Blue Wallet-compatible scanning"] },
  { num: "04", title: "Security & Skin", note: "Harden and polish — shipped.", done: true,
    items: ["6-digit PIN + biometrics", "Smart notifications", "Offline price caching", "Gold honeycomb UI (WCAG 2.1 AA)", "Android Aceternity skin"] },
  { num: "05", title: "On the Comb", note: "Open cells — your name goes here.", done: false,
    items: ["Hardware wallet signing", "Lightning Network channels", "Reproducible builds", "Multi-language (i18n)", "Fork-friendly coin adapters"] },
];

/* ---- ECOSYSTEM NODES (the comb) ---- */
const ECO = [
  { name: "ITC Chain", icon: "coins", tag: "native", desc: "Native Interchained balances, transfers, and confirmations." },
  { name: "Bitcoin", icon: "bolt", tag: "native", desc: "Full BTC self-custody across every standard derivation path." },
  { name: "ElectrumX", icon: "terminal", tag: "network", desc: "Direct TCP/TLS to nodes — no centralized backend in between." },
  { name: "Price feeds", icon: "chart", tag: "data", desc: "VWAP pricing over HTTPS, cached offline by the service worker." },
  { name: "Interchained", icon: "globe", tag: "org", desc: "The chain and the org that maintains Elara as open infrastructure." },
  { name: "Malachi AI", icon: "cpu", tag: "optional", desc: "Optional in-app concierge, gated behind your own API key." },
  { name: "Swaps", icon: "swap", tag: "optional", desc: "Optional cross-asset swaps via a pluggable ChangeNOW key." },
  { name: "Forks", icon: "branch", tag: "open", desc: "Every fork is a new cell — rebrand it, add a chain, keep it open." },
];

/* ---- ARCHITECTURE LAYERS (real diagram) ---- */
const ARCH_LAYERS = [
  { label: "Svelte + TypeScript UI", sub: "Screens · Components · Stores · Gold Skin", accent: "gold" },
  { label: "Service Layer", sub: "Crypto · Balance · Price · Indexer · Notify", accent: "cyan" },
  { label: "Crypto Libraries", sub: "bitcoinjs-lib · interchainedjs-lib · BIP32/39 · secp256k1", accent: "cyan" },
  { label: "Capacitor Native Bridge", sub: "ElectrumX TCP/TLS · Biometrics · Storage", accent: "green" },
];

const TECH = [
  "Capacitor", "Svelte 4", "TypeScript", "Vite 5", "bitcoinjs-lib",
  "interchainedjs-lib", "bip32", "bip39", "tiny-secp256k1", "ElectrumX TCP/TLS",
];

/* ---- LINKS ---- */
const LINKS = {
  github: "https://github.com/interchained/elara",
  lore: "https://github.com/interchained/elara/blob/main/LORE.md",
  site: "https://elarawallet.com",
  interchained: "https://interchained.org",
  aiassist: "https://aiassist.net",
  malachi: "https://malachi.aiassist.net",
  x: "https://x.com/elarawallet",
  discord: "https://discord.gg/yyFcRHGyTJ",
  telegram: "https://t.me/elarawallet",
  email: "mailto:dev@interchained.org",
};

/* ---- shared scroll-reveal helpers ---- */
const { useState: _uS, useEffect: _uE, useRef: _uR } = React;

function useReveal() {
  const ref = _uR(null);
  _uE(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.unobserve(el); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, as = "div", delay = 0, className = "", ...rest }) {
  const ref = useReveal();
  const Tag = as;
  return (
    <Tag ref={ref} className={("reveal " + className).trim()} style={{ transitionDelay: delay + "ms" }} {...rest}>
      {children}
    </Tag>
  );
}

/* section header block */
function SectionHead({ eyebrow, eyebrowClass = "", title, subtitle, center }) {
  return (
    <Reveal className={center ? "" : ""} style={center ? { textAlign: "center", maxWidth: 760, margin: "0 auto" } : {}}>
      {eyebrow ? <span className={"eyebrow " + eyebrowClass}>{eyebrow}</span> : null}
      <h2 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle ? <p className="subtitle" style={center ? { marginLeft: "auto", marginRight: "auto" } : {}}>{subtitle}</p> : null}
    </Reveal>
  );
}

Object.assign(window, { Icon, ICONS, FEATURES, FILTERS, STATUS_LABEL, ROADMAP, ECO, ARCH_LAYERS, TECH, LINKS, useReveal, Reveal, SectionHead });
