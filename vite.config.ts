import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react(), tsconfigPaths(), svgr()];

  if (mode === "production") {
    plugins.push(crx({ manifest }));
  }

  return {
    plugins,
    server: {
      port: 5174,
    },
  };
});
