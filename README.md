# 🌻 Smix
__A gulp-based starter for Static Site Generators, preconfigured for @11ty/eleventy and Forestry CMS__

## Framework

* ♥ Eleventy 0.11.0 out of the box
  * Date filters for a friendly version such as `10 March 2020`, and ISO8601 (also RFC822 compatible)
  * `getUrl` shortcode similar to Jekyll's `post_url` and `link` liquid tags
* 🛋 Preconfigured for [Forestry CMS](forestry.io/).
  * Sign up, log in, look for the `Deploy admin` option.
  * Everything else is set up for you already. :)
* 👩‍💻 Modern JavaScript
  * Transpilation via Babel
    * Support for `ES2015` JavaScript syntax
    * Support for `ES2017` `async`/`await` syntax
  * Module bundling via Browserify
* 🎨 PostCSS
  * Includes: imports, nesting, purge, minification, autoprefixer
  * TailwindCSS, configured to strip out unused classes from production builds
  * Easily build a dark mode using the included `dm` screen type: `dm:bg-gray-900`
* 📖 A sane fonts setup
  * The `font-sans` class is configured to use system-default fonts
  * Include fonts locally for enhanced privacy of your visitors
* 💪 Minified assets on production
* 📔 Prettier and editorconfig
* 🔧 Modular gulp task files for easy configuration and modification

## To-Do

* Reload automatically after our assets change (filed [issue here](https://github.com/11ty/eleventy/issues/1125), waiting for response/PR approval). Please reload manually for now.
* Comply with microformats2 - `h-card` for author and `h-entry` for articles
* Webmentions, incoming and outgoing, only from/to other IndieWeb sites
* Meta tags for social networks (Open Graph/Twitter)
* Generate a `sitemap.xml`
* Generate an RSS feed
* System default serif font class
* Scheduled blog posts
* Lazy-load images
* Responsive images
* Integrate type-set

## How to Use

### Local Development

* `nvm use`
* `npm install`
* `npm run dev`
* Open `localhost:8080` on your browser

### Production

* `npm run prod`
