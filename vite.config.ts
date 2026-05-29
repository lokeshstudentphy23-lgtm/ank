import { defineConfig } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  // Dynamically disable Cloudflare plugins when building in a Vercel environment
  cloudflare: process.env.VERCEL ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
});