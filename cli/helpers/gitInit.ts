import inquirer from "inquirer";
import chalk from "chalk";

export const Init = async () => {
  const { init } = await inquirer.prompt([
    {
      name: "init",
      type: "confirm",
      message: "Do you want to initialize a git repository?",
      default: true,
    },
  ]);
  if (init) {
    console.log(chalk.blue("Initializing git repository..."));
  } else {
    console.log(chalk.blue("Skipping git repository initialization..."));
  }
  return init;
};
