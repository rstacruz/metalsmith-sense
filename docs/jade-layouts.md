# Jade layouts

To make Jade pages inherit from Jade templates, it's recommended to use Jade's built-in [extends] functionality.

[extends]: http://jade-lang.com/reference/extends/

Put layouts in `layouts/`

```jade
//- layouts/default.jade
doctype html
html
  head
    meta(charset='utf-8')
  body
    block content
```

Make your jade templates inherit from it:

```jade
//- src/index.jade
extends layouts/default.jade
block content
  h1 this is jade
```
