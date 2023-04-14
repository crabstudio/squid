import chalk from "chalk";

export const nextSteps = (
  projectName: string,
  packageManager: string,
  isInstallDependencies: boolean
) => {
  console.log(chalk.blue("Next Steps:\n"));
  console.log(chalk.blue("\t cd " + projectName));
  if (isInstallDependencies) {
    console.log(chalk.blue("\t " + packageManager + " install"));
  }
  console.log(chalk.blue("\t " + packageManager + " run dev"));
};
