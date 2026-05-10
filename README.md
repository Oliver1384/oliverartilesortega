# Oliver Artiles Ortega - Portfolio

Personal portfolio website showcasing professional profile, skills, projects, and contact information.

[![Live Site](https://img.shields.io/badge/Live-oliverartilesortega.es-2C3333?style=flat&logo=internet-explorer&logoColor=white)](https://oliverartilesortega.es)

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | 19.2.5 |
| Language | TypeScript | 6.0.3 |
| Build Tool | Vite | 8.0.10 |
| UI Library | MUI (Material-UI) | 9.0.0 |
| Styling | Emotion | 11.14.0 |
| Linting | ESLint | 10.2.1 |
| Formatting | Prettier | 3.8.3 |

## Features

- **Single Page Application** with state-based routing
- **Biography** - Profile, contact info, and certifications
- **Projects** - Showcase of featured projects
- **Technologies** - Technical skills across 9 sections
- **Tools** - Development tools, books gallery, and resources
- **Responsive design** with mobile navigation
- **PDF Curriculum** download available

## Installation

```bash
# Clone the repository
git clone https://github.com/oliverartilesortega/oliverartilesortega.git

# Navigate to project directory
cd oliverartilesortega

# Install dependencies
npm install

# Start development server
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |

## Directory Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Main app component with routing
├── colors.ts             # Color theme constants
├── index.css             # Global CSS with font definitions
├── components/
│   ├── Biography.tsx    # Profile page
│   ├── Contact.tsx       # Contact links & CV download
│   ├── Projects.tsx      # Projects showcase
│   ├── Technologies.tsx  # Technical skills
│   ├── Tools.tsx         # Dev tools & resources
│   ├── Certificates.tsx  # Certifications list
│   ├── Resources.tsx    # Books gallery with modal
│   ├── types.ts          # Page state enum
│   └── ui/               # Reusable UI components
│       ├── Section.tsx
│       ├── Article.tsx
│       ├── Title.tsx
│       ├── SecondaryTitle.tsx
│       ├── SecondaryText.tsx
│       ├── Link.tsx
│       ├── ContactLink.tsx
│       ├── TechnologyIcon.tsx
│       ├── HamburgerMenu.tsx
│       └── MenuButton.tsx
└── assets/
    ├── logos/            # Technology logos (PNG)
    ├── icons/            # SVG icons
    └── img/              # Book covers
```

## Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary/Component | Dark Slate | `#2C3333` |
| Section | Teal Gray | `#395B64` |
| Background | Light Mint | `#E7F6F2` |
| Element | Soft Cyan | `#A5C9CA` |

## Page Navigation

The app uses state-based routing via `PageState` enum in `src/components/types.ts`:

- `PageState.Biography` (default) - Profile, contact info, certificates
- `PageState.Projects` - 4 featured projects
- `PageState.Technologies` - 9 technology sections
- `PageState.Tools` - Development tools, books, documentation

## Certificates & Curriculum

- Certificates: `src/components/Certificates.tsx` with links to PDFs in `public/certificates/`
- Curriculum: PDF available at `public/curriculum-oliver-artiles-ortega.pdf`

## Build Output

Production builds are output to `dist/` directory. The `docs/` folder contains a deployment for GitHub Pages.

## License

MIT License - See [LICENSE](./LICENSE) for details.