import inquirer from "inquirer";

export const getPrettier = async () => {
  const { prettier } = await inquirer.prompt([
    {
      type: "confirm",
      name: "prettier",
      message: "Would you like to use prettier?",
      default: true,
    },
  ]);

  return prettier;
};
