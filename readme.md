# grunt-xo [![Build Status](https://travis-ci.org/sindresorhus/grunt-xo.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-xo)

> Validate files with [XO](https://github.com/sindresorhus/xo)

![](screenshot.png)

Please consider if you really need grunt for this. Using a [npm run script](https://github.com/sindresorhus/xo#workflow) would be better.

*Issues regarding rules should be reported on the ESLint [issue tracker](https://github.com/eslint/eslint/issues) as it's the actual linter.*


## Install

```
$ npm install --save-dev grunt-xo
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	xo: {
		options: {
			quiet: true
		},
		target: ['file.js']
	}
});

grunt.registerTask('default', ['xo']);
```


## Options

XO [options](https://github.com/sindresorhus/xo#config) can be specified in `package.json`.

In the Gruntfile you can specify the following options:

### outputFile

Type: `string`  
Default: `''`

Output the report to a file.


### quiet

Type: `boolean`  
Default: `false`

Report errors only.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
