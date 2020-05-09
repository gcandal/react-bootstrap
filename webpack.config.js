const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    target: "web",
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
                                        targets: {
                                            browsers: ["last 2 years"]
                                        }
                                    }
                                ],
                                "@babel/preset-react"
                            ],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                        regenerator: true
                                    }
                                ]
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
    }
};
