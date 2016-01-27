var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
		'webpack-dev-server/client?http://localhost:3000',//资源服务器地址
		'webpack/hot/only-dev-server',
		"./src/index.js"
		],
    output: {
        // path: path.join(__dirname,'build'),
        // filename: "bundle.js",
		// publicPath:'build'
		path: __dirname+'/build/',
        filename: "bundle.js",
		publicPath:'/build/'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: "style!css!sass" },
			{
				test:/\.jsx?$/ ,loaders:['react-hot'] ,exclude :/node_modules/
			},
			{
			  test: /\.jsx?$/,
			  exclude: /(node_modules|bower_components)/,
			  loader: 'babel', // 'babel-loader' is also a legal name to reference
			  query: {
				presets: ['react', 'es2015']
			  }
			},
			{ test: /\.woff\d?$/, loader: "file" },
			{ test: /\.ttf$/, loader: "file" },
			{ test: /\.eot$/, loader: "file" },
			{ test: /\.svg$/, loader: "file" },
        ]
    },
	plugins:[
			new webpack.ProvidePlugin({
				$:'jquery',
				_:'lodash',
				jQuery:'jquery'
			}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
		
	]
	
};