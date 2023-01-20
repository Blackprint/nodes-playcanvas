let blackprint = require('@blackprint/cli-tools').esbuildPlugin;

module.exports = {
	// Your unique package name, will be the prefix on the Blackprint editor
	name: "PlayCanvas",
	description: "Blackprint nodes for PlayCanvas",

	// If this set to true, the compiler will skip this config/module
	disabled: false,

	// Uncomment this if you want to copy /dist/... files to current folder
	// Especially if you want to publish it to NPM Registry
	// hardlinkTo: "./dist",

	// Unique prefix for .html or .sf template
	// Please use format 'BPIC/PlayCanvas'
	templatePrefix: "BPIC/PlayCanvas",

	// Optional: Add header to every combined file
	header: "/* MIT Licensed */",

	// Optional: Extract registerNode's JSDocs
	bpDocs: '@cwd/dist/nodes-playcanvas.docs.json',

	hotReload: {
		sf: true,
		ts: true,
	},

	// (Optional)
	// This extension can contain html, scss, and js
	// But only use this if you only develop for browser API
	sf:{
		file: '@cwd/dist/nodes-playcanvas.sf', // will have sf.css and sf.mjs

		// Use `async-mjs` if we want to use `await imports.task()` to avoid waiting this module
		wrapped: 'async-mjs', // Wrap the entire .js in async IIFE to .mjs file

		combine:[ // Relative to this config's directory
			'src/_init.sf', // Rule order/index may have different priority
			'src/**/*.sf',
		],
	},

	// (Required), `ts` config can't be used with `js` config
	ts: {
		// @cwd = directory where you start the Node.js
		file: '@cwd/dist/nodes-playcanvas.mjs',

		// Directory below is relative to this config's directory
		entry: '_entry.ts',
		watch: ['src/**/*.ts'],
		scanDocs: ['src/**/*.ts'],
		esbuild: {
			bundle: true,
			treeShaking: true,
			format: 'esm',
			// logLevel: 'debug',
			plugins: [
				require('esbuild-plugin-import-glob').default(),
				blackprint.init(()=> module.exports),

				// The target engine can still load from node_modules if
				// 'Blackprint.Environment.loadFromURL' was set to false
				blackprint.preferCDN('src', {
					// module_name: bundled module URL
					'playcanvas': {
						globalVar: 'PlayCanvas', // use global object if exist
						url: 'https://cdn.jsdelivr.net/npm/playcanvas@1.x/build/playcanvas.mjs',
					},
				})
			]
		},
	}
}