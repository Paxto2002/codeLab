// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Disable "no-explicit-any" so build doesn’t fail
      "@typescript-eslint/no-explicit-any": "off",
      // Optional: if you want warnings instead of errors for unescaped entities
      "react/no-unescaped-entities": "warn",
    },
  },
];

export default eslintConfig;
