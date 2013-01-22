/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : ['libs/**/*.js', 'src/**/*.js'],
      helpers : 'spec/**/*_helper.js',
      specs : 'spec/**/*_spec.js'
    },
    lint: {
      files: ['grunt.js']
    },
    watch: {
      files: ['grunt.js', 'jquery.maphilight.js'],
      tasks: 'lint build'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true,
        _: true,
        alert: true,
        console: true
      }
    },
    min: {
      dist: {
          src : 'jquery.maphilight.js',
          dest: 'jquery.maphilight.min.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint min');
};
