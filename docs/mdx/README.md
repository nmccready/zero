# Markdown and MDX

Zero automatically converts all `.md` files to HTML pages.

Zero also supports [MDX](https://mdxjs.com/). This means you can use JSX in-between your markdown like this:

```markdown
import Graph from './components/graph'

## Here's a graph

<Graph />
```

## Importing `.md` Components

You can also import one markdown (or MDX) into another. Like this:

```markdown
import License from './license.md'

# Hello, world!

<License />
```

## Populating `<head>`

Zero turns your Markdown into HTML page, you might want to set head tags of this page like `<title>`, `<meta>`, etc. for improved SEO. Zero has [React Helmet Async](https://github.com/staylor/react-helmet-async) set up which you can also use in your `.md` and `.mdx` files:

```markdown
import {Helmet} from "react-helmet-async";

<Helmet>
  <meta charset="ISO-8859-1" />
  <title>Page Title</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>

# Page Heading

This page has a title and meta tags set.
```

You can check all the supported tags [here](https://github.com/nfl/react-helmet#reference-guide).

## Excluding Bundle from Client-Side

In addition to SSR (rendering on server-side), Zero bundles your app and adds it as a `<script />` in your page's HTML. If you only want to render static pages without including any JavaScript, you can tell zero to do that by exporting a `config` object from your page with `noBundling: true`.

This is useful if your page only has static content and doesn't have any dynamic logic (onClicks, AJAX calls etc)

### Example

```jsx
# Heading
This is markdown


export const config = {
  noBundling: true
}
```
