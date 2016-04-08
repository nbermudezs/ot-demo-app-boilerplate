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
    },

    concurrent: {
      dev: {
        tasks: ['connect', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          base: {
            path: 'public'
          }
        }
      }
    },

    watch: {
      js: {
        files: ['src/javascripts/*.js', 'src/javascripts/**/*.js'],
        tasks: ['babel'],
        options: { spawn: false }
      }
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
  }

  grunt.registerTask('build', ['babel']);
  grunt.registerTask('default', ['build', 'concurrent']);
};
