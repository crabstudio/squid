import inquirer from "inquirer";
import fs from "fs";
import path from "path";

const validateDir = (dir: string) => {
  if (fs.existsSync(dir)) {
    return "Directory already exists";
  }
  return true;
};

export const getNewProjectName = async () => {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your new project?",
      default: "my-squid-project",
      validate: (input: string) => {
        validateDir(path.join(process.cwd(), input));
        if (!input.trim()) {
          return "Please enter a project name";
        }
        return true;
      },
    },
  ]);

  return projectName;
};
