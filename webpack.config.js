const path = require('path');

module.exports = {
    entry: [path.resolve(__dirname, 'hiddensource.js')],
    mode:"production",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'hiddensource_compiled.js',
        library: {
            name: 'Kruncher',
            type: 'var'
        }
    },
};