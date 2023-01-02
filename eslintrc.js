const baseConfig = require('ts-standard/eslintrc')
const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  ...baseConfig,
  plugins: ['hexagonal-architecture'],
  rules: {
    ...baseConfig.rules,
    '@typescript-eslint/no-useless-constructor': RULES.OFF,
    '@typescript-eslint/space-before-function-paren': RULES.OFF,
    '@typescript-eslint/no-floating-promises': RULES.OFF,
    '@typescript-eslint/strict-boolean-expressions': RULES.OFF,
    '@typescript-eslint/space-before-blocks': RULES.OFF
  },
  overrides: [
    {
      files: ['src/context/**/*.ts'],
      rules: {
        'hexagonal-architecture/enforce': RULES.WARN
      }
    }
  ]
}
