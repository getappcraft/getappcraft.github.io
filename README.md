# App Craft — site

Static site for App Craft and its products. No build step: plain HTML, CSS and one small
JS file. Open `index.html` to work on it.

```
index.html      portfolio home — product list
debrief.html    Debrief product and sales page
privacy.html    required by Lemon Squeezy
terms.html      terms and refund policy
assets/
  style.css     all styling, design tokens at the top
  app.js        scroll reveals and nav state
  img/
```

## Before launch — replace these

- `appcraft.dev1@gmail.com` — your real support address, in all four pages
- `data-checkout` link in `debrief.html` — the Lemon Squeezy checkout URL
- Price (`$29`) if you settle on something else — it appears in `debrief.html` twice
- `assets/img/` — add real screenshots of the app

## Adding a product later

Copy the `.product` block in `index.html`, drop a new icon in `assets/img/`, and add a page
modelled on `debrief.html`.

## Deploying to GitHub Pages

```sh
git init
git add -A
git commit -m "Site"
git remote add origin git@github.com:<you>/<repo>.git
git push -u origin main
```

Then Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` is already present
so GitHub serves the files as they are.

A custom domain is worth the $10/year — a `github.io` address on a paid product invites
doubt. Add it under Settings → Pages, and point a CNAME at `<you>.github.io`.
