import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import fs from "fs";
import path from "path";
// import fetch from "node-fetch";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const __dirname = path.resolve();


const getpkg = async () => {
  const pkg = await fs.promises.readFile(
    path.join(__dirname, "package.json"),
    "utf-8"
  );
  return JSON.parse(pkg);
};


const pkgversion = async () => {
  const pkg = await getpkg();
  return pkg.version;
}

const pkgv = await pkgversion();

// const getLatest = async () => {
//   const data = await fetch("https://registry.npmjs.org/create-squid-app");
//   const json = await data.json();
//   return json["dist-tags"].latest;
// };

// const check= async () => {
//   const latest = await getLatest();
//   if (pkgv !== latest) {
//     console.log(chalk.red("Update available: " + latest));
//     console.log(chalk.red("please use npx create-squid-app@latest to use the latest version"));
//   }
// }

export async function welcome() {
  const title = chalkAnimation.rainbow(
    figlet.textSync("   SQUID   ", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  );
  title.start();
  console.log(chalk.blue("            Squid CLI "));
  console.log(chalk.blue("         Version: " + pkgv + "\n"));
  // await check();
  await sleep(500);
}


