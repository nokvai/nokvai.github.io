# nokvai.github.io

Personal developer portfolio for Benjamin Eliseo III, built with [Angular](https://angular.dev) and deployed to [GitHub Pages](https://nokvai.github.io/).

## Development

```bash
npm install
npm start        # http://localhost:4200
```

## Build & deploy

GitHub Pages is configured to serve this repo's `master` branch from the `/docs` folder. The Angular build is configured (see `angular.json`) to output directly into `docs/` with `base-href: /`, so a plain build is all that's needed:

```bash
npm run build
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

Or run both steps at once:

```bash
npm run deploy
```

## app-ads.txt

[`app-ads.txt`](./app-ads.txt) lives at the project root (required by Google AdMob) and is copied into `docs/app-ads.txt` on every build, so it's served at `https://nokvai.github.io/app-ads.txt`. Edit the root file, not the one inside `docs/` — the latter is regenerated on every build.
