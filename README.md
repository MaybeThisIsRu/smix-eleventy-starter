# 🌻 Smix
__A gulp-based starter for Static Site Generators, preconfigured for Eleventy v1.0.__

⚠️ Currently undergoing maintenance along with some updates. Pivoting to an opinionated starter kit.

## Reading.

For nice text, there's [Typeset](https://www.npmjs.com/package/typeset). While it adds to the build time, it makes for a more polished reading experience.

It seems [people do rely on RSS feeds](https://twitter.com/mxbck/status/1490698469312536578) even in 2022! Cheers to that; there's an Atom feed that is standards-compliant. It understands the published and updated datetime stamps on posts, and uses the RFC822 date format.

For those pushing #IndieWeb, some basic Microformats2 support is included. From h-card to understand authorship, h-entry to understand a post, and h-feed to have Microformat feeds. This allows following a website in Microsub readers.

Dark mode is included out of the box using a custom media query. (More in future-ready section below).

Date filters such as for friendly dates (10 March 2020) and machine-parseable dates (ISO8601) are available to use via filters.

## Discoverability/SEO.

* Meta tags for social networks (Open Graph/Twitter).
* Sitemap with `changeFrequency`; `robots.txt` (please also see [issue #7](https://github.com/hirusi/smix-eleventy-starter/issues/7)).
* Support for `content-description` meta tag.

## Writing

Write in Markdown, much loved among developers. If you don't already know it, it's [easy to get started](https://commonmark.org/help/tutorial/). You can also use separate apps and then copy-paste your content into a new file. This allows for focusing on content first, before messing with any technicals. I recommend [Bear](https://bear.app/).

### Linking to pages or posts.

`postUrl` shortcode similar to Jekyll's `post_url` and `link` liquid tags:

```liquid
{% postUrl collections.articles 'on-burnout' %}
```

### Code blocks.

Code blocks are made possible via [an Eleventy plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/). A few [Prism](https://prismjs.com/) themes are [included for you to pick from](src/assets/css/themes).

## Future-ready.

The CSS is written with upcoming CSS standards in mind. This is made possible thanks to PostCSS. Inclusions: imports, nesting, purge, minification, autoprefixer, custom properties, custom media queries (this makes a dark mode easy to build!), custom selectors, and [LCH color coding](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/).

JavaScript is transpiled via Babel, leaving you free to write ES2015+ JavaScript. Specifically, await/async syntax from ES2017 is also included.

## Accessible.

[Atkinson font by The Braille Institute](https://brailleinstitute.org/freefont) is included if you wish to use it. If not, there's a sans and serif fallback to system fonts.

Care is taken to have good contrast all around.

Should you choose to include some animations, do make use of a custom media query for those who prefer no motion:

```css
/* Prefers reduced motion. */
@media screen and (--rm) {
  .fancy {
    /* Disable animations. */
  }
}
```

## Under The Hood.

### Handling JavaScript.

ES Modules are [now well supported](https://caniuse.com/es6-module) and you should move to them. In that spirit, we use [`esbuild`](https://esbuild.github.io/).

If you want to bundle a single file and that is the default `index.js` source, running `npm run dev:js` is enough.

To allow for page-specific JavaScript files, we have a convenience command to put together a new JS bundle.

```sh
npm run dev:jsb --in=portfolio.js --out=portfolio.js
```

This will create a JS bunlde (hence `jsb`), entering at `src/assets/js/portfolio.js` and outputting at `dist/assets/js/portfolio.js`

Include them in the required page by using the `pageJavaScript` [`block`](https://liquidjs.com/tutorials/partials-and-layouts.html#Layout-Templates-Extends):

```liquid
{% block pageJavascript %}
<script type="module" src="/assets/js/portfolio.js">
{% endblock}

My content here.
```

### Misc Features

* __Prettier and editorconfig__ for consistent formatting of the codebase.
* __Modular gulp task files__ for easy configuration and modification.

## To-Do

* System default serif font class.
* Feed per tag (this could easily go into 10s or 100s, but you know, choice is important!)
* Syntax highlighting.
* Scheduled blog posts.
* Lazy-load images.
* Responsive images.

## How to Use

### Local Development

See [development docs](docs/development.md).

### Staging

`ELEVENTY_ENV` must be set to `staging`. 

* `npm run staging`

### Production

`ELEVENTY_ENV` must be set to `production`.

* `npm run prod`
