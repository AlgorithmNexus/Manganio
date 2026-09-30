# MOIL Mining Intelligence — Prototype

Video-ready React + Express prototype for manganese exploration, reserve analytics, production forecasting, risk signals and AI recommendations.

> All resource/reserve/prospectivity values in this prototype are synthetic demo values and are not certified geological estimates.

## Windows setup

### Terminal 1 — backend
```powershell
cd server
npm install
npm run dev
```

You should see:
`MOIL demo API running on http://localhost:5000`

### Terminal 2 — frontend
```powershell
cd client
npm install
npm run dev
```

Open:
`http://localhost:5173`

The Vite dev server proxies `/api` requests to `http://localhost:5000`.

## If npm reports an old dependency conflict

This version already pins `@vitejs/plugin-react` to the Vite-7-compatible major. Do not use `npm install --force` first. If an old lockfile exists, remove it and reinstall:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
```

## API

- `GET /api/health`
- `GET /api/dashboard`
- `GET /api/mines`
- `GET /api/prospectivity`
- `GET /api/reserves`
- `GET /api/production`
- `GET /api/alerts`
- `GET /api/insights`

The dummy data is isolated in `server/src/data/demo.js`, so it can later be replaced with real ML/GIS/database services.


## Important React effect fix

All API-loading pages use a synchronous `useEffect` callback. The async request is started inside the effect so React never receives a Promise as an effect cleanup function. This fixes the `destroy is not a function` / `useEffect must not return anything besides a function` error that occurred when navigating between pages.
