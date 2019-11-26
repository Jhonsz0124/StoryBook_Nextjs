const path = require('path');
const tailwindcss = require("tailwindcss");

module.exports = ({ config, mode }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]],
		},
	});

	/* PostCSS Support */
	config.module.rules.push({
		test: /\.css$/,
		loaders: [
			// Loader for webpack to process CSS with PostCSS
			{
				loader: 'postcss-loader',
				options: {
					sourceMap: true,
					config: {
						path: './.storybook/',
					},
				},
			},
		],

		include: path.resolve(__dirname, '../'),
	});

	config.resolve.modules = [
		...(config.resolve.modules || []),
		path.resolve('./'),
	];

	config.resolve.extensions.push('.js', '.ts', '.tsx', '.css');
	return config;
};