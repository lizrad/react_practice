const path = require('path');
module.exports = {
    entry: ['./app.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'], plugins:['@babel/plugin-proposal-class-properties'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            //第二個loader編譯ES6
            { test: /.css$/, exclude: /node_modules/, use: ['style-loader','css-loader'] }
        ]
    },
    devServer:{
        port:8082
    }

};