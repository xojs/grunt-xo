'use strict';
const xo = require('xo');

module.exports = grunt => {
	grunt.registerMultiTask('xo', 'Validate files with XO', function () {
		const cb = this.async();
		const opts = this.options({
			outputFile: false,
			quiet: false
		});

		if (this.filesSrc.length === 0) {
			cb();
			return;
		}

		xo.lintFiles(this.filesSrc).then(report => {
			let {results} = report;

			if (opts.quiet) {
				results = xo.getErrorResults(results);
			}

			const output = xo.getFormatter(opts.reporter)(results);

			if (opts.outputFile) {
				grunt.file.write(opts.outputFile, output);
			} else {
				console.log(output);
			}

			cb(report.errorCount === 0);
		}).catch(error => {
			grunt.warn(error);
			cb();
		});
	});
};
