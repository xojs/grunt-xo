'use strict';
const xo = require('xo');

module.exports = grunt => {
	grunt.registerMultiTask('xo', 'Validate files with XO', function () {
		const done = this.async();

		const options = this.options({
			outputFile: false,
			quiet: false
		});

		if (this.filesSrc.length === 0) {
			done();
			return;
		}

		(async () => {
			try {
				const report = await xo.lintFiles(this.filesSrc);
				let {results} = report;

				if (options.quiet) {
					results = xo.getErrorResults(results);
				}

				const output = xo.getFormatter(options.reporter)(results);

				if (options.outputFile) {
					grunt.file.write(options.outputFile, output);
				} else {
					console.log(output);
				}

				done(report.errorCount === 0);
			} catch (error) {
				grunt.warn(error);
				done();
			}
		})();
	});
};
