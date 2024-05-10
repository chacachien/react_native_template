module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'@components': './src/components',
						'@config': './src/config',
						'@screens': './src/screens',
						'@utils': './src/utils',
						'@assets': './src/assets',
						'@hooks': './src/hooks',
						'@services': './src/services',
						'@store': './src/store',
					},
				},
			],
		],
	}
}
