const argv = require('yargs').argv;
const paths = require('./build/paths');


let isProduction = process.env.NODE_ENV === 'production';

if (argv.production) {
    isProduction = true;
}


module.exports = {
    entry: './src/' + paths.packageName,

    output: {
        filename: paths.packageName + '.js',
        libraryTarget: 'umd',
        path: __dirname + '/' + paths.output
    },

    // Use --production to optimize output.
    mode: isProduction ? 'production' : 'development',

    // Add babel (see .babelrc for settings)
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /.js?$/
            }
        ]
    },

    // Use --sourcemap to generate sourcemap.
    devtool: argv.sourcemap ? 'sourcemap' : false,
};
