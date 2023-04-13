import inquirer from "inquirer";

export const getNewProjectName = async () => {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your new project?",
      default: "my-squid-project",
      validate: (input: string) => {
        if (!input.trim()) {
          return "Please enter a project name";
        }
        return true;
      },
    },
  ]);

  return projectName;
};
