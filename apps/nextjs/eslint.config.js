import baseConfig, {
  restrictEnvAccess,
} from "@react-things/eslint-config/base";
import nextjsConfig from "@react-things/eslint-config/nextjs";
import reactConfig from "@react-things/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
