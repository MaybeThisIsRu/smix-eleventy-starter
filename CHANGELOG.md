The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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

\## Fixed
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
