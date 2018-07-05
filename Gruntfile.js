module.exports = function(grunt) {
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  watch: {
            options: {
                spawn: false,
                atBegin: true
            },
            dll: {
                files: ['/**/*.dll'],
                tasks: ['copy:dll']
            }
        },
		
		copy: {
            dll: {
                cwd: 'src/bin/Debug/',
                src: ['*.dll'],
                dest: '<%= dest %>/bin/',
                expand: true
		}},
  umbracoPackage: {
	dist: {
	  src: 'src',		  // Path to a folder containing the files to be packaged
	  dest: 'pkg',		  // Path to a folder to create the package file
	  options: {		  // Options for the package.xml manifest
		name: 'UmbracoCultures',
        version: '1.0.0',
        url: 'http://our.umbraco.org/projects/developer-tools/my-awesome-package',
        license: 'MIT',
        licenseUrl: 'https://opensource.org/licenses/MIT',
        author: 'David Barbosa',
        authorUrl: 'http://our.umbraco.org/member/1234',
        readme: 'Please read this!'
	  }
	}
  }
});


grunt.loadNpmTasks('grunt-umbraco-package');

grunt.registerTask('default', ['umbracoPackage']);

};