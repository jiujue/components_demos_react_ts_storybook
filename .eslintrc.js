module.exports = {
  parser: '@typescript-eslint/parser',
  // ESlint Parser
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 0,
  },
};
