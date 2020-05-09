const path = require("path");
const config = require("./webpack.config");

config.output = Object.assign(config.output, {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    chunkFilename: "bundle.[name].js"
});

module.exports = config;
