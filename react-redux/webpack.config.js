var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app:path.join(__dirname, 'src'),
        vendors: ['react','redux']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
	// 新添加的module属性
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                }
            }
        ]
    },
    plugins: [
		// 将公共部分抽成
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
