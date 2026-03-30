# PolyReach: Frontend Execution Plan

## 1. Project Architecture & Setup

### Tech Stack
- Framework: React (Vite)
- Styling: Tailwind CSS
- Routing: `react-router-dom`
- Icons: `lucide-react`
- UI Primitives (Modals/Dropdowns): `@headlessui/react`
- Utilities: `clsx`, `tailwind-merge` (for dynamic class handling)

### Color Palette
- Primary: Deep Indigo (`indigo-600` to `indigo-900`)
- Neutral: Slate (`slate-50` to `slate-900` for text and borders)
- Backgrounds: `bg-slate-50` for main app background, `bg-white` for cards and panels.
- Accents: Emerald (Success), Rose (Active), Amber (Warning/Pending).

## 2. Directory Structure

```text
src/
├── assets/          # Images, logos
├── components/
│   ├── layout/      # Sidebar, Topbar, MainLayout
│   ├── ui/          # Reusable basics: Button, Input, Modal, Table, Badge
│   └── shared/      # Composite components (e.g., FileUploader, StatsCard)
├── pages/           # Route components
│   ├── Dashboard.jsx
│   ├── Contacts.jsx
│   ├── Templates.jsx
│   ├── Campaigns.jsx
│   └── Settings.jsx
├── data/            # Mock data for initial UI
│   └── mockData.js
├── utils/           # Helper functions (e.g., cn())
├── App.jsx          # Router & Providers
└── index.css        # Tailwind directives
```

## 3. Component Details & Implementation Steps

### Step 1: Base UI Components (`components/ui/`)
- `Button.jsx`: Variants (primary, secondary, outline, ghost), sizes.
- `Modal.jsx`: Wrapper over `@headlessui/react` Dialog.
- `Badge.jsx`: Status indicators (e.g., Active, Paused, Pending).
- `Table.jsx`: Generic table with headers and row rendering.
- `Card.jsx`: Container with shadow, padding, and rounded corners.

### Step 2: Layout (`components/layout/`)
- `Sidebar.jsx`: Vertical navigation using `lucide-react` icons. Active state styling.
- `Header.jsx`: Top bar showing user profile, notifications, or current page title.
- `MainLayout.jsx`: Wraps Sidebar, Header, and `<Outlet />` for page content.

### Step 3: Pages (`pages/`)
1. **Dashboard**
   - Stats grid (`StatsCard`).
   - Recent Activity feed list.
2. **Contacts**
   - Drag-and-Drop area (`react-dropzone` or simple custom implementation).
   - Data table of uploaded contacts.
   - Column Mapping Modal triggered after upload.
3. **Templates**
   - Split layout: Left (Editor), Right (Variables Sidebar).
   - Toggle switch for "AI Personalize".
4. **Campaigns**
   - Stepper UI (List -> Template -> Channels -> Schedule).
   - Form inputs for each step.
5. **Settings**
   - Simple placeholder for now.

## 4. Execution Plan
1. Install dependencies: `npm install react-router-dom lucide-react @headlessui/react clsx tailwind-merge`
2. Configure `utils/cn.js` for tailwind class merging.
3. Build the core layout (Sidebar + Header).
4. Implement shared UI components.
5. Build the pages one by one with mock data.
6. Connect everything in `App.jsx`.
