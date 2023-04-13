#!/usr/bin/env node

import { clear } from "console";
import { getNewProjectName } from "./helpers/getName";
import { getDb } from "./helpers/getDb";
import exitHandler from "./utils/errhandler";
import { getCi } from "./helpers/addCi";
import { getHosting } from "./helpers/getHosting";
import welcome from "./utils/welcome";
import { Init } from "./helpers/gitInit";

const main = async () => {
  const projectName = await getNewProjectName();
  const db = await getDb();
  const ci = await getCi();
  const hosting = await getHosting();
  const init = await Init();
  console.log(projectName, db, ci, hosting, init);
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

clear();
welcome();
main();
