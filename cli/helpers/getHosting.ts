import inquirer from "inquirer";

export const getHosting = async () => {
  const { hosting } = await inquirer.prompt([
    {
      type: "list",
      name: "hosting",
      message: "Select Hosting",
      choices: [
        "Heroku",
        "Vercel",
        "AWS",
        "Digital Ocean",
        "Google Cloud",
        "Azure",
      ],
    },
  ]);
  return hosting;
};
