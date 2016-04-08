module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/javascripts',
          src: ['**/*.js'],
          dest: 'public/javascripts',
          ext:'.js'
        }]
      }
    }
  });

  grunt.registerTask('build', ['babel']);
  grunt.registerTask('default', ['build']);
};
