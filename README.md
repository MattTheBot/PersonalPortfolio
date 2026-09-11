# Matthew.Thony — Portfolio

A small, fast, three-language (EN / IT / DE) portfolio site. Built with plain HTML, CSS and JavaScript — no frameworks, no build step, no dependencies. Just drop it on GitHub Pages and it works.

The whole point of the setup is this: **you only ever edit one file for text** (`content.js`). Everything else — pages, translations, project cards, contact info — is generated from it automatically.

---

## What's in the box

```
portfolio-site/
├── index.html          → Home
├── skills.html         → Skills
├── portfolio.html      → Portfolio
├── contact.html        → Contact
├── content.js          → ✏️  ALL your text lives here. Edit this one.
├── script.js           → Renders everything. Don't touch unless you want to.
├── style.css           → All the styling. Don't touch unless you want to.
├── assets/
│   └── projects/
│       ├── project-1.jpg
│       ├── project-2.jpg
│       ├── project-3.jpg
│       └── project-4.jpg
└── README.md           → you are here
```

---

## The one rule

**To change anything visible on the site — text, projects, phone number, email, translations — you open `content.js`.** That's it. You don't touch the HTML files. You don't touch `script.js`. You don't touch `style.css`.

The HTML files are just empty shells with slots. `content.js` fills those slots when the page loads.

> ⚠️ There's exactly **one** exception: the little fake code card on the home page (the one that says `developer.js`) has its content hardcoded in `index.html`. If you want to change the `'Matthew.Thony'` inside it, edit that one line in `index.html`. Everything else is in `content.js`.

---

## How the three languages work

Every piece of text exists three times in `content.js` — once inside the `en:` block, once inside `it:`, once inside `de:`. They follow the exact same shape. If you add a project in `en`, you must add it in `it` and `de` too, or the site will show nothing for that project in those languages.

The site picks the language in this order:

1. `?lang=xx` in the URL (so you can share `yoursite.com/?lang=it` directly)
2. Whatever the visitor last chose (saved in their browser)
3. Their browser's own language
4. Falls back to English

The **EN / IT / DE** switcher in the navbar changes it live and remembers the choice.

---

## Cheat sheet — where do I change X?

| I want to change… | Open `content.js`, find… |
|---|---|
| My name in the navbar | `nav.logo` (in all 3 languages) |
| My name on the home page | `home.title` (in all 3 languages) |
| The rotating tagline under my name | `home.typewriter` (the list of phrases) |
| The hero paragraph | `home.description` |
| The 3 stat boxes (years / projects / clients) | `home.stats` |
| The three "What I Do" cards | `home.featured` |
| Skills and their levels | `skills.categories` |
| The note at the bottom of the skills page | `skills.note` |
| A project's title / text / image / links | `portfolio.items` |
| My email | `contact.email` and `contact.footerEmail` |
| My phone number | `contact.phone` |
| The "(WhatsApp preferred)" note next to the phone | `contact.phoneNote` |
| The WhatsApp link itself | `contact.whatsappUrl` — format is `https://wa.me/393756318020` (no `+`, no spaces) |
| My location | `contact.location` |
| The availability line | `contact.availability` |
| Footer tagline | `footer.tagline` |
| The footer quote | `footer.quote` |

**Remember:** every change needs to be made in **`en`, `it`, and `de`** if you want all three languages consistent. If you only care about English, just edit `en` — the other languages will keep showing their old text.

---

## How to add a new project (step by step)

Let's say you built something called "Weather Bot" and want to add it as a 5th project.

### 1. Save the screenshot

Put your image in `assets/projects/`. Name it something clean, no spaces:

```
assets/projects/weather-bot.jpg
```

Aim for roughly **1200×800 pixels** and under **300 KB**. If it's bigger, run it through [squoosh.app](https://squoosh.app) — takes 10 seconds, saves bandwidth.

### 2. Open `content.js` and find the portfolio block

Inside the `en:` section, scroll down to `portfolio: { ... }` and then to `items: [ ... ]`.

### 3. Copy an existing project block

Copy one of the four `{ ... }` objects, including the trailing comma. Paste it right after the last one. It should look like this:

```js
{
  image: "assets/projects/weather-bot.jpg",
  title: "Weather Bot",
  text: "A small Discord bot that posts the forecast every morning at 7am.",
  tags: ["Python", "API"],
  liveUrl: "",
  sourceUrl: "https://github.com/you/weather-bot"
},
```

A few notes:

- **`image`** — path to the image you just saved. Case-sensitive. Use forward slashes even on Windows.
- **`liveUrl`** — leave it as `""` (empty quotes) if there's no live demo. The button simply won't appear.
- **`sourceUrl`** — same thing. Empty string means no button. If both are empty, no buttons appear at all, just the card.
- **`tags`** — any number you want. Keep them short. They're just little chips.
- **Trailing comma** — don't forget it after each `}` except the very last one. JS is picky about that.

### 4. Repeat in Italian and German

