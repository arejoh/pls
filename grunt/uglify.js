module.exports = function(grunt) {
  grunt.config('uglify', {
    app: {
      files: {
        'source/js/global.js': [
          'bower_components/jquery/dist/jquery.js',
          'source/js/source/global.js'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
