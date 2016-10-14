var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
		vendors: ['react','redux'],
        // app:path.join(__dirname, 'src'),
        demo1:"./src/demo1",
        demo2:"./src/demo2",
        demo3:"./src/demo3",
        
    },
    output: {
		publicPath: "/dist/",
        path:path.join(__dirname, 'dist'),
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
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
	devServer:{
		inline:true,
		hot:true
	}
};
