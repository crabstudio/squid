import fs from "fs";
import path from "path";
import ora from "ora";
import chalk from "chalk";
import { fileURLToPath } from "url";

const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
const PKG_ROOT = path.join(distPath, "../");

type Props = {
  projectName: string;
  database: string;
  hosting: string;
  ci: string[];
  eslint: boolean;
  prettier: boolean;
};

function scafoldProject({
  projectName,
  ci,
  database,
  eslint,
  hosting,
  prettier,
}: Props) {
  fs.mkdirSync(path.join(__dirname, projectName));
  console.log("\n");
  const spinner = ora("Creating a new project...").start();
  // createPackageJson(projectName);
  copyBase(projectName);
  copyRoutes(projectName);
  copyControllers(projectName);
  copyModels(projectName);
  copyServices(projectName);
  doextras(projectName, database, eslint, hosting, ci, prettier);
  spinner.succeed(chalk.greenBright("Successfully created a new project!\n"));
}

const copyBase = (projectName: string) => {
  const __TemplateDir = path.join(PKG_ROOT, "templates/base");
  const __ProjectDir = path.join(__dirname, projectName);
  fs.readdirSync(__TemplateDir).forEach((file) => {
    fs.copyFileSync(
      path.join(__TemplateDir, file),
      path.join(__ProjectDir, file)
    );
  });
};

const copyRoutes = (projectName: string) => {
  const __TemplateDir = path.join(PKG_ROOT, "templates/routes");
  const __ProjectDir = path.join(__dirname, projectName);
  fs.mkdirSync(path.join(__ProjectDir, "routes"));
  fs.readdirSync(__TemplateDir).forEach((file) => {
    fs.copyFileSync(
      path.join(__TemplateDir, file),
      path.join(__ProjectDir, "routes", file)
    );
  });
};

const copyControllers = (projectName: string) => {
  const __TemplateDir = path.join(PKG_ROOT, "templates/controllers");
  const __ProjectDir = path.join(__dirname, projectName);
  fs.mkdirSync(path.join(__ProjectDir, "controllers"));
  fs.readdirSync(__TemplateDir).forEach((file) => {
    fs.copyFileSync(
      path.join(__TemplateDir, file),
      path.join(__ProjectDir, "controllers", file)
    );
  });
};

const copyModels = (projectName: string) => {
  const __TemplateDir = path.join(PKG_ROOT, "templates/models");
  const __ProjectDir = path.join(__dirname, projectName);
  fs.mkdirSync(path.join(__ProjectDir, "models"));
  fs.readdirSync(__TemplateDir).forEach((file) => {
    fs.copyFileSync(
      path.join(__TemplateDir, file),
      path.join(__ProjectDir, "models", file)
    );
  });
};

const copyServices = (projectName: string) => {
  const __TemplateDir = path.join(PKG_ROOT, "templates/services");
  const __ProjectDir = path.join(__dirname, projectName);
  fs.mkdirSync(path.join(__ProjectDir, "services"));
  fs.readdirSync(__TemplateDir).forEach((file) => {
    fs.copyFileSync(
      path.join(__TemplateDir, file),
      path.join(__ProjectDir, "services", file)
    );
  });
};

// const createPackageJson = (projectName: string) => {
// overwrite package.json with the new project name
// const __TemplateDir = path.join(__dirname, "templates", "base");
// const __ProjectDir = path.join(__dirname, projectName);
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const packageJson = require(path.join(__TemplateDir, "package.json"));
// packageJson.name = projectName;
// fs.writeFileSync(
//   path.join(__ProjectDir, "package.json"),
//   JSON.stringify(packageJson, null, 2)
// );
// };

