# SASS font-srcs mixin
A SASS mixin to simplify font-src property-values creation within @font-face. Relies upon a file extension to determine font type and assumes an unsuffixed string refers to local declaration.

## Usage
```
    @font-face {
        font-family: 'Test';
        @include font-srcs(
            'test.woff',
            'test.svg',
            'test.eot'
        );
    }
```
## Result
If an embedded opentype (.eot) font is supplied adds old-IE friendly url syntax, which is then overridden by the '#?eotfix' and format version - cannot remember source/author of original loose-hack discovery so unable to cite.
## Content
* `font-srcs` mixin
* `determine-font-type` function
* `determine-font-src` function
## Issues
1. Spread arguments not used currently, as originally developed in older/unsupported env. look at again?

## Requires
* list-create-exclude
* safe-unquote (mixin)
* to-lower-case (mixin)
* get-file-extension (mixin)
