'use strict';
module.exports = grunt => {
	grunt.initConfig({
		xo: {
			validate: ['test/fixture.js']
		},
		shell: {
			xo: {
				command: 'grunt xo',
				options: {
					callback(_, stdout, stderr, done) {
						if (stdout.includes('test/fixture.js')) {
							if (stdout.includes('camelcase') && stdout.includes('no-unused-vars')) {
								done();
							} else {
								done(false);
							}
						} else {
							done(false);
						}
					}
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['shell:xo']);
};
