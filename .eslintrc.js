module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-native', '@tanstack/query'],
  extends: [
    'universe/native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'plugin:react/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'react-native/react-native': true
  },
  rules: {
    'import/order': 'off',
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'never'],
    semi: 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
