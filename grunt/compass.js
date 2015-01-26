module.exports = function(grunt) {
  grunt.config('compass', {
    dev: {
      options: {
        'sassDir': 'source/css',
        'cssDir': 'source/css',
        'outputStyle': 'compressed',
        'bundleExec': true,
        'require': [
          'compass-normalize',
          'sass-globbing'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
};

