# 🌻 Smix
__A gulp-based starter for Static Site Generators, preconfigured for Eleventy and Forestry CMS.__

## Framework

* __Eleventy__ 0.12.1 out of the box.
  * Date filters for a friendly version such as `10 March 2020`, and ISO8601 (also RFC822 compatible).
  * `getUrl` shortcode similar to Jekyll's `post_url` and `link` liquid tags.
  * Custom rendering engine for HTML files - `Liquid v9`.
    * Adds support for missing filters such as `where` and improves performance.
* __Preconfigured__ for [Forestry CMS](https://forestry.io/) _and_ [Netlify](https://netlify.com/).
  * For Forestry
    * [![Import into Forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=hirusi/smix-eleventy-starter&engine=other)
    * In the general site settings click on `Deploy admin` option to host the CMS on your domain.
    * Everything else is already set up for you. :)
  * For Netlify...
    * Sign up, log in, add a `New site`.
    * Out of the box staging builds include Forestry drafts whereas production builds do not.
* __Indie__ publishing and reading experience.
  * microformats2 support for `h-card`, `h-entry`, and `h-feed` out of the box.
* Modern __JavaScript__.
  * Transpilation via Babel.
    * Support for __ES2015__ JavaScript syntax.
    * Support for __ES2017__ `async`/`await` syntax.
  * Module bundling via Browserify.
* __PostCSS__ as the choice of CSS transpiler.
  * Includes: imports, nesting, purge, minification, autoprefixer.
  * TailwindCSS (v1), configured to strip out unused classes from production builds.
  * Easily build a dark mode using the included `dm` screen type: `dm:bg-gray-900`.
* __SEO__ and other behind-the-scenes goodies.
  * Meta tags for social networks (Open Graph/Twitter).
  * Sitemap with `changeFrequency`; `robots.txt` (please also see [issue #7](https://github.com/hirusi/smix-eleventy-starter/issues/7)).
  * An Atom feed with support for both `published` and `updated` dates on articles.
  * Support for `content-description` meta tag.
* A sane __fonts__ setup.
  * The `font-sans` class is configured to use system-default fonts.
  * Include fonts locally for enhanced privacy of your visitors.
  * `typeset` for professional looking content.
* Minified assets on production.
* __Prettier and editorconfig__ for consistent formatting.
* __Modular gulp task files__ for easy configuration and modification.

## To-Do

* Reload automatically after our assets change (filed [issue here](https://github.com/11ty/eleventy/issues/1125), waiting for response/PR approval). Please reload manually for now.
* System default serif font class.
* Scheduled blog posts.
* Lazy-load images.
* Responsive images.

## How to Use

### Local Development

* `nvm use`
* `npm install`
* `npm run dev`
* Open `localhost:8080` on your browser

### Staging

`ELEVENTY_ENV` must be set to `staging`. 

* `npm run staging`

### Production

`ELEVENTY_ENV` must be set to `production`.

* `npm run prod`
