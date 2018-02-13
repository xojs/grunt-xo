# grunt-xo [![Build Status](https://travis-ci.org/xojs/grunt-xo.svg?branch=master)](https://travis-ci.org/xojs/grunt-xo)

> Validate files with [XO](https://github.com/xojs/xo)

![](screenshot.png)

Please consider if you really need grunt for this. Using a [npm run script](https://github.com/xojs/xo#workflow) would be better.

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

XO [options](https://github.com/xojs/xo#config) can be specified in package.json.

In the Gruntfile you can specify the following options:

##### reporter

Type: `string`<br>
Default: [`eslint-formatter-pretty`](https://github.com/sindresorhus/eslint-formatter-pretty)

Any [ESLint reporter](http://eslint.org/docs/user-guide/command-line-interface#f---format).

### outputFile

Type: `string`

Output the report to a file.

### quiet

Type: `boolean`<br>
Default: `false`

Report errors only.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
