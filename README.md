# 🌗 Next.js Multi-Theme Demo with Tailwind CSS & Shadcn UI

This repository demonstrates a **fully dynamic multiple-theme setup** using:

- ✅ Next.js (App Router)
- 🎨 Tailwind CSS v4+
- 🧩 Shadcn UI Components
- ⚙️ `next-themes` for client-side theming
- 🌈 Custom Light/Dark themes (e.g., Red, Blue, Chrono)

> Built by [Jitendra Meena](https://jitendra.dev) • [📰 Blog post](https://jitendra.dev/blog)

[![MIT License](https://img.shields.io/github/license/palactix/next-js-multiple-theme-demo)](LICENSE)  
[![Live on Vercel](https://vercelbadge.vercel.app/api/palactix/next-js-multiple-theme-demo)](https://next-js-multiple-theme-demo.vercel.app)

---

## ✨ Features

- 🔄 Multiple **fully dynamic themes** with **light and dark** variants:
  - `theme-blue-light`, `theme-blue-dark`
  - `theme-red-light`, `theme-red-dark`
  - `theme-chrono-light`, `theme-chrono-dark`
- 🌍 Stored in `localStorage` and instantly applied at runtime
- 🔌 Powered by `next-themes` with full SSR support
- 🧱 Modular structure with `theme.config.ts` and Shadcn UI
- 🧩 Easily extensible for adding new themes or design tokens

---

## 📦 Tech Stack

| Tech           | Description                         |
|----------------|-------------------------------------|
| **Next.js**    | React Framework with App Router     |
| **Tailwind CSS** | Utility-first CSS engine           |
| **Shadcn UI**  | Accessible component library        |
| **next-themes**| Lightweight client-side theming     |
| **Lucide Icons** | Beautiful icon set                 |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/palactix/next-js-multiple-theme-demo.git
cd next-js-multiple-theme-demo
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Dev Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
.
├── app/
│   └── layout.tsx         // App shell and <ThemeProvider />
│   └── page.tsx           // Home page with theme switcher
├── components/
│   ├── mode-toggle.tsx   // Buttons to change theme
│   └── ui/                // Shadcn UI components
├── styles/
│   └── globals.css        // Theme classes and Tailwind base
├── tailwind.config.ts     // Tailwind with custom tokens
├── tsconfig.json
├── next.config.mjs
└── ...
```

---

## 🎨 How Theming Works

We use CSS variables scoped to theme classes like:

```css
.theme-blue-light {
  --background: #f8fafc;
  --foreground: #0f172a;
  --primary: #1e40af;
  --secondary: #e0e7ff;
  /* and more... */
}
```

Each theme is stored and managed via:

```ts
import { useTheme } from "next-themes";

const { setTheme } = useTheme();
setTheme("theme-red-dark"); // applies new class and saves to localStorage
```

---

## 📁 Add a New Theme

1. Add new class in `globals.css`:

```css
.theme-green-light {
  --background: #f0fff4;
  --primary: #10b981;
  /* ... */
}
```

2. Add entry in `mode-toggle.tsx`:

```ts
{ name: "Green Light", value: "theme-green-light" }
```

3. Done! It'll appear in the theme switcher instantly.

---

## 📦 Deployment

This project is easily deployable on [Vercel](https://vercel.com/) or any Node.js server.

```bash
npm run build
npm start
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [Shadcn UI](https://ui.shadcn.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [next-themes](https://github.com/pacocoursey/next-themes)
* [Lucide Icons](https://lucide.dev/)
* Inspired by clean design, performance-first development, and practical UX.

---

## 🌐 Author

**Jitendra Meena**
🚀 [jitendra.dev](https://jitendra.dev) • 🧑‍💻 [@palactix](https://github.com/palactix)
💡 Building developer-first tools, components & ideas
