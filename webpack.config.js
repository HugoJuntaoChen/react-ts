const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve, join } = require('path')

module.exports = {
    mode: 'production',
    entry: resolve(__dirname, 'src/index.ts'),
    output: {
        filename: 'index.js',
        clean: true,
        library: {
            name: 'NpmName',
            type: 'umd',
        },
    },
    devServer: {
        port: 8888,
        static: {
            directory: join(__dirname, 'public'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: resolve(__dirname, './tsconfig.json'),
                    },
                },
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-ts',
            template: './public/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            // chunks: 'all'
            minSize: 1000 * 1024,
        }
    }
}
