import { execSync } from "child_process";

export default async function listPkgManagers() {
  const pkgManagers = ["npm", "yarn", "pnpm"];
  const installedManagers =  pkgManagers.filter((manager) => {
    try {
      execSync(`${manager} --version`, { stdio: "ignore" });
      return true;
    } catch (e) {
      return false;
    }
  });
  return installedManagers as string[];
}
