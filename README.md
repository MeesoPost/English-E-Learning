## Development

This project uses NextJS as a framework for rendering the templates and creating web components.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### NodeJS and pnpm

We use NodeJS for installing and managing our javascript packages. Check in your terminal with `node -v` if you have NodeJS installed. Otherwise install node [https://nodejs.org/en](https://nodejs.org/en) before you start.

NodeJS comes with `npm`. We will not use `npm` to install our packages, but `pnpm` instead. This is so we can ensure super stable package resolution. To get started make sure you have `pnpm` installed by checking with `pnpm -v`. If you do not see a version use `npm install -g pnpm` to install `pnpm` globally on your machine.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                                                  |
| :----------------- | :---------------------------------------------------------------------- |
| `pnpm install`     | Installs dependencies                                                   |
| `pnpm run dev`     | Starts local dev server at `localhost:3000`                             |                            |
| `npm run lint`     | Run the linting scripts to ensure your code meets the project standards |
| `npm run lint-fix` | Run the linting scripts and automatically fix all possible errors       |
