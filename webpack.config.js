const VueLoaderplugin = require('vue-loader/lib/plugin');//vue-loader/lib/plugin
const path = require('path')
const webpack = require("webpack")

// ソースマップの利用有無
const enabledSourceMap = true

module.exports = {
    mode: 'production', // or development  productionの場合はwebpack.optimization(最適化オプション)のプラグインが有効になってビルド結果が軽くなる
    entry: {
        'index': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dest'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devServer: {
        // webpackの扱わないファイル(HTMLや画像など)が入っているディレクトリ
        contentBase: path.resolve(__dirname, 'dest')
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                loader: 'vue-loader'
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                options:{
                    plugins: ["@babel/plugin-syntax-dynamic-import"]
                }
            },
            {
                test: /\.css/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss/, // 対象となるファイルの拡張子
                use: [
                    // linkタグに出力する機能
                    "style-loader",
                    // CSSをバンドルするための機能
                    {
                        loader: "css-loader",
                        options: {
                        // オプションでCSS内のurl()メソッドの取り込みを禁止する
                        url: false,
                        // ソースマップの利用有無
                        sourceMap: enabledSourceMap,
            
                        // 0 => no loaders (default);
                        // 1 => postcss-loader;
                        // 2 => postcss-loader, sass-loader
                        importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                        // ソースマップの利用有無
                        sourceMap: enabledSourceMap
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new VueLoaderplugin(),
        /** 以下、本番用にビルドする際にコメントアウトを外す */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
}