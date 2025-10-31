// @ts-check

/** @type {import('prettier').Options} */
export default {
  plugins: ['prettier-plugin-jsdoc'],
  jsdocCommentLineStrategy: 'keep',
  jsdocCapitalizeDescription: false,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  insertPragma: false,
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