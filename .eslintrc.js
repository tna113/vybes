// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['/dist/*'],
  rules: {
    // Disable the built-in no-unused-vars rule to avoid conflicts
    'no-unused-vars': 'off',
    
    // Use TypeScript ESLint's version instead
    '@typescript-eslint/no-unused-vars': 'error',
    
    // Other rules set to warning level
    'no-console': 'warn',
    'prefer-const': 'warn',
    'no-var': 'warn',
    // You can also set rules to 'error' or 'off'
    'no-debugger': 'error',
    'no-alert': 'off',
  },
  // Set global warning level (optional)
  env: {
    browser: true,
    es2021: true,
  },
};
