//webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.module\.less$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: true,
								localIdentName: 'demo_[name]_[local]_[hash:base64:8]',
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							// 如果没有options这个选项将会报错 No PostCSS Config found
							postcssOptions: {
								ident: 'postcss',
								plugins: () => [
									require('autoprefixer')(), //CSS浏览器兼容
								],
							},
						},
					},
					{
						loader: 'less-loader',
					},
				],
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.tsx', '.js'],
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './public/index.html'),
		}),
	],
}
