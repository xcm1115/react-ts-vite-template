module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // environment variables (contains several predefined global variables)
  },
  globals: {
    // global variable (set to false to disallow it from being reassigned)
  },
  rules: {
    // customize your rules
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
};
