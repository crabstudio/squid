import inquirer from "inquirer";

export const getLint = async () => {
  const { lint } = await inquirer.prompt([
    {
      type: "confirm",
      name: "lint",
      message: "Would you like to use eslint?",
      default: true,
    },
  ]);

  return lint;
};
