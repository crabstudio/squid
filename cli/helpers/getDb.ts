import inquirer from "inquirer";

export const getDb = async () => {
  const { db } = await inquirer.prompt([
    {
      type: "list",
      name: "db",
      message: "What database would you like to use?",
      choices: ["Postgres", "MySQL", "MongoDB","none"],
    },
  ]);

  return db;
};
