# Oliver Artiles Ortega Portfolio

## Project Overview

- **Name**: frontend
- **Type**: Personal portfolio website (Single Page Application)
- **Purpose**: Showcase professional profile, skills, projects, and contact information for a full-stack developer
- **Language**: Spanish
- **Live URL**: https://oliverartilesortega.es

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19.2.5 |
| Language | TypeScript 6.0.3 |
| Build Tool | Vite 8.0.10 |
| UI Library | MUI (Material-UI) 9.0.0 |
| Styling | Emotion + CSS |
| Linting | ESLint 10.2.1 |
| Formatting | Prettier 3.8.3 |

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
│   ├── Certificates.tsx # Certifications list
│   ├── Resources.tsx    # Books gallery with modal
│   ├── types.ts         # Page state enum
│   └── ui/              # Reusable UI components
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

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |

## Key Dependencies

```json
{
  "react": "19.2.5",
  "react-dom": "19.2.5",
  "@mui/material": "9.0.0",
  "@mui/styles": "6.4.8",
  "@emotion/react": "11.14.0",
  "@emotion/styled": "11.14.1"
}
```

## Page Structure (SPA Navigation)

The app uses state-based routing via `PageState` enum in `src/components/types.ts`:

- `PageState.Biography` (default) - Profile, contact info, certificates
- `PageState.Projects` - 4 featured projects
- `PageState.Technologies` - 9 technology sections
- `PageState.Tools` - Development tools, books, documentation

## Styling Conventions

- **Styling API**: MUI System `styled()` component
- **Global styles**: `src/index.css` with custom fonts (GeistMono)
- **Color palette**: Defined in `src/colors.ts`
  - Primary: `#2C3333` (component)
  - Section: `#395B64`
  - Background: `#E7F6F2`
  - Element: `#A5C9CA`

## Important Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main component, page state management, drawer state |
| `src/colors.ts` | Color theme constants |
| `src/components/types.ts` | `PageState` enum for navigation |
| `src/components/Contact.tsx` | Social links (LinkedIn, GitHub, Gmail, Codewars) |
| `src/components/Resources.tsx` | Books modal gallery |
| `src/components/ui/HamburgerMenu.tsx` | Mobile navigation |

## Build Output

Production builds are output to `dist/` directory. The `docs/` folder contains a separate deployment for GitHub Pages.

## Certificates

Located in `src/components/Certificates.tsx` - links to PDF certificates in `public/certificates/`

## Curriculum

PDF available at: `public/curriculum-oliver-artiles-ortega.pdf`