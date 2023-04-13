import inquirer from "inquirer";

export const getHosting = async () => {
  const { hosting } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "hosting",
      message: "Select Hosting",
      choices: [
        "Heroku",
        "Vercel",
        "Netlify",
        "AWS",
        "Digital Ocean",
        "Google Cloud",
        "Azure",
      ],
    },
  ]);
  return hosting;
};
