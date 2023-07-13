import type { StorybookConfig } from '@storybook/react-webpack5'
const path = require('path')
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
					loader: require.resolve('ts-loader'),
					options: {
						reportFiles: ['../**/src/**/*.{ts,tsx}'],
					},
				},
			],
		})
		config.module.rules.push({
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
		})
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src'),
		}
		config.resolve.extensions.push('.ts', '.tsx')
		return config
	},
}
export default config