Scroll to the `it:` section, find the same `portfolio.items` list, and add a matching block. The **image path, tags, and URLs stay identical** — only `title` and `text` change:

```js
{
  image: "assets/projects/weather-bot.jpg",
  title: "Bot Meteo",
  text: "Un piccolo bot Discord che pubblica le previsioni ogni mattina alle 7.",
  tags: ["Python", "API"],
  liveUrl: "",
  sourceUrl: "https://github.com/you/weather-bot"
},
```

Then do the same in the `de:` section. If you skip these, the project just won't appear in those languages.

### 5. Save and refresh

Hard refresh the browser: **Ctrl + Shift + R** on Windows/Linux, **Cmd + Shift + R** on Mac. Regular F5 won't do it — the browser caches `content.js`.

Done. You never touched a single HTML file.

---

## How to remove a project

Delete the whole `{ ... }` object from `portfolio.items` — including its trailing comma — in all three languages. Refresh. It's gone.

---

## How to remove the WhatsApp link but keep the phone number

In `content.js`, find `whatsappUrl` and change it to an empty string:

```js
whatsappUrl: "",
```

The phone number will still show, just no longer clickable.

---

## The contact form

The form uses [Web3Forms](https://web3forms.com) — you've already got your access key in `contact.html`. When someone submits it:

- The message lands in your inbox at **mattthonhauseralt@gmail.com**
- No backend, no server, no cost, works on GitHub Pages

If you ever need to change the key, it's in `contact.html`, look for:

```html
<input type="hidden" name="access_key" value="...">
```

---

## Deploying to GitHub Pages

1. Push the whole folder to a GitHub repository.
2. On the repo page: **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**. Save.
5. Wait ~30 seconds. Your site is live at `https://yourusername.github.io/repo-name`.

If you want a custom domain later, add a file called `CNAME` (no extension) with your domain name inside, and point your DNS at GitHub. Their docs cover it under "Managing a custom domain".

---

## Adding a new language

Say you want Spanish.

1. In `content.js`, copy the entire `en:` block (the whole thing from `en: {` to its closing `},`).
2. Paste it right after the `de:` block. Rename the key from `en` to `es`.
3. Translate every string inside.
4. In each HTML file, add a button to the language switcher:

```html
<button class="lang-btn" data-lang="es">ES</button>
```

That's it. The switcher picks it up automatically because it just loops over whatever buttons have `data-lang`.

---

## Styling tweaks (if you ever want them)

All colors are CSS variables at the top of `style.css`:

```css
:root {
  --accent: #ff6b6b;        /* coral — the main highlight colour */
  --accent-dark: #e55a5a;   /* hover state */
  --accent-light: #ffe3e3;  /* soft backgrounds, tag chips */
  ...
}
```

Change `--accent` to `#3b82f6` (blue), `#10b981` (green), or anything else and the **entire site** recolours — buttons, links, tags, dots, all of it. That's the point of variables.

The typewriter fonts are loaded from Google Fonts:

- **Special Elite** — headings (the "typewriter" look)
- **Courier Prime** — body text
- **Space Mono** — nav, buttons, tags, small labels

If you ever want a different typewriter font, swap it in the `<link>` tag in each HTML `<head>` and update `--font-typewriter` in `style.css`.

---

## Troubleshooting

**"I changed `content.js` but the site looks the same."**
Hard refresh. `Ctrl + Shift + R` / `Cmd + Shift + R`. The browser aggressively caches JS files.

**"My new project isn't showing up."**
Check three things, in order:
1. Did you add a comma after the previous project's closing `}`? Missing commas are the #1 cause.
2. Does the image path match exactly? `assets/projects/weather-bot.jpg` — lowercase, forward slash, correct extension.
3. Did you add it to the language you're currently viewing? If you're on the IT page, the project needs to be in the `it:` block too.

**"The image shows a broken icon."**
The file isn't where you said it is. Paths are case-sensitive on GitHub Pages even though they're not on Windows — `Project-1.jpg` and `project-1.jpg` are different files as far as the server is concerned.

**"Language switcher only shows one language."**
Check that all three `<button data-lang="...">` elements are inside `.lang-switcher` in each HTML file.

**"Contact form gives an error on submit."**
Your Web3Forms key is wrong, expired, or the email it was registered to hasn't been verified. Log into Web3Forms and check.

---

## Browser support

Works in every modern browser. Uses `backdrop-filter` for the frosted navbar, which is fine in Chrome, Edge, Safari, and Firefox (with a fallback). Uses CSS Grid and flexbox throughout. Uses `localStorage` for the language preference — if a visitor has cookies/storage disabled, it just falls back to English every time, no crash.

---

## Credits

Built from scratch — no template, no framework. Fonts by Google Fonts. Contact form by Web3Forms. Icons are just emoji, which means zero requests and zero dependencies.

If you break something and can't remember what you changed, the whole site is small enough to rebuild from `content.js` in about ten minutes.
