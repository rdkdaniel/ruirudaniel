# Academic profile website (SnapFolio adaptation)

A responsive, single-page academic profile built from the supplied SnapFolio template using HTML, CSS, JavaScript and the included Bootstrap assets.

## Run locally

Open `index.html` in a browser. For a local development server, run from this directory:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Personalisation notes

The supplied profile details, affiliations, contact emails, academic identifiers and eight publication citations have been added to the homepage. The Google Scholar link currently opens a Scholar search for “Ruiru Daniel” because a direct author-profile URL was not supplied. Replace the sample portrait at `assets/img/profile/profile-2.webp` with a professional photograph before publishing.

The Research interests section intentionally retains its existing topic cards and includes a note that the section is currently static while a more exploratory version is being developed. Publication DOI and publisher links have not been added because none were supplied.

The old PHP contact form has been removed because GitHub Pages is static hosting and cannot execute PHP. The contact section uses direct `mailto:` links for both supplied institutional addresses.

## Deploy with GitHub Pages

1. Create a GitHub repository, for example `academic-profile`.
2. Upload the contents of this folder (the `index.html` file must be at the repository root).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the deployment workflow to finish. GitHub will show the published URL in the Pages settings.

All local CSS, JavaScript, image and vendor assets are included. Google Fonts are loaded from Google Fonts when an internet connection is available; the site remains usable if that request is unavailable.

## Template attribution

Adapted from [SnapFolio by BootstrapMade](https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/). Review the license/readme supplied with the original template and comply with its terms when publishing.
