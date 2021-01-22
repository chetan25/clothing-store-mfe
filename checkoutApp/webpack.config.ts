/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path';
import * as webpack from 'webpack';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dotenv = require('dotenv').config({path: __dirname + '/.env'});

const deps = require("./package.json").dependencies;

 type WebPackOption = webpack.Configuration | webpack.WebpackOptionsNormalized ;
const config: WebPackOption = {
    entry: { index: path.resolve(__dirname, "src", "index.tsx") },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: 'http://localhost:4003/'
    },
    devtool: 'source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /bootstrap\.tsx$/,
                // uses to make the dep from bootstrap load not as eager and waits for the dep to load first
                loader: "bundle-loader",
                options: {
                    lazy: true,
                },
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: "file-loader"
                  },
                ],
              }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from:'public/images',to:'images'} 
              ],
        }), 
        new ModuleFederationPlugin({
            name: "CheckoutApp",
            filename: "remoteCheckout.js",
            remotes: {
                Shell: 'Shell@http://localhost:4000/remoteEntry.js'
            },
            exposes: {
                "./CheckoutPage": "./src/checkout/checkout.tsx",
            },
            // we need to make the shared React and React-dom registered as singleton and loaded from shell
            shared: [
                {
                    ...deps,
                    react: {
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "Top Clothing",
            inject: true,
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new webpack.DefinePlugin({
            "process.env":  JSON.stringify(dotenv.parsed)
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        usedExports: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            react: path.resolve(__dirname, 'node_modules', 'react'),
            'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // contentBase: './',
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
        hot: true,
        port: 4003,
        open: true,
        inline: true,
        watchContentBase: true,
    },
};

export default config;
