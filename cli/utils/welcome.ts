import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { getversion } from "./getpkg";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const version = getversion();

export async function welcome() {
  const title = chalkAnimation.rainbow(
    figlet.textSync("   SQUID   ", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  );
  title.start();
  console.log(chalk.blue("         Squid CLI v" + version + "\n"));
  await sleep(300);
}

