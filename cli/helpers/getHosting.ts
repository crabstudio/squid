import inquirer from "inquirer";

export const getHosting = async () => {
  const { hosting } = await inquirer.prompt([
    {
      type: "list",
      name: "hosting",
      message: "Select Hosting",
      choices: [
        "AWS",
        "Azure",
        "Digital Ocean",
        "Google Cloud",
        "Heroku",
        "Netlify",
        "Vercel",
      ],
    },
  ]);
  return hosting;
};
