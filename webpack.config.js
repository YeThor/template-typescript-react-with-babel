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
  module: {
    // the way how to webpack handles files
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // how to resolve extensions in order. if the files have same name, webpack will resolve the file in order below
  resolve: {
    extensions: [".jsx", ".js"],
  },
  // webpack-dev-server module picks up these options
  devServer: {
    // static files gonna be served from here. Default is 'public' directory
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
};
