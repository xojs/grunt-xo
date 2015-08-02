/* eslint-disable no-invalid-this */
'use strict';
var xo = require('xo');

// https://github.com/eslint/eslint/blob/5322a4ab9757eb745030ddcafa076ab5b4317e50/lib/cli.js#L129
function getErrorResults(results) {
	var filtered = [];

	results.forEach(function (result) {
		var filteredMessages = result.messages.filter(function (message) {
			return message.severity === 2;
		});

		if (filteredMessages.length > 0) {
			filtered.push({
				filePath: result.filePath,
				messages: filteredMessages
			});
		}
	});

	return filtered;
}

module.exports = function (grunt) {
	grunt.registerMultiTask('xo', 'Validate files with XO', function () {
		var cb = this.async();
		var opts = this.options({
			outputFile: false,
			quiet: false
		});

		xo.lintFiles(this.filesSrc, function (err, report) {
			if (err) {
				grunt.warn(err);
				cb();
				return;
			}

			var results = report.results;

			if (opts.quiet) {
				results = getErrorResults(results);
			}

			var output = report._getFormatter()(results);

			if (opts.outputFile) {
				grunt.file.write(opts.outputFile, output);
			} else {
				console.log(output);
			}

			cb(report.errorCount === 0);
		});
	});
};
