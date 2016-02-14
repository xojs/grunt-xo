'use strict';
var xo = require('xo');

module.exports = function (grunt) {
	grunt.registerMultiTask('xo', 'Validate files with XO', function () {
		var cb = this.async();
		var opts = this.options({
			reporter: 'stylish',
			outputFile: false,
			quiet: false
		});

		if (this.filesSrc.length === 0) {
			cb();
			return;
		}

		xo.lintFiles(this.filesSrc).then(function (report) {
			var results = report.results;

			if (opts.quiet) {
				results = xo.getErrorResults(results);
			}

			var output = xo.getFormatter(opts.reporter)(results);

			if (opts.outputFile) {
				grunt.file.write(opts.outputFile, output);
			} else {
				console.log(output);
			}

			cb(report.errorCount === 0);
		}).catch(function (err) {
			grunt.warn(err);
			cb();
		});
	});
};
