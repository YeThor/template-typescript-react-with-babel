const path = require("path");

module.exports = {
  mode: "production",
  // webpack starts building the dependecy graph from here..
  entry: "./src/index.js",
  // the bundled files come here.
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  // webpack-dev-server module picks up these options
  devServer: {
    // static files gonna be served from here. Default is 'public' directory
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
};
