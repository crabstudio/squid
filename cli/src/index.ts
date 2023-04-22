#!/usr/bin/env node

import { clear } from "console";
import * as helpers from "./helpers/index.js";
import * as utils from "./utils/index.js";
import scafoldProject from "./scafoldProject.js";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  clear();
  utils.welcome();
  await sleep(500);
  const projectName = (await helpers.getNewProjectName()) as string;
  const db = (await helpers.getDb()) as string;
  const ci = (await helpers.getCi()) as string[];
  const hosting = (await helpers.getHosting()) as string;
  const eslint = (await helpers.getLint()) as boolean;
  const prettier = (await helpers.getPrettier()) as boolean;
  (await helpers.Init(projectName)) as boolean;
  const packageManager = (await helpers.getPkgManager()) as string;
  const isInstallDependencies  = (await utils.isInstallDependencies()) as boolean;
  scafoldProject({
    projectName,
    ci,
    database: db,
    eslint,
    hosting,
    prettier,
  });
  if (isInstallDependencies) {
    utils.installDependencies(projectName, packageManager);
  } else {
  utils.nextSteps(projectName, packageManager, isInstallDependencies );
  }
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
