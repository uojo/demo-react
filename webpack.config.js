var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        demo1:[
			"webpack/hot/dev-server",
			"./src/demo1/index"
		]
        
    },
    output: {
		publicPath: "dist/",
        // path:path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
	// 新添加的module属性
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets:['react','es2015']
                }
            },
			{
				test: /\.css$/,
				loader: 'style!css'
			}
        ]
    },
    plugins: [
		// 将公共部分抽成
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
		new webpack.HotModuleReplacementPlugin()
    ],
	devServer:{
		inline:true,
		hot:true
	}
};
