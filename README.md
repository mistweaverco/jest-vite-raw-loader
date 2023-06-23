Jest Vite Raw Transformer
=========================

Transformer for jest that helps with vite's import `?raw` syntax.

## Usage

Configure Jest for `.hbs?raw` files (just as an example):

```json
{
  "jest": {
    moduleNameMapper: {
        '^(.+\\.hbs)\\?raw$': '$1'
    },
    "transform": {
      "^.+\\.hbs$": "@mistweaverco/jest-vite-raw-transformer"
    }
  }
}
```

