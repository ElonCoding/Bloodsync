# Fusion Starter

A production-ready full-stack React application template with integrated Express server, featuring React Router 6 SPA mode, TypeScript, Vitest, Zod, and modern tooling.

## Tech Stack
- **Frontend:** React 18, React Router 6 (SPA), TypeScript, Vite, TailwindCSS 3
- **Backend:** Express server integrated with Vite dev server
- **UI:** Radix UI, TailwindCSS 3, Lucide React icons
- **Testing:** Vitest
- **Package Manager:** PNPM

## Project Structure
```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/ui/        # Pre-built UI component library
├── App.tsx               # App entry point and SPA routing setup
└── global.css            # TailwindCSS theming and global styles

server/                   # Express API backend
├── index.ts              # Main server setup (express config + routes)
└── routes/               # API handlers

shared/                   # Types used by both client & server
└── api.ts                # Shared API interfaces
```

## Key Features
- SPA Routing powered by React Router 6
- TailwindCSS 3 for utility-first styling
- Pre-built UI components (Radix UI)
- Express server integration for API endpoints
- Type-safe API communication via shared interfaces
- Hot reload for both client and server
- Production-ready build and deployment options

## Development Commands
```bash
pnpm dev        # Start dev server (client + server)
pnpm build      # Production build
pnpm start      # Start production server
pnpm typecheck  # TypeScript validation
pnpm test       # Run Vitest tests
```

## Adding Features
### New API Route
1. (Optional) Create a shared interface in `shared/api.ts`
2. Create a new route handler in `server/routes/`
3. Register the route in `server/index.ts`
4. Use in React components with type safety

### New Page Route
1. Create component in `client/pages/`
2. Add route in `client/App.tsx`

## Production Deployment
- Standard: `pnpm build`
- Binary: Self-contained executables (Linux, macOS, Windows)
- Cloud: Netlify or Vercel supported

## Architecture Notes
- Single-port development with Vite + Express integration
- TypeScript throughout (client, server, shared)
- Full hot reload for rapid development
- Comprehensive UI component library included
- Multiple deployment options

---
For more details, see `AGENTS.md` and source files.