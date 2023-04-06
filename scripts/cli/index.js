#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-unused-vars */

import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { clear } from "console";
import chalk from "chalk";
import gitClone from "git-clone";
import { exec } from "child_process";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const title = chalkAnimation.rainbow(
    figlet.textSync("SQUID", {
      font: "Cybermedium",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  );
  await sleep(500);
  title.stop();

  console.log(`
${gradient.instagram("Welcome to SQUID CLI")}`);
  const projectName = await getProjectName();
  const database = await getDatabase();
  const ciTools = await getCItools();
  const hosting = await getHosting();
  const husky = await ishusky();
  const packageManager = await getPackageManager();
  const install = await isInstallDependency();
  const gitSpinner = createSpinner("Cloning project from Github...").start();
  gitClone(
    "https://github.com/crabstudio/squid.git",
    projectName,
    null,
    function () {
      gitSpinner.clear();
      gitSpinner.stop();
    }
  );
  if (install) {
    if (packageManager === "npm") {
      exec(`cd ${projectName} && npm install`, (err, stdout) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(stdout);
      });
    } else {
      exec(`cd ${projectName} && yarn`, (err, stdout) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(stdout);
      });
    }
  }
  exec(` cd ..`);

  console.log(gradient.instagram("Project created successfully!\n"));
  console.log(
    chalk.blueBright("To run the project, run the following commands:\n")
  );
  console.log(chalk.cyan("cd"), projectName);
  if (install) {
    console.log(chalk.cyan("npm install"));
  }
  console.log(chalk.cyan("npm run"), chalk.green("dev\n"));
  console.log(chalk.blueBright("Happy coding!\n"));
}

async function getProjectName() {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
      default: "my-app",
    },
  ]);
  return projectName;
}

async function getDatabase() {
  const { database } = await inquirer.prompt([
    {
      type: "list",
      name: "database",
      message: "Select database:",
      choices: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    },
  ]);
  return database;
}

async function getCItools() {
  const { ciProvider } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "ciProvider",
      message: "Select CI tools:",
      choices: ["TravisCI"],
    },
  ]);
  return ciProvider;
}

async function getHosting() {
  const { hosting } = await inquirer.prompt([
    {
      type: "list",
      name: "hosting",
      message: "Select hosting:",
      choices: ["Heroku", "Vercel", "DigitalOcean"],
    },
  ]);
  return hosting;
}

async function ishusky() {
  const { husky } = await inquirer.prompt([
    {
      type: "confirm",
      name: "husky",
      message: "Install husky?",
    },
  ]);
  return husky;
}

async function getPackageManager() {
  const { packageManager } = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Select package manager:",
      choices: ["npm", "yarn"],
    },
  ]);
  return packageManager;
}

async function isInstallDependency() {
  const { install } = await inquirer.prompt([
    {
      type: "confirm",
      name: "install",
      message: "Install dependencies?",
    },
  ]);
  return install;
}

clear();
await main();
