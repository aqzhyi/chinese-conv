// @ts-check

/** @type {import('prettier').Config} */
const overrides = {
  overrides: [
    {
      files: ['*.astro'],
      options: { parser: 'astro' },
    },
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      options: { parser: 'babel' },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: { parser: 'typescript' },
    },
    {
      files: ["*.json"],
      options: { parser: "json" },
    },
    {
      files: ["**/package.json"],
      options: { parser: "json-stringify" },
    },
    {
      files: '*.vue',
      options: { parser: 'vue' },
    },
    {
      files: ['*.htm', '*.html', '*.htmlx'],
      options: { parser: 'html' },
    },
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
    {
      files: '*.css',
      options: { parser: 'css' },
    },
    {
      files: '*.md',
      options: { parser: 'markdown' },
    },
    {
      files: '*.mdx',
      options: { parser: 'mdx' },
    },
    {
      files: '*.yaml',
      options: { parser: 'yaml' },
    },
  ],
}

/** @type {Partial<import('prettier-plugin-jsdoc').AllOptions>} */
const prettierPluginJsdocOptions = {
  /**
   * @example
   *   // jsdocCommentLineStrategy: 'singleLine'
   *
   *   // input:
   *
   *   \/** https://github.com/changesets/changesets/blob/main/packages/cli/src/commit/index.ts *\/
   *
   *   // output:
   *
   *   ```
   *   \/**
   *   * https://github.com/changesets/changesets/blob/main/packages/cli/src/commit/index.ts
   *   *\/
   *   ```
   *
   * @example
   *   // jsdocCommentLineStrategy: 'multiline'
   *
   *   // input:
   *   \/**
   *   * https://github.com/changesets/changesets/blob/main/packages/cli/src/commit/index.ts
   *   *\/
   *
   *   // output:
   *
   *   \/** https://github.com/changesets/changesets/blob/main/packages/cli/src/commit/index.ts *\/
   */
  jsdocCommentLineStrategy: 'keep',

  /**
   * @example
   *   // jsdocCommentLineStrategy: 'true'
   *
   *   // input:
   *
   *   \/** a for apple, b for ball *\/
   *
   *   // output:
   *
   *   \/** A for apple, b for ball *\/
   */
  jsdocCapitalizeDescription: false,
}

/** @type {import('prettier').Options} */
const config = {
  plugins: ['prettier-plugin-jsdoc'],
  ...prettierPluginJsdocOptions,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  insertPragma: false,
  jsxSingleQuote: true,
  parser: 'typescript',
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'consistent',
  requirePragma: false,
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}

export default {
  ...config,
  ...overrides,
}
