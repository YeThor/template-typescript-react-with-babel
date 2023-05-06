# template-typescript-react-with-babel

The basic setup template for TypeScript & React with Webpack and Babel (feat. ESLint, Prettier)

- How to write code? - **TypeScript, React**
- How to bundle code? - **Webpack**
  - Support for HMR (Hot module reloading)
- How to transform the latest JavaScript syntax for old browsers? - **Babel**
  - Instead of using `ts-loader`, this template uses Babel to transform ES6 syntax
  - Check type with `tsc` before compiling(transpiling) code
    - Modify `tsconfig.json` if you want to change type-checking rules

## What modules are installed?

- `react` : JavaScript library for building user interface
- `react-dom` : Package that provides DOM-specific methods when you use React
- `@babel/core` : The core library of Babel
  - Babel is the compiler that transforms the latest(ex. ES6) JavaScript syntax for old browsers
- `babel-loader` : Babel loader for Webpack. If you want to use Babel with Webpack, this loader is necessary
- `@babel/preset-react` : Preset for using React and Babel together. It contains plugins below (there are two more plugins in development environment, but the description would be omitted here)

  - `@babel/plugin-syntax-jsx` : This plugin enables Babel to parse JSX syntax. It doesn't transform the syntax by itself. Transforming the codes in detail would be handled by `@babel/plugin-transform-react-jsx`
  - `@babel/plugin-transform-react-jsx` : The Plugin that transforms JSX syntax into React function calls (ex. jsxs, React.createElement, ...)
  - `@babel/plugin-transform-react-display-name` : It adds `displayName` property when `React.createClass` is called
    - ```js
      var bar = createReactClass({
        displayName: 'bar',
      });
      ```

- `@babel/preset-env` : The preset that transforms the latest JavaScript syntax to compatiable syntax for old browsers
  - It doesn't support any JavaScript syntax proposals less than Stage 3 cause no browsers implement the feature at that stage. If the option `shippedProposals` is turned on, Stage 3 proposals that some browsers have already implemented will be included
  - If the option `useBuiltIns` is `usage` or `entry`, the plugin adds direct references to `core-js` modules
  - `@babel/polyfill` was deprecated since version `7.4.0`, so it is recommended to add `core-js` modules directly using the option called `corejs`
  - If your project is a library and you want to avoid the global namespace pollution, consider to use `@babel/plugin-transform-runtime` instead of `@babel/preset-env`'s `core-js` option.
- `core-js` : The library that includes polyfills for the latest ECMAScript syntax. You can load only required features or use it without global namespace pollution
- `@babel/preset-typescript` : This preset is recommended when you use Babel and TypeScript together. It contains the plugin below

  - `@babel/plugin-transform-typescript`: Supports TypeScript only syntax. It means that TS only syntax like type definition would be transformed (ex. The type definition would be removed) by this plugin, but the syntax that both JavasScript and TypeScript supports is up to the plugin like `preset-env`

- `webpack` : The static module bundler for modern JavaScript application using dependency graph
- `webpack-cli` : The set of commands that helps you to configure webpack in CLI (Command Line Interface)
  - You can use commands like `webpack serve`, `webpack build`, `webpack --mode=production`, etc.
- `webpack-dev-server` : The development server that provides HMR (Hot Module Reloading)
  - It uses `webpack-dev-middleware` internally, so the files are handled in memory. No files are written to disk
- `eslint`: A linting tool that helps finding and fixing problems with your JavaScript code
- `eslint-config-react-app` : The ESLint configuration used by CRA (`create-react-app`). The AirBnB style configuration used to be popular in the past, but it was [removed](https://github.com/eslint/create-config/releases/tag/v0.3.1) from `@eslint/config` since August 2022 because it didn't support TypeScript officially.
- `prettier` : The code formatter that keeps code style consistent

  - To use auto formatting in Visual Studio Code, You have to install the extensions(ESLint, Prettier) and configure IDE settings like this
  - ```js
    // .vscode/settings.json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true // ESLint auto format on save
      },
      "editor.formatOnSave": true, // Prettier auto format on save
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    ```

- `eslint-config-prettier` : It prevents the conflict between ESLint and Prettier. It is achieved by turning off all rules that might conflict with Prettier

## LICENSE

[MIT License](./LICENSE)
