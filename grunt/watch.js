module.exports = function(grunt) {
  grunt.config('watch', {
    sass: {
      files: ['source/css/**/*.scss'],
      tasks: ['compass'],
      options: {
        'spawn': true
      }
    },
    scripts: {
      files: ['source/js/source/**/*.js'],
      tasks: ['uglify'],
      options: {
        'spawn': true
      }
    },
    html: {
      files: [
        'source/_patterns/**/*.mustache',
        'source/_patterns/**/*.json',
        'source/css/**/*.css',
        'source/js/**/*.js',
        'source/api/*.json'
      ],
      tasks: ['shell:patternlab'],
      options: {
        'spawn': false
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
