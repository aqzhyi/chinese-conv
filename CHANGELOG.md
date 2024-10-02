

## [3.0.1](https://github.com/aqzhyi/chinese-conv/compare/v3.0.0...v3.0.1) (2024-10-02)


### Bug Fixes

* build failure issue caused by incorrect paths when importing this package in the app ([599ed38](https://github.com/aqzhyi/chinese-conv/commit/599ed387e84e09f9e57fb74dc39fe08f5ba0876e))

## [3.0.0](https://github.com/aqzhyi/chinese-conv/compare/v2.1.0...v3.0.0) (2024-10-02)

## Build

- build!: use the more modern field packagejson#export to replace the main field, enhancing the exported files and typings.

      BREAKING CHANGE:

      all components are now exported as named exports, and the default export method is no longer supported

## [2.1.0](https://github.com/aqzhyi/chinese-conv/compare/v2.0.0...v2.1.0) (2024-08-25)

### Bug Fixes

- error handling, if a non-string parameter is unexpectedly passed in, an error message will be logged to the console ([43891b5](https://github.com/aqzhyi/chinese-conv/commit/43891b5028c7048629e1384ba7988e9258205824))

## [2.0.0](https://github.com/Aqzhyi/chinese-conv/compare/v1.1.0...v2.0.0) (2024-08-25)

### Bug Fixes

- retire the old-fashioned build plan from 9 years ago and switch to TypeScript, Bun, and Vitest ([b0548c42](https://github.com/aqzhyi/chinese-conv/commit/b0548c429c2969b0c491617f554c92005dd24943))
