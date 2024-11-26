// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// import someOtherConfig from 'eslint-config-other-configuration-that-enables-formatting-rules';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  {
    ignores: ['postcss.config.cjs', 'tailwind.config.js'],
  },
);
