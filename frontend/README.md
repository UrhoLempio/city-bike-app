# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Solita 2024 Dev Academy Pre-Assignment - City Bike App
This project provides a UI and backend service for fetching data from a docker container where the PostgreSQL database is run. In the resulting web application we can see the full station list with links to single station views. In a single station view all departures and returns from and to the selected station can be viewed. In addition the requested total departures, returns, and average durations of the journeys are listed.

## Build instructions
### Backend
Run `npx tsc` in the backend folder to build the backend
Then run `node dist/app.js` to start it

### Frontend
In the frontend folder run `npm run dev` to build and start it

## Dependencies
Look up package.json.

## Project structure
The project is divided to backend and frontend.
### Backend
Located in `app.ts`.
With express get requests and sql queries we fetch the data from the docker container.
### Frontend
Structure is divided into components, pages, and api
In the components folder the different components seen on the page are defined using mui
In the pages folder the two different pages are defined using mui and a loading animation for responsiveness is implemented using .isFetching
