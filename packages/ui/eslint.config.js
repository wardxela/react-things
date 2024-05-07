import baseConfig from "@react-things/eslint-config/base";
import reactConfig from "@react-things/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [],
  },
  ...baseConfig,
  ...reactConfig,
];
