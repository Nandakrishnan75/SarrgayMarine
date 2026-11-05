import { defineConfig as lovableConfig } from "@lovable.dev/vite-tanstack-config";

const getLovableConfig = lovableConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      tsconfigPaths: true,
    },
  },
});

export default async function (env: { command: "build" | "serve"; mode: string }) {
  const config = typeof getLovableConfig === "function" ? await getLovableConfig(env) : await getLovableConfig;

  // Enable native Vite 8 tsconfig paths and remove vite-tsconfig-paths plugin to eliminate warning
  if (config.resolve) {
    config.resolve.tsconfigPaths = true;
  } else {
    config.resolve = { tsconfigPaths: true };
  }

  if (Array.isArray(config.plugins)) {
    // Recursively or flatly remove vite-tsconfig-paths
    config.plugins = config.plugins.filter((plugin: any) => {
      const name = plugin && typeof plugin === "object" ? plugin.name : "";
      return name !== "vite-tsconfig-paths";
    });
  }

  return config;
}
