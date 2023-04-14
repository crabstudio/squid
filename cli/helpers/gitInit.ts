import inquirer from "inquirer";
import chalk from "chalk";
import { exec } from "child_process";
import path from "path";

export const Init = async (name: string) => {
  const { init } = await inquirer.prompt([
    {
      name: "init",
      type: "confirm",
      message: "Do you want to initialize a git repository?",
      default: true,
    },
  ]);
  if (init) {
    exec(`cd ${name} `);
    if (!isGitInstalled()) {
      console.log(chalk.red("Git is not installed on your system!"));
      return false;
    }
    if (isGitrepo()) {
      console.log(chalk.red("This is already a git repository!"));
      return false;
    }
    if (!isProjectdir(name)) {
      console.log(chalk.blue("Initializing git repository..."));
      exec(`cd ${name}`);
      exec("git init");
      exec("git add .");
      exec("git commit -m 'bootsraped with create-squid-app'");
    }
  } else {
    console.log(chalk.blue("Skipping git repository initialization..."));
  }
  return init;
};

const isGitInstalled = () => {
  try {
    exec("git --version");
    return true;
  } catch (error) {
    return false;
  }
};

const isGitrepo = () => {
  try {
    exec("git rev-parse --is-inside-work-tree");
    return true;
  } catch (error) {
    return false;
  }
};

const isProjectdir = (projectName: string) => {
  try {
    const name = projectName;
    const currentDir = process.cwd();
    const projectDir = path.join(currentDir, name);
    if (projectDir !== currentDir) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
