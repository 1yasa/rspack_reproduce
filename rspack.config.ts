import { resolve } from 'path'

import { defineConfig } from '@rspack/cli'
import { HtmlRspackPlugin } from '@rspack/core'
import ReactRefreshPlugin from '@rspack/plugin-react-refresh'

const is_prod = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
	entry: {
		main: './src/index.tsx'
	},
	output: {
		clean: is_prod
	},
	watchOptions: {
		ignored: /node_modules/
	},
	resolve: {
		tsConfigPath: resolve(__dirname, 'tsconfig.json')
	},
	devServer: {
		port: 8090,
		compress: false
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxSize: 30000
		}
	},
	experiments: {
		topLevelAwait: true,
		// outputModule: !is_prod, // can`t use when rspack > 0.4.0
		rspackFuture: {
			newResolver: true,
			// newTreeshaking: true,
			disableTransformByDefault: true
		}
	},
	plugins: [
		new HtmlRspackPlugin({
			template: './public/index.html'
		}),
		!is_prod && new ReactRefreshPlugin()
	].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				// type: 'javascript/auto',
				use: {
					loader: 'builtin:swc-loader',
					options: {
						sourceMaps: !is_prod,
						jsc: {
							parser: {
								syntax: 'typescript',
								tsx: true,
								dynamicImport: true,
								exportDefaultFrom: true,
								exportNamespaceFrom: true,
								decorators: true
							},
							transform: {
								legacyDecorator: true,
								decoratorMetadata: true,
								react: {
									development: !is_prod,
									refresh: !is_prod,
									runtime: 'automatic',
									useBuiltins: true
								}
							}
						}
					}
				}
			}
		]
	}
})
