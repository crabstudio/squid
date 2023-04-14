import inquirer from "inquirer";
import listPkgManagers from "../utils/listPkgManagers";

export const getPkgManager = () => {
  const packageManagers = listPkgManagers();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { packageManager }: any = inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Which package manager do you want to use?",
      choices: packageManagers,
      default: packageManagers[0],
    },
  ]);
  return packageManager;
};
