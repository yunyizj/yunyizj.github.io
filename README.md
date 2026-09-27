# ZHANG JIAN, Yun-Yi — Personal Website

This ZIP is ready for GitHub Pages.

## Deploy
1. Create a GitHub repository.
2. Upload **all files and folders inside this ZIP** to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. GitHub Pages will build the Jekyll site automatically.

## Replace the profile photo
The original portrait from the earlier conversation was not available as a reusable file in the current workspace, so the package includes a neutral placeholder instead of inventing/recreating your face.

Replace:
`assets/profile.jpg`

with your actual image, e.g. `assets/profile.jpg`, then change the two home pages from:
`/assets/profile.jpg`

to:
`/assets/profile.jpg`

## Add an article
Copy one file in `_posts/` and rename it to:
`YYYY-MM-DD-title.md`

Example front matter:
```yaml
---
layout: article
lang: zh
title: "文章標題"
date: 2026-10-01
category: 教學
---
```
Then write the article below in Markdown.

## Social links / ORCID
Facebook and LinkedIn are enabled on both language homepages. Instagram and ORCID are intentionally hidden.

## Add photos to experience details
Each experience detail page currently displays `Photo coming soon`. Add the desired image to `assets/`, then replace the placeholder in `_layouts/experience.html` if you want a shared image structure, or add a front-matter `image:` field and render it there.


### Experience file naming
Files in `_experiences` use English-only filenames for GitHub readability. The page titles and displayed content remain bilingual as before.


## v2 layout update
- Removed the article section and `_posts`.
- Header brand is `張簡雲翊@Taiwan`; navigation is aligned right.
- Homepage typography was resized for a cleaner editorial layout.
- Facebook and LinkedIn use inline SVG icons.
