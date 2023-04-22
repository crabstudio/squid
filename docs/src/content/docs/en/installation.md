---
title: "Installation"
description: "Getting started with Squid"
---

## Getting Started

To get started with Squid you can use the following command in your terminal:

```bash
npx create-squid-app@latest
```

On this command you will be prompted to enter the name of your app. You can also pass the name of your app as an argument to the command. For example:

```bash
? What is the name of your new project? (my-squid-project)
```

## Database

### Supported Databases

Squid comes with support for various database adapters. You can choose the database you want to use when you create a new app. The following databases are supported:

- [PostgreSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)
- [MongoDB](https://www.mongodb.com/)

### Configuration

After entering the name of your app you will be prompted to select the database you want to use.

```bash
? Select the database you want to use: (Use arrow keys)
❯ PostgreSQL
  MySQL
  MongoDB
```

Use the arrow keys to select the database you want to use.

## Continuous Integration

CI is a practice where you automatically build and test your code every time you push a commit to your repository. This helps you to catch bugs early and make sure your code is working as expected. This also helps you to make sure your code is following the coding standards you have set.

### Supported CI

Squid comes with support for various CI providers. You can choose the CI provider you want to use when you create a new app. The following CI providers are supported:

- [GitHub Actions](https://github.com/features/actions)
- [Travis CI](https://travis-ci.org/)
- [Circle CI](https://circleci.com/)
- [GitLab CI](https://docs.gitlab.com/ee/ci/)
- [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines)

### Configuration

After selecting the database you want to use you will be prompted to select the CI provider you want to use.

```bash
? Select CI
❯◯ Github Actions
 ◯ Travis CI
 ◯ Circle CI
 ◯ Gitlab CI
 ◯ bitbucket pipelines
```
Press the spacebar to select the CI provider you want to use. You can also use the arrow keys to select the CI provider you want to use. 
After that press enter to continue.

## Hosting

You will also need to host your app somewhere. Squid comes with support for various hosting providers. 

### Supported Hosting Providers

The following hosting providers are supported:

- [AWS](https://aws.amazon.com/)
- [Azure](https://azure.microsoft.com/en-us/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Google Cloud](https://cloud.google.com/)
- [Heroku](https://www.heroku.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)




