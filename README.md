# Broadcast MCR - marketing site

Informational product site for **Broadcast MCR** (MCR Panel): HTML5/WebRTC operator monitoring for Techex Darwin playout-protection lanes.

No CTAs, forms, or waitlists – product story only.

## Requirements

- Node.js 20+ (18+ may work)
- npm

## Setup

```bash
cd /workspace/broadcastmcr/site
npm install
```

## Develop

```bash
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Build

```bash
npm run build
```

Output lands in `dist/`. Preview the production build:

```bash
npm run preview
```

## Deploy

`ops/deploy.sh` rsyncs `dist/` to a remote path.

```bash
export DEST=root@vm100:/var/www/broadcastmcr.com
npm run build
./ops/deploy.sh
# or: ./ops/deploy.sh root@vm100:/var/www/broadcastmcr.com
```

## Brand assets

Under `public/`:

- `broadcastmcr-logo.png` — wordmark + multiviewer icon
- `app-icon.png` — multiviewer icon / favicon
- `mcr-*.png`, `streamdeck-profile.png` — product screenshots

## Stack

Vite + React + TypeScript, Fira Sans via `@fontsource/fira-sans`.
