# Bontle Ba Rona Funeral Services

React website with the approved design, original flyer logo, 18 pages, monthly plan premiums, dropdown navigation, plan tabs, brochure viewer and WhatsApp quote dialog.

## Upload to GitHub

1. Extract the ZIP.
2. Create a GitHub repository, then upload the **contents** of the extracted folder to its root. `package.json`, `index.html`, `src/` and `public/` must be at the top level.
3. Include `.github/workflows/deploy.yml` and `.gitignore`. These names start with a dot and can be hidden in file browsers. GitHub Desktop is a convenient way to upload the complete folder; do not upload the ZIP itself as the website.
4. Commit to the `main` branch. The workflow is configured for that branch.
5. To publish with GitHub Pages, open **Settings → Pages → Build and deployment → Source → GitHub Actions**. Then open **Actions → Build and deploy website → Run workflow** if the initial run has already finished or failed before Pages was enabled.
6. After the workflow succeeds, GitHub shows the live address under Settings → Pages.

The workflow builds the React application and uploads `dist/`. Repository names can be chosen freely: relative assets and hash navigation work under repository subdirectories. For example, a plan URL ends in `/#/funeral-plans/plan-a`. Directly opening or refreshing that URL works on GitHub Pages without rewrite rules.

This package has not been uploaded or published for you. The included workflow publishes when you push to `main` after GitHub Pages is configured.

## Run on your computer

Install Node.js 22.12 or newer (Node 22 LTS recommended), open a terminal inside the project folder, and run:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal. React source files need this development server; double-clicking `index.html` does not run the source project.

## Build and check

```sh
npm test
npm run build
npm run preview
```

`npm run build` creates `dist/`, which can also be uploaded to a static hosting provider. Dependencies are pinned in `package-lock.json`; use `npm ci` for reproducible installations. Do not commit `node_modules/`, `dist/` or local environment files.

## Edit the website

| Location                          | What it contains                                  |
| --------------------------------- | ------------------------------------------------- |
| `src/pages/`                      | Editable React JSX for all 18 pages               |
| `src/components/Header.jsx`       | Navigation labels, links and dropdown behaviour   |
| `src/components/Brand.jsx`        | Original flyer logo display                       |
| `src/components/Footer.jsx`       | Footer links and office information               |
| `src/components/ContactStrip.jsx` | Top contact bar                                   |
| `src/components/Dialogs.jsx`      | Quote form and image viewer                       |
| `src/components/Content.jsx`      | Plan tabs, carousel, gallery and slideshow        |
| `src/styles.css`                  | Shared styling, responsive layouts and animations |
| `src/data/gallery.js`             | Gallery photo list                                |
| `public/assets/`                  | Original flyer images and your future photographs |
| `src/routes.jsx`                  | Page routing                                      |

## Add gallery photographs

Copy photographs into `public/assets/gallery/` and edit `src/data/gallery.js`:

```js
export const photos = [
  {
    file: 'assets/gallery/team.jpg',
    alt: 'Bontle Ba Rona team outside the office',
    caption: 'Our team',
    hero: true,
  },
];
```

Use your actual filenames, including the correct upper/lower case. The first three photos also fill the home/about image positions. Up to four photos with `hero` not set to `false` appear in the home slideshow. Gallery photographs have not yet been supplied, so the gallery is intentionally empty.

## Branding and functionality

- The original logo is displayed directly from the Plan A flyer using CSS clipping. Its fonts and artwork are not recreated. Sharpness is limited by the flyer resolution.
- Montserrat, Mulish and Martel are bundled locally through Fontsource, so the deployed site does not request Google Fonts. Font licenses are in `THIRD_PARTY_NOTICES.md` and `public/licenses/`.
- Plan premiums and benefits are preserved from the supplied flyers. The user confirmed monthly billing.
- Quote buttons prepare a WhatsApp message for the visitor to review and send. This front-end website does not create policies, take payments, store submitted forms or send messages automatically.
- The application uses React state for interactive controls, with effect cleanup for timers and observers. It does not embed the previous HTML site in an iframe or inject complete pages as HTML strings.

Framework and publishing references: [React setup guidance](https://react.dev/learn/build-a-react-app-from-scratch) and [Vite static deployment guide](https://vite.dev/guide/static-deploy.html).
