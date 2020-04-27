# Smix - A gulp-based starter for SSGs, preconfigured for @11ty/eleventy

## Framework

* Eleventy 0.10.0 out of the box
  * Date filters for a friendly version such as `10 March 2020`, and ISO8601 (also RFC822 compatible)
  * `getUrl` shortcode similar to Jekyll's `post_url` and `link` liquid tags
* Modern JavaScript
  * Transpilation via Babel
    * Support for `ES2015` JavaScript syntax
    * Support for `ES2017` `async`/`await` syntax
  * Module bundling via Browserify
* PostCSS
  * Includes: imports, nesting, purge, minification, autoprefixer
  * TailwindCSS, configured to strip out unused classes from production builds
  * Easily build a dark mode using the included `dm` screen type: `dm:bg-gray-900`
* A sane fonts setup
  * The `font-sans` class is configured to use system-default fonts
  * Include fonts locally for enhanced privacy of your visitors
* Minified assets on production
* Prettier and editorconfig
* Modular gulp task files for easy configuration and modification

## To-Do

* Comply with microformats2 - `h-card` and `h-entry`
* Webmentions, incoming and outgoing, only from/to other IndieWeb sites
* Forestry CMS
* Meta tags for social networks
* `sitemap.xml`
* System default serif font class
* Scheduled blog posts

## How to Use

### Local Development

* `nvm use`
* `npm install`
* `npm run dev`
* Open `localhost:3000` on your browser

### Production

* `npm run build`
