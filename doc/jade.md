# Jade

Jade is supported.

## Includes

You can use Jade's built-in [partials][jade-include] support when working on Jade pages.

While `metalsmith-sense` includes partials support, Jade's built-in feature is better if you're including a jade partial in a jade template. This will allow you to take advantage of Jade's features such as sharing variables.

If you have a jade file in `partials/`, you can include them using a relative path:

```jade
//- from /layouts/page.jade

include ../partials/head.jade
```

If you would like to use Jade partials in Handlebars, you can use metalsmith-sense's built-in partials support instead.

## Layouts

You can use Jade's built-in [layouts][jade-extends] support (extends).

While `metalsmith-sense` includes layouts support, Jade's built-in extends feature allows you to define content blocks.

```jade
//- from /src/index.jade

extends layouts/page.jade
block title
  | My page
block content
  h1 This is a content block.
```

```jade
//- from /layouts/page.jade

doctype html
html
  head
    title
      block title
  body
    block content
```


If you would like to use Jade partials from Handlebars pages (or vice versa), you can use metalsmith-sense's built-in layouts support instead.

[jade-include]: http://jade-lang.com/reference/includes/
[jade-extends]: jade-lang.com/reference/extends
