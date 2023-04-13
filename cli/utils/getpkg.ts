import fs from "fs";
import path from "path";

export const getpkg = () => {
  const __dirname = path.resolve();
  const pkg = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8")
  );
  return pkg;
};

export const getversion = () => {
  const pkg = getpkg();
  return pkg.version;
};
