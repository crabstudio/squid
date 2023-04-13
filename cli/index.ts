#!/usr/bin/env node

import { clear } from "console";
import { exec } from "child_process";
import { getNewProjectName } from "./helpers/getName";
import { getDb } from "./helpers/getDb";
import exitHandler from "./utils/errhandler";
import { getCi } from "./helpers/addCi";
import { getHosting } from "./helpers/getHosting";
import welcome from "./utils/welcome";
import { Init } from "./helpers/gitInit";

const main = async () => {
  clear();
  welcome();
  const projectName = await getNewProjectName();
  const db = await getDb();
  const ci = await getCi();
  const hosting = await getHosting();
  const init = await Init(projectName);
  await createProject(projectName);
};

const createProject = async (projectName: string) => {
  // exec(`mkdir ${projectName}`);
  // exec(`cd ${projectName}`);
  // exec(`npm init -y`);
  // exec(`git clone https://github.com/crabstudio/squid.git ${projectName}`);
  // exec(`cd ${projectName}`);
  // exec(`rm -rf .git`);
};

process.on("SIGINT", () => {
  exitHandler({ message: "Aborted by user...", exit: true });
});

process.on("exit", () => {
  exitHandler({ cleanup: true, exit: true });
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  exitHandler({ exit: true });
});

main().catch((err) => {
  console.error("something went wrong\n" + err);
});
