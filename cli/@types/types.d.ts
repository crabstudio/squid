type scafoldProject = {
  projectName: string;
  database: string;
  ci: ci[];
  hosting: string;
};

type ci = {
  name: string;
};
