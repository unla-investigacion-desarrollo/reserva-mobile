module.exports = {
  semi: true,
  printWidth: 110,
  endOfLine: 'auto',
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'none',
  importOrder: [
    "^react$",
    "^react-native$",
    "^[^.@/#].*$",
    "^@[^/]+/.*$",
    "^#.*$",
    "^\\..*$"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
};
