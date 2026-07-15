import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: ["pnpm-*.yaml"],
  sortPackageJson: {
    sortScripts: true,
  },
});
