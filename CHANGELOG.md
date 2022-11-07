The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## v0.0.9 - Unreleased

[All changes](https://github.com/hirusi/smix-eleventy-starter/compare/v0.0.8...main)

### Added

- To-do.

### Changed

- Instructions for local development have moved from `README.md` to `docs/development.md`.
- Instructions for publishing on Forestry/Netlify have moved from `README.md` to `docs/development.md`.
- Specify installation of Node.js via `asdf` as an alternate option to `nvm` in the development docs.
- Remove emojis from `README.md` and use bold highlighting instead.
- Remove webmentions from `To-Do` as I no longer wish to implement those.
- Add note about setting `ELEVENTY_ENV` on staging and production environments.
- Dependency updates (security-related PRs opened by @dependabot)
  - `lodash` from 4.17.20 to 4.17.21
  - `hosted-git-info` from 2.8.8 to 2.8.9
  - `cssnano` upgraded from `^4` to `^5`.
- Upgrade to Node LTS v16 and npm v8.

### Removed

- To-do.

## v0.0.8 - 2021-04-12

[All changes](https://github.com/hirusi/smix-eleventy-starter/compare/v0.0.7...v0.0.8).

### Added

* Compatibility with asdf-nodejs. #24 
* MIT license.
* Netlify configuration to keep draft posts out from the production site, but include in staging site. #25 closed by #26
* One-click Forestry import. #31

### Changed

* Dependencies updated per SemVer.
  * Includes development dependencies.
* Upgrade to Eleventy v0.12.1. #32.
## v0.0.7 - 21 October 2020

### Added

* A central `CHANGELOG.md` file.

### Changed

* SEO improvements for demo site
* Fix the URL to forestry.io in README (@drnic)
* Dependencies updated/affected per npm log:
  * **@11ty/eleventy-plugin-rss@1.0.9**
  * **@hirusi/eleventy-plugin-safe-external-links@0.14.3**
  * @11ty/eleventy@0.11.0
  * **autoprefixer@9.8.6**
  * browserify@16.5.2
  * @fullhuman/postcss-purgecss@1.3.0
  * babelify@10.0.0
  * @babel/runtime@7.12.1
  * @babel/plugin-transform-runtime@7.12.1
  * @babel/register@7.12.1
  * @babel/core@7.12.3
  * @babel/preset-env@7.12.1
  * child_process@1.0.2
  * cssnano@4.1.10
  * **date-fns@2.16.1**
  * gulp-imagemin@6.2.0
  * fancy-log@1.3.3
  * gulp-babel@8.0.0
  * gulp-concat@2.6.1
  * gulp@4.0.2
  * gulp-if@3.0.0
  * gulp-htmlmin@5.0.1
  * **date-fns-tz@1.0.12**
  * **liquidjs@9.16.1**
  * gulp-postcss@8.0.0
  * gulp-uglify@3.0.2
  * **postcss-import@12.0.1**
  * watchify@3.11.1
  * **lodash.merge@4.6.2**
  * vinyl-buffer@1.0.1
  * vinyl-source-stream@2.0.0
  * **postcss-nesting@7.0.1**
  * npm-run-all@4.1.5
  * **tailwindcss@1.9.5**
  * **eleventy-plugin-typeset@1.0.1**

## v0.0.6 - 10 August 2020

### Added

* microformats2
  * h-card for author info
  * h-feed for articles
  * h-entry for article
* typeset on staging and production environments for more professional looking content

### Changed

* Custom liquid engine as Eleventy uses a very old version (v6 to v9, if I'm not wrong)
* Update all dependencies per semver
* Better site socials and site authors structure in site data file
* Use JAMstack style content procesing for safe external links instead of client-side JS
* Default design/layout
* Work started on removing usage of deprecated include liquid tag
* Cleanup of extra spacing in head

### Fixed
* Use correct siteBaseUrl in meta tags
* Ran npm audit fix to fix automatically fix-able dependency issues
* Fix pagination for articles based on new liquid syntax
* The develop script watches assets now
* Node env correctly defaults to development if no environment specified
* Draft content is automatically excluded from collections on production

### Removed

* Client-side JS for safe external links -- externalLinks class names are no longer added toe external links (likewise for internal links)

## v0.0.5 - 08 August 2020

### Added

- Add a sitemap.xml
- Add a robots.txt
- Add an Atom feed for articles
- Add social meta tags (Twitter and Facebook Open Graph)

### Changed

- Fix bug with permalink generation on production environment
- Remove guests info from authors data file
- Add author picture key in authors data file
- Bump lodash from 4.17.15 to 4.17.19
- Bump elliptic from 6.5.2 to 6.5.3

## v0.0.4 - 16 May 2020

### Added

- Exclude from build: draft articles/pages on production
- Ignore Markdown files from husky (ocassionally causing issue with YAML front-matter formatting)
- New `clean` npm script to run before each development build
- `.forestry` directory with a default configuration in place for posts and pages, as well as `site.json`, for faster CMS setup
- Add a `page-title` include for displaying page titles on page templates and special pages like index, blog, tag

### Changed

- Update to Eleventy v0.11.0
- Refactor Eleventy configuration
  - Collections are now defined in a separate file
  - Filters have been modularized into separate files, each for `collections`, `dates`, `urls`, and `misc`
  - Single `env` file for all Eleventy files
  - Passthrough copy `admin` directory only on production
  - Move all content, layouts, includes, data to `src` directory
- Renamed `config.js` to `paths.js` to better reflect its intention
- Switch to `lodash.merge` for merging browserify configuration instead of `Object.assign`
- Rename layout to `article` from `post`
- Rename layout for sample articles to `article` (earlier `post`)
- Update `blog/` permalinks to `articles/`

### Removed
- Ability to specify files to clean before each build in `paths.js`
- Type definitions for `browser-sync` and `axios`
- `axios` removed as no calls being made in the starter kit. `node-fetch` recommended.
