import { defineConfig } from "tsup";

const isDev = process.env.NODE_ENV === "development";
// console.log("isDev", isDev);

export default defineConfig({
  clean: !isDev,
  dts: !isDev,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: !isDev,
  metafile: !isDev,
  sourcemap: true,
  target: "esnext",
  outDir: "dist",
  onSuccess: isDev ? "node dist/index.js" : undefined,
});