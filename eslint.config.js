// eslint.config.js (flat config for ESLint v9)
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1) ignore build/artifacts
  { ignores: ['dist', 'node_modules'] },

  // 2) base TypeScript recommended rules
  ...tseslint.configs.recommended,

  // 3) your project-specific tweaks
  {
    files: ['**/*.ts'],
    plugins: { import: importPlugin },
    rules: {
      'import/order': ['error', { 'newlines-between': 'always' }],
    },
  }
);