const doextras = async (
  projectName: string,
  database: string,
  eslint: boolean,
  hosting: string,
  ci: string[],
  prettier: boolean
) => {
  let selecteddb: string;
  const __TemplateDir = path.join(PKG_ROOT, "templates/extras");
  const __ProjectDir = path.join(__dirname, projectName);
  fs.mkdirSync(path.join(__dirname, projectName, "database"));
  if (database === "MongoDB") {
    selecteddb = "mongo.ts";
    fs.copyFileSync(
      path.join(__TemplateDir, "databases", selecteddb),
      path.join(__ProjectDir, "database", selecteddb)
    );
  } else if (database === "MySQL") {
    selecteddb = "mysql.ts";
    fs.copyFileSync(
      path.join(__TemplateDir, "databases", selecteddb),
      path.join(__ProjectDir, "database", selecteddb)
    );
  } else if (database === "Postgres") {
    selecteddb = "postgress.ts";
    fs.copyFileSync(
      path.join(__TemplateDir, "databases", selecteddb),
      path.join(__ProjectDir, "database", selecteddb)
    );
  } else {
    fs.rmdirSync(path.join(__ProjectDir, "database"));
    console.log("Skipping database setup...");
  }

  if (eslint) {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", ".eslintrc.yml"),
      path.join(__ProjectDir, ".eslintrc.yml")
    );
  }

  if (prettier) {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", ".prettierrc"),
      path.join(__ProjectDir, ".prettierrc")
    );
  }
  let i: number;
  let selectedci: string | undefined;
  for (i = 0; i < ci.length; i++) {
    selectedci = ci[i];
    if (selectedci === "Github Actions") {
      fs.mkdirSync(path.join(__ProjectDir, ".github"));
      fs.mkdirSync(path.join(__ProjectDir, ".github", "workflows"));
      fs.copyFileSync(
        path.join(__TemplateDir, "ci", ".github", "workflows", "build.yml"),
        path.join(__ProjectDir, ".github", "workflows", "build.yml")
      );
    } else if (selectedci === "Travis CI") {
      fs.copyFileSync(
        path.join(__TemplateDir, "ci", ".travis.yml"),
        path.join(__ProjectDir, ".travis.yml")
      );
    } else if (selectedci === "Circle CI") {
      fs.mkdirSync(path.join(__ProjectDir, ".circleci"));
      fs.copyFileSync(
        path.join(__TemplateDir, "ci", ".circleci", "config.yml"),
        path.join(__ProjectDir, ".circleci", "config.yml")
      );
    } else if (selectedci === "Gitlab CI") {
      fs.copyFileSync(
        path.join(__TemplateDir, "ci", ".gitlab-ci.yml"),
        path.join(__ProjectDir, ".gitlab-ci.yml")
      );
    } else if (selectedci === "Bitbucket Pipelines") {
      fs.copyFileSync(
        path.join(__TemplateDir, "ci", "bitbucket-pipelines.yml"),
        path.join(__ProjectDir, "bitbucket-pipelines.yml")
      );
    }
  }

  if (hosting === "Heroku") {
    fs.mkdirSync(path.join(__ProjectDir, "heroku"));
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "Procfile"),
      path.join(__ProjectDir, "Procfile")
    );
  } else if (hosting === "Vercel") {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "vercel.json"),
      path.join(__ProjectDir, "vercel.json")
    );
  } else if (hosting === "Netlify") {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "netlify.toml"),
      path.join(__ProjectDir, "netlify.toml")
    );
  } else if (hosting === "AWS") {
    fs.mkdirSync(path.join(__ProjectDir, "aws"));
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "aws", "serverless.yml"),
      path.join(__ProjectDir, "aws", "serverless.yml")
    );
  } else if (hosting === "Google Cloud") {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "Dockerfile"),
      path.join(__ProjectDir, "Dockerfile")
    );
  } else if (hosting === "Azure") {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "azure-pipelines.yml"),
      path.join(__ProjectDir, "azure-pipelines.yml")
    );
  } else if (hosting === "Digital Ocean") {
    fs.copyFileSync(
      path.join(__TemplateDir, "configs", "Dockerfile"),
      path.join(__ProjectDir, "Dockerfile")
    );
  } else {
    console.log("Skipping hosting setup...");
  }
};

export default scafoldProject;
