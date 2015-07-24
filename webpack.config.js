
/*
    TODO: Scss Loader - move to css file
    http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
*/

module.exports = {

    entry: "./src/index.js",

    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },

    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    optional: ['es7.decorators']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },

    devServer: {
        contentBase: "./dist",
        noInfo: true,
        colors: true,
    }
};