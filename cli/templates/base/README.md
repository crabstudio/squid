# CREATE SQUID APP

This template was bootstrapped with [Create Squid App](https://github.com/crabstudio/squid).

## Getting Started

First, run the development server:

```bash
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
```

_make sure you have ts-node installed globally_

Hit the following endpoint to see the result:

```bash
curl http://localhost:8080/
```

To build the project, run:

```bash
$ npm run build
# or
$ yarn build
# or
$ pnpm build
```

This will create a `dist` folder with the compiled project.

To start the project in production mode, run:

```bash
$ npm run start
# or
$ yarn start
# or
$ pnpm start
```

### Environment Variables (for only default template)

- `PORT` - Port to run the server on
- `NODE_ENV` - Environment to run the server on
- `CORS_ORIGIN` - CORS origin to allow
- `HOST` - Host to run the server on

## Project Structure

```
├── .git
├── .vscode
├── public
│   └── squid.png
├── db
│   └── your-db-config.ts
├── helpers
│   ├── helper.ts
│   ├── ...
│   └── ...
├── models
│   ├── schema.ts
│   ├── ...
│   └── ...
├── routes
│   ├── hello.route.ts
│   ├── ...
│   └── ...
├── controllers
│   ├── your-controller.ts
│   ├── ...
│   └── ...
├── index.ts
├── index.d.ts
├── .nvmrc
├── package.json
├── pnpm-lock.yml
└── readme.md
```

## Learn More

To learn more about the project, please visit the [documentation](https://github.com/crabstudio/squid).
