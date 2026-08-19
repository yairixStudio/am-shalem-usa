# Am Shalem USA — Official Website

**The official website of Am Shalem — a non-profit promoting Jewish identity, outreach, and Torah study, founded by Rabbi Haim Amsellem.**

This is a fast, dependency-free static website built with plain HTML, CSS, and JavaScript, and hosted on GitHub Pages under the custom domain [am-shalem.com](http://am-shalem.com).

**Live site:** [am-shalem.com](http://am-shalem.com)

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About Us | `about.html` |
| Mission Statement | `mission-statement.html` |
| Rabbi Haim Amsellem | `rabbi-amsellem.html` |
| Am Shalem Center Jerusalem | `am-shalem-center-jlm.html` |
| Get Involved | `get-involved.html` |
| Contact | `contact.html` |
| Privacy Policy | `privacy-policy.html` |

## Features

- **Fully static** — no build step, no frameworks, no backend; every page is a standalone HTML file
- **Responsive design** — single stylesheet (`css/style.css`) with a mobile-friendly layout
- **Vanilla JS enhancements** (`js/main.js`) — parallax hero, smooth scrolling, active-nav highlighting, newsletter signup, and a contact form with an inquiry-type switcher (General / Member / Volunteer) and client-side validation
- **SEO-ready** — semantic markup, per-page meta descriptions, Open Graph and Twitter cards, JSON-LD structured data (`NonProfit` schema), `sitemap.xml`, and `robots.txt`
- **Accessible** — skip-to-content link, ARIA landmarks and labels, keyboard-friendly navigation
- **Typography** — Cormorant Garamond and Open Sans via Google Fonts

> Note: the contact and newsletter forms are wired for [Formspree](https://formspree.io) but still use a placeholder form ID (`YOUR_FORM_ID`) — a real Formspree form ID must be set in the `action` attributes before the forms can deliver submissions.

## Tech Stack

- **HTML5** — semantic, multi-page static site
- **CSS3** — single custom stylesheet, no frameworks
- **Vanilla JavaScript** — one deferred script, no libraries
- **GitHub Pages** — deployed from the `main` branch root, with a custom domain via `CNAME`

## Run Locally

No build step is required. Clone and serve the folder with any static file server:

```bash
git clone https://github.com/yairixStudio/am-shalem-usa.git
cd am-shalem-usa
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000). (Opening `index.html` directly in a browser also works.)

## Project Documents

Planning documents from the build process are kept in the repo for reference:

- `WORKPLAN.md` — work plan
- `WEBSITE_SPECIFICATION.md` — site specification
- `CONTENT_TRANSCRIPT.md` — content transcript from the original site
- `assets/images/README.md` — image asset inventory

## Author

**[Yairix Studio](https://yairix.com)**

- Website: [https://yairix.com](https://yairix.com)
- Email: yairixstudio@gmail.com

Built for **Am Shalem** — [contact@am-shalem.com](mailto:contact@am-shalem.com)
