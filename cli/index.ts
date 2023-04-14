#!/usr/bin/env node

import chalk from "chalk";
import { clear } from "console";
import * as helpers from "./helpers";
import * as utils from "./utils";

const main = async () => {
  clear();
  utils.welcome();
  const projectName = (await helpers.getNewProjectName()) as string;
  const db = (await helpers.getDb()) as string;
  const ci = (await helpers.getCi()) as Array<{ name: string }>;
  const hosting = (await helpers.getHosting()) as string;
  const lint = (await helpers.getLint()) as Array<{ name: string }>;
  const prettier = (await helpers.getPrettier()) as boolean;
  (await helpers.Init(projectName)) as boolean;
  // const packageManager = (await getPkgMa packageManager.split(" ")[0];nager()) as string;
  const packageManager = "npm";
  const installDependencies = false;
  // scaffoldProject({
  //   projectName,
  //   database: db,
  //   ci,
  //   hosting,
  // });
  console.log(db, ci, hosting, lint, prettier);
  utils.nextSteps(projectName, packageManager, installDependencies);
};

process.on("SIGINT", () => {
  utils.exitHandler({ message: "Aborted by user...", exit: true });
});

process.on("exit", () => {
  utils.exitHandler({ cleanup: false, exit: false });
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  utils.exitHandler({ exit: true });
});

main()
  .then(() => {
    console.log(chalk.blue("\nHappy Coding!"));
  })
  .catch((err) => {
    console.error("Aborting installation...");
    if (err instanceof Error) {
      console.error(err);
    } else {
      console.error(
        "An unknown error has occurred. Please open an issue on github with the below:"
      );
      console.log(err);
    }
    process.exit(1);
  });
