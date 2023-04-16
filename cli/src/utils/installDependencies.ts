import chalk from "chalk";
import { exec } from "child_process";
import inquirer from "inquirer";
import ora from "ora";

export const isInstallDependencies = async () => {
  const { installDependencies } = await inquirer.prompt([
    {
      type: "confirm",
      name: "installDependencies",
      message: "Install dependencies?",
      default: true,
    },
  ]);
  if (installDependencies) {
    return true;
  }
  return false;
};

export const installDependencies = async (
  projectName: string,
  packageManager: string
) => {
  const spinner = ora("Installing dependencies...\n").start();
  exec(
    packageManager + " install",
    { cwd: process.cwd() + "/" + projectName },
    (error, stdout, stderr) => {
      if (error) {
        spinner.fail(
          chalk.red(
            "Failed to install dependencies, please install them manually  \n"
          )
        );
        console.log(error);
        console.log(chalk.blue("Next Steps:\n"));
        console.log(chalk.blue("\t cd " + projectName));
        console.log(chalk.blue("\t " + packageManager + " install"));
        console.log(chalk.blue("\t " + packageManager + " run dev"));
        return;
      }
      if (stderr) {
        spinner.fail(
          chalk.red(
            "Failed to install dependencies, please install them manually  \n"
          )
        );
        console.log(stderr);
        return;
      }
      spinner.succeed(chalk.green("Dependencies installed successfully\n"));
      console.log(chalk.blue("Next Steps:\n"));
      console.log(chalk.blue("\t cd " + projectName));
      console.log(chalk.blue("\t " + packageManager + " install"));
      console.log(chalk.blue("\t " + packageManager + " run dev"));
      console.log(chalk.blue("\n Happy Coding!\n"));
    }
  );
};
