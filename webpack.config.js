const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
    entry: "./index.tsx",
    target: "web",
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "React Bootstrap",
            template: "./index.html",
            cache: false,
            inject: "head",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: false,
                preserveLineBreaks: false
            }
        }),
        new ScriptExtHtmlWebpackPlugin({
            module: /.js$/
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": process.env.NODE_ENV
        })
    ],
    devServer: {
        compress: false,
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
        stats: "minimal",
        hot: true,
        historyApiFallback: true,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns: "usage",
                                        corejs: 3,
                                        targets: {
                                            esmodules: true
                                        }
                                    }
                                ],
                                "@babel/preset-react"
                            ],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                                "styled-components"
                            ]
                        }
                    },
                    {
                        loader: "eslint-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: "file-loader",
                options: {
                    name: (_path, _query) => {
                        if (process.env.NODE_ENV === "development") {
                            return "[path][name].[ext]?[hash]";
                        }
                        return "[contenthash].[ext]";
                    },
                    esModule: false
                }
            },
            {
                test: /\.(svga)$/,
                loader: "file-loader",
                options: {
                    name: (_path, _query) => {
                        if (process.env.NODE_ENV === "development") {
                            return "[path][name].svg?[hash]";
                        }
                        return "[contenthash].svg";
                    },
                    esModule: false
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    esModule: false
                }
            }
        ]
    },
    devtool:
        process.env.NODE_ENV === "production"
            ? "source-map"
            : "inline-source-map"
};
