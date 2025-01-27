module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@next/next/recommended'
    ],
    rules: {
      'react/no-unescaped-entities': 'off', // Disable the rule for unescaped entities
    },
  };
  