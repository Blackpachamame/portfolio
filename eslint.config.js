import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

export default tseslint.config([
  { ignores: ['node_modules/**', 'dist/**', 'dist-ssr/**', 'coverage/**'] },

  { settings: { react: { version: 'detect' } } },

  {
    files: [
      '**/*.{config,cfg}.{js,ts}',
      '**/{vite,eslint,tailwind}.config.{js,ts}',
      'scripts/**/*.{js,ts}',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
  },

  // Carga presets legacy en modo Flat (evita el error de plugins: ["react"])
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ),

  // Base JS/Browser
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'react/prop-types': 'off',
    },
  },

  // TS sin y con type-checking
  {
    files: ['**/*.{ts,tsx}'],
    extends: [...tseslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    languageOptions: { parserOptions: { projectService: true } },
  },
]);
