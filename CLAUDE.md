# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LinkMe イベントマッチングアプリのプレスリリース用 Next.js アプリケーション。
静的サイトとしてエクスポートされるランディングページ。

## Development Commands

### Development Server
```bash
npm run dev
```
- `localhost:3000` で開発サーバーを起動 (all interfaces に bind)
- Hot reload enabled

### Build & Lint
```bash
npm run build    # Production build (static export)
npm run lint     # ESLint check
```

## Architecture & Tech Stack

### Framework & Libraries
- **Next.js 15.3.2** (App Router)
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Google Fonts** (Geist, Pacifico)
- **RemixIcon** for icons

### Project Structure
```
app/
├── page.tsx           # メインのプレスリリースページ
├── layout.tsx         # Root layout (フォント設定)
├── globals.css        # Global styles (Tailwind + RemixIcon)
└── not-found.tsx      # 404 page
```

### Key Configuration
- **Static Export**: `next.config.ts` で `output: "export"` 設定
- **Image Optimization**: Disabled (`unoptimized: true`)
- **TypeScript**: Strict mode enabled
- **Import Alias**: `@/*` で root からのパス解決

### UI Design Patterns
- **Gradient backgrounds**: pink/yellow gradients
- **Glassmorphism**: `backdrop-blur-sm` + `bg-white/90`
- **Rounded corners**: `rounded-2xl`, `rounded-3xl`
- **Emoji integration**: UI elements に絵文字を多用
- **Color scheme**: Pink/Purple/Blue/Green accent colors

### Content Structure
単一ページアプリケーション（SPA）として実装：
- Hero section with main messaging
- Feature explanations with icons
- User testimonials
- Service details
- Call-to-action section

## Development Notes

### Styling Approach
- Tailwind utility classes メイン
- Custom CSS は最小限
- Responsive design (`md:` breakpoints)
- Hover effects and transitions

### Font Setup
- Pacifico: ブランドロゴ用
- Geist Sans: 本文
- Geist Mono: モノスペース
- All fonts are optimized with `next/font/google`