# Gulp Starter for Static Site Generators

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
  * Includes: imports, nesting, purge, minification
  * Autoprefixer
  * TailwindCSS, configured to strip out unused classes from production builds
  * Easily build a dark mode using the `dm` screen type.
* HTML and image minification on production
* BrowserSync
* Prettier and editorconfig
* Modular gulp task files for easy configuration and modification

## How to Use

### Local Development

* `nvm use`
* `npm install`
* `npm run dev`
* Open `localhost:3000` on your browser

### Production

* `npm run build`
