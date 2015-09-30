'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		xo: {
			testTask: {
				src: ['test/*.js']
			}
		},
		shell: {
			xo: {
				command: 'grunt xo:testTask',
				options: {
					callback: function (_, stdout, stderr, cb) {
						if (/test\/fixture\.js/.test(stdout)) {
							if (/camelcase/.test(stdout) && /no-unused-vars/.test(stdout)) {
								cb();
							} else {
								cb(false);
							}
						} else {
							cb(false);
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
