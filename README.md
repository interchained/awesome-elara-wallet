<div align="center">

<img src="assets/elara-logo.png" alt="Elara Wallet" width="120" />

# Elara Wallet

### Your keys. Your coins. Your sovereignty — carved in gold.

**A premium, open-source, non-custodial mobile wallet for Bitcoin (BTC) and Interchained (ITC).**

Real cryptography. Zero custody. On-device signing. A gold honeycomb interface that treats your money like it matters.

[![License: GPL v3](https://img.shields.io/badge/License-GPL%203.0--or--later-f59e0b.svg)](LICENSE)
[![Commercial License](https://img.shields.io/badge/Commercial-Available-22d3ee.svg)](#-licensing)
[![Platform](https://img.shields.io/badge/platform-Android%20%C2%B7%20iOS%20%C2%B7%20Web-0b1020.svg)](#-platforms)
[![Built with Capacitor](https://img.shields.io/badge/built%20with-Capacitor%20%2B%20Svelte-34d399.svg)](#-tech-stack)
[![Self-custody](https://img.shields.io/badge/custody-self-f59e0b.svg)](#-the-security-model)

[**Website**](https://elarawallet.com) · [**The Manifesto**](LORE.md) · [**Interchained**](https://interchained.org) · [**Report a bug**](../../issues) · [**Contribute**](#-contributing)

</div>

---

> **Most wallets ask you to trust them. Elara asks you to trust math.**
>
> Elara is named for a small, distant moon of Jupiter — in orbit, self-held, captured by no one. That is the posture we want for your money: close enough to move value through the giants of finance, far enough that none of them can reach in and take it. The honeycomb running through the app is not decoration. It is the architecture of decentralization, rendered in light: a structure with no central cell the whole thing depends on. Every wallet running Elara is one cell. Every contributor who forks this repo is one cell. The comb only gets stronger.
>
> Read the full story in **[LORE.md](LORE.md)**.

Elara Wallet Source Code: https://github.com/interchained/elara
---

## Table of Contents

- [What is Elara?](#-what-is-elara)
- [Why Elara exists](#-why-elara-exists)
- [Feature overview](#-feature-overview)
- [The security model](#-the-security-model)
- [Screenshots](#-screenshots)
- [Tech stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project structure](#-project-structure)
- [Getting started](#-getting-started)
- [Configuration](#-configuration)
- [Building for platforms](#-building-for-platforms)
- [Networks & coins](#-networks--coins)
- [Address types & derivation](#-address-types--derivation)
- [The send pipeline](#-the-send-pipeline)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Forking Elara](#-forking-elara)
- [Security disclosure](#-security-disclosure)
- [FAQ](#-faq)
- [Licensing](#-licensing)
- [Acknowledgements](#-acknowledgements)

---

## 🌙 What is Elara?

Elara is the **interface layer of Interchained** — the mobile wallet where the chain becomes usable, portable, and personal. A blockchain is not complete until people can hold it, send it, receive it, back it up, and understand what they own. Elara exists to make that possible **without ever becoming the custodian**.

It is a **non-custodial** wallet: keys are generated, encrypted, and signed entirely on your device. No server holds your seed. No company can freeze, seize, read, or recover your funds. There is no admin key, and there is no "forgot password." The source is open — so you never have to take our word for any of it.

| | |
|---|---|
| **Custody** | Self-custody only. No backend holds keys. |
| **Coins** | Bitcoin (BTC) + Interchained (ITC), in one wallet |
| **Signing** | 100% on-device |
| **Backend** | None — talks directly to ElectrumX nodes over TCP/TLS |
| **Recovery** | BIP39 seed phrase, generated on-device |
| **License** | GPL-3.0-or-later (commercial license available) |
| **Interface** | Mobile-first, gold honeycomb, light/dark, WCAG 2.1 AA |

---

## 🎯 Why Elara exists

The wallet should never become the owner. Custodial apps are convenient until the day they are not — frozen accounts, lost keys held by someone else, opaque "for your safety" interventions. Elara takes the opposite stance:

- **Self-custody is not a feature. It is the foundation.** Everything else is built on top of the assumption that the keys belong to the user.
- **The app should never be able to betray you.** No custody, no backdoor, no admin key, no telemetry on your secrets.
- **Open source is not a marketing word — it is an audit you can run yourself.** Every line that touches your keys lives in this repository.
- **BTC support is not decoration.** Interchained carries Bitcoin's design language in its DNA. Supporting BTC keeps that relationship visible at the wallet layer and gives users familiar self-custody ground to stand on.

---

## ✨ Feature overview

### Core wallet
- 🔑 **BIP39 seed phrases** — standard recovery phrases generated on-device
- 🌳 **BIP32 hierarchical deterministic (HD) wallets** — entire key trees from a single seed
- 🪙 **Multi-coin** — native **BTC** and **ITC** support in one app
- 👛 **Multi-wallet** — create, import, switch, and delete wallets with fully isolated caches
- ✍️ **On-device signing** — private keys never leave the device
- ⚡ **Lightning Mode (WIF)** — simplified single-address wallets from a WIF key, with no address rotation

### Transactions
- 📲 **QR send & receive** — scan and generate payment codes
- 💸 **Live fee estimation** — choose your transaction urgency
- 📊 **VWAP pricing** — volume-weighted price data with full fiat breakdowns
- 🔁 **Three-phase send pipeline** — `PREPARE → FILTER → FINALIZE` for fast, reliable UTXO selection
- 📡 **Direct broadcast** — transactions are pushed straight to ElectrumX nodes

### Compatibility
- 🏷️ **Full derivation support** — BIP84 (native segwit), BIP49 (wrapped segwit), BIP44, and legacy **P2PKH**
- 👁️ **Watch-only wallets** — monitor any address or `xpub` without exposing private keys
- 🔓 **WIF import** — bring existing private keys into the wallet
- 🔵 **Blue Wallet–compatible** scanning — 20 + 20 gap-limit discovery across paths

### Security & experience
- 🔒 **Encrypted local storage** — keys are encrypted at rest on the device
- 🔐 **PIN + biometrics** — 6-digit PIN and Face/Touch unlock gate every session
- 🔔 **Smart notifications** — price alerts plus incoming/confirmed transaction pushes
- 📴 **Offline price cache** — service-worker caching keeps prices visible without a connection
- 🎨 **Gold honeycomb UI** — premium light/dark themes meeting WCAG 2.1 AA contrast
- 🤖 **Optional AI concierge (Malachi)** — in-app guidance gated behind your own API key
- 🔄 **Optional in-app swaps** — pluggable ChangeNOW integration via your own key

> Optional integrations (AI concierge, swaps) are **off by default** and require **your own API keys**. Elara ships nothing that phones home about your funds.

---

## 🛡 The security model

Elara is designed so that **the worst-case behavior of the app is still safe for the user.**

```ts
type ElaraWallet = {
  custody:    "self";
  networks:   ["BTC", "ITC"];
  signing:    "on-device";
  storage:    "encrypted-local";
  recovery:   "BIP39-seed";
  derivation: "BIP32 / 84 / 49 / 44 / P2PKH";
  backend:    "none";              // direct ElectrumX TCP/TLS
  license:    "GPL-3.0-or-later";
};
```

**What Elara can do:** generate keys, derive addresses, build and sign transactions locally, query balances and history from public ElectrumX nodes, and fetch public price data.

**What Elara cannot do:** read your seed off a server (there is none), freeze your funds, recover a lost seed, or push an "admin" action against your wallet. These are not missing features — they are the entire point.

**Network surface:** Elara only talks to (1) ElectrumX nodes for chain data and broadcast, and (2) HTTPS price feeds. Optional features add only the endpoints you explicitly enable with your own keys.

> ⚠️ **You alone are responsible for your keys, seed phrases, and funds.** Back up your seed **offline**, test with small amounts first, and verify everything before relying on the wallet for meaningful funds. There is no "forgot password."

---

## 📸 Screenshots

> Marketing/explainer microsite for this project lives in `Elara Wallet.html` (open-source contributor edition). App screenshots:

| Balances | Send | Receive | Settings |
|---|---|---|---|
| _add screenshot_ | _add screenshot_ | _add screenshot_ | _add screenshot_ |

---

## 🧰 Tech stack

| Layer | Technology |
|---|---|
| **Runtime / native bridge** | [Capacitor](https://capacitorjs.com/) |
| **UI framework** | [Svelte 4](https://svelte.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Bundler / dev server** | [Vite 5](https://vitejs.dev/) |
| **Bitcoin cryptography** | [`bitcoinjs-lib`](https://github.com/bitcoinjs/bitcoinjs-lib) |
| **Interchained cryptography** | `interchainedjs-lib` |
| **HD keys** | [`bip32`](https://github.com/bitcoinjs/bip32), [`bip39`](https://github.com/bitcoinjs/bip39) |
| **Elliptic curve** | [`tiny-secp256k1`](https://github.com/bitcoinjs/tiny-secp256k1) |
| **Chain transport** | ElectrumX over TCP/TLS (custom Capacitor plugin) |

---

## 🏗 Architecture

Elara is built as **four honest layers** with no centralized backend sitting in the middle.

```
┌───────────────────────────────────────────────────────────┐
│  Svelte + TypeScript UI                                    │
│  Screens · Components · Stores · Gold honeycomb skin       │
├───────────────────────────────────────────────────────────┤
│  Service layer                                             │
│  Crypto · Balance · Price · Indexer · Notifications        │
├───────────────────────────────────────────────────────────┤
│  Crypto libraries                                          │
│  bitcoinjs-lib · interchainedjs-lib · BIP32/39 · secp256k1 │
├───────────────────────────────────────────────────────────┤
│  Capacitor native bridge                                   │
│  ElectrumX TCP/TLS · Biometrics · Encrypted storage        │
└───────────────────────────────────────────────────────────┘
                          │
                          ▼
              ElectrumX nodes  ·  HTTPS price feeds
```

**Highlights**

- **Three-phase send pipeline** — `PREPARE → FILTER → FINALIZE` keeps UTXO selection fast and predictable.
- **Optimized transaction indexer** — rate-limited batch fetching, smart caching, and resume-on-interruption.
- **Direct ElectrumX over TCP/TLS** — via a custom Capacitor plugin, so there is no server proxying your queries.
- **Blue Wallet–compatible** 20 + 20 gap-limit scanning across every BTC derivation path.

---

## 📂 Project structure

> Indicative layout — see the actual tree for the source of truth.

```
elara/
├── src/
│   ├── lib/
│   │   ├── crypto/        # key generation, BIP32/39, signing
│   │   ├── coins/         # BTC + ITC coin adapters
│   │   ├── electrum/      # ElectrumX client + indexer
│   │   ├── services/      # balance, price, notifications
│   │   ├── stores/        # Svelte stores (wallet, settings, ui)
│   │   └── components/    # shared UI components
│   ├── routes/            # app screens
│   ├── styles/            # gold honeycomb theme tokens
│   └── app.ts             # entry
├── android/               # Capacitor Android project
├── ios/                   # Capacitor iOS project
├── plugins/               # custom native plugins (ElectrumX TCP/TLS)
├── static/                # icons, splash, manifest
├── .env.example           # optional integration keys
├── capacitor.config.ts
├── vite.config.ts
├── LORE.md                # the manifesto
├── LICENSE                # GPL-3.0-or-later
└── README.md
```

---

## 🚀 Getting started

### Prerequisites
- **Node.js 18+** and npm
- For Android builds: **Android Studio** + JDK 17
- For iOS builds: **Xcode** (macOS only)

### Run it in 60 seconds

```bash
# 1. Clone
git clone https://github.com/interchained/elara
cd elara

# 2. Install dependencies
npm install

# 3. Configure (all keys optional — copy the example as-is to start)
cp .env.example .env

# 4. Start the dev server and open the printed URL
npm run dev
```

That's it — the web build runs in any modern browser for development. Native device features (biometrics, native ElectrumX sockets) require a device or emulator build (see [Building for platforms](#-building-for-platforms)).

---

## ⚙️ Configuration

All integrations are **optional** and disabled until you supply a key. Copy `.env.example` to `.env` and fill in only what you want.

```bash
# --- Optional: AI concierge (Malachi) ---
# Leave blank to disable the in-app assistant entirely.
ELARA_AI_API_KEY=

# --- Optional: in-app swaps (ChangeNOW) ---
# Leave blank to hide swap functionality.
ELARA_SWAP_API_KEY=

# --- Optional: custom ElectrumX endpoints ---
# Defaults to bundled public nodes if unset.
ELARA_ELECTRUM_BTC=
ELARA_ELECTRUM_ITC=
```

> 🔐 Never commit your `.env`. It is gitignored by default. Keys you add are **yours** — Elara does not proxy them.

---

## 📱 Building for platforms

```bash
# Build the web assets
npm run build

# Sync web assets into native projects
npx cap sync

# Open the native IDEs
npx cap open android
npx cap open ios

# Or run directly on a connected device / emulator
npx cap run android
npx cap run ios
```

### Platforms
- ✅ **Android** — primary target, with an Aceternity-style native skin
- ✅ **iOS** — Capacitor build
- ✅ **Web** — development and preview

---

## 🪙 Networks & coins

| Coin | Symbol | Status | Notes |
|---|---|---|---|
| Bitcoin | **BTC** | ✅ Live | Full HD support, all standard paths |
| Interchained | **ITC** | ✅ Live | Native balances, transfers, confirmations |
| _Your chain_ | — | 🐝 Open | Add a coin adapter — see [Forking Elara](#-forking-elara) |

---

## 🏷 Address types & derivation

Elara supports the full range of standard derivation paths so it can interoperate with other wallets:

| Standard | Type | Example prefix |
|---|---|---|
| **BIP84** | Native SegWit (P2WPKH) | `bc1q…` |
| **BIP49** | Wrapped SegWit (P2SH-P2WPKH) | `3…` |
| **BIP44** | Legacy HD (P2PKH) | `1…` |
| **P2PKH** | Legacy import | `1…` |
| **WIF** | Single-key / Lightning Mode | — |
| **Watch-only** | `xpub` / address tracking | — |

Discovery uses a **Blue Wallet–compatible 20 + 20 gap limit** across each path so existing wallets import cleanly.

---

## 🔁 The send pipeline

Every outgoing transaction flows through three deterministic phases:

1. **PREPARE** — gather candidate UTXOs, estimate the fee for the chosen urgency, and compute the VWAP fiat breakdown.
2. **FILTER** — select the optimal UTXO set, account for change, and validate against balance and dust limits.
3. **FINALIZE** — build the transaction, sign **on-device**, and broadcast directly to ElectrumX.

This separation keeps coin selection fast, predictable, and easy to audit.

---

## 🗺 Roadmap

Four phases are **shipped**; the fifth is **open** — cells in the comb waiting for the next builder.

| Phase | Title | Status | Highlights |
|---|---|---|---|
| **01** | Wallet Core | ✅ Shipped | Key gen · BIP39 backup · BIP32 HD · encrypted storage · multi-wallet |
| **02** | Transaction Layer | ✅ Shipped | QR send/receive · fee estimation · VWAP pricing · ElectrumX broadcast |
| **03** | Compatibility | ✅ Shipped | BTC + ITC · BIP84/49/44/P2PKH · WIF/Lightning Mode · watch-only |
| **04** | Security & Skin | ✅ Shipped | PIN + biometrics · notifications · offline cache · gold honeycomb UI |
| **05** | On the Comb | 🐝 Open | Hardware signing · Lightning channels · reproducible builds · i18n · fork-friendly coin adapters |

---

## 🤝 Contributing

The comb has an empty cell with your name on it. Contributions are welcome from holders, builders, and developers alike.

```bash
# Fork the repo, then:
git checkout -b feature/your-idea
# ...make your changes...
npm run lint
npm run build
git commit -m "feat: describe your change"
git push origin feature/your-idea
# open a Pull Request
```

**Guidelines**
- Keep changes focused; one logical change per PR.
- Match the existing TypeScript + Svelte style; run the linter.
- Anything that touches keys, signing, or storage gets extra scrutiny — explain your reasoning in the PR.
- Be kind. We are building open infrastructure, not scoring points.

> 📜 **By contributing, you agree that your contributions are licensed under GPL-3.0-or-later** (see [Licensing](#-licensing)). This keeps the comb open for the next builder.

Good first issues are tagged [`good first issue`](../../labels/good%20first%20issue). Found a bug or have an idea? [Open an issue](../../issues).

---

## 🍴 Forking Elara

Elara is built to be forked. The GPL guarantees you can take it, rebrand it, add your own chain, and ship it — as long as you keep it open.

**To add a new coin:**
1. Create a coin adapter in `src/lib/coins/` implementing the shared coin interface (address derivation, tx building, ElectrumX params).
2. Register it in the coin registry.
3. Add theme tokens / icons for the coin.
4. Wire it into wallet creation and the network toggle.

That's the whole idea: **fork-friendly coin adapters** so builders can prove they can do it better. Every fork is one more cell.

---

## 🔐 Security disclosure

If you discover a vulnerability, **please do not open a public issue.** Email **security@interchained.org** (or **dev@interchained.org**) with details and a reproduction. We will acknowledge, investigate, and credit responsible disclosures.

Because Elara is non-custodial, the highest-impact bugs involve key generation, entropy, signing, or storage encryption. These are reviewed with priority.

---

## ❓ FAQ

**Is Elara custodial?**
No. Keys are generated and stored on your device. We never hold your seed or your coins.

**What happens if I lose my seed phrase?**
Your funds are unrecoverable. There is no "forgot password" and no support team can restore them. Back up your seed offline, in more than one place.

**Does Elara have a backend server?**
No. It talks directly to public ElectrumX nodes over TCP/TLS and to HTTPS price feeds. Optional features use only the keys you provide.

**Is this production-ready?**
Elara ships real, working functionality, but cryptocurrency software always carries risk. Review the code, test with small amounts, and use at your own discretion. Provided without warranty.

**Can I use Elara in a closed-source product?**
Not under the GPL. A separate **commercial license** is available — see below.

**Why "Elara"?**
It is a moon of Jupiter — small, distant, self-held, captured by no one. Read [LORE.md](LORE.md).

---

## 📄 Licensing

Elara is **dual-licensed** so it can stay open *and* stay alive.

### Open source — GPL-3.0-or-later
Free to use, study, modify, and distribute. If you distribute Elara or a derivative work, your work must **also** be open under the GPL, so the next builder inherits what you learned.

```
SPDX-License-Identifier: GPL-3.0-or-later
```

See [`LICENSE`](LICENSE) for the full text.

### Commercial license
Want to use Elara in a **closed-source, proprietary, white-label, or embedded** product without GPL obligations? A separate commercial license is available from **Interchained LLC**. This is what keeps open-source maintenance funded rather than abandoned.

📧 **Contact:** dev@interchained.org

---

## 🙏 Acknowledgements

Elara stands on the shoulders of the open-source giants it depends on — **bitcoinjs-lib**, **bip32/bip39**, **tiny-secp256k1**, **Capacitor**, **Svelte**, **Vite**, the **ElectrumX** ecosystem, and the broader Bitcoin self-custody movement that proved this was possible in the first place.

---

<div align="center">

### Hold your keys. Build the comb. Keep it open.

**Self-custody is the beginning. Elara is the interface.**

<sub>⬡ Made with gold by Interchained LLC · Released under GPL-3.0-or-later</sub>

[Website](https://elarawallet.com) · [Manifesto](LORE.md) · [GitHub](https://github.com/interchained/elara) · [Interchained](https://interchained.org)

</div>
