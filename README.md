# Archive

Course shelves and notes, split out of [the homepage](https://violetventi.github.io/) so it can be styled on its own.
Plain Jekyll, no theme.

Live at <https://violetventi.github.io/Archive/>.

## Layout

```
_courses/<course>.md        one course: front matter + description
_notes/<course>/*.md        notes for that course (see docs/notes-format.md)
_data/shelves.yml           shelves, in display order
_layouts/archive.html       shelves page (site root), tag search, course pop-up
_includes/course-detail.html  shared by the pop-up and the standalone course page
assets/js/archive.js        shelves, pop-up, tag filter
_sass/                      _tokens (colors, sizes) · _base · _site (header/footer) · _archive
```

## Local preview

```sh
bundle install
bundle exec jekyll serve      # http://127.0.0.1:4000/Archive/
```

`baseurl` in `_config.yml` is the only place the `/Archive` path is set.
Pushing to `main` deploys via GitHub Actions.
