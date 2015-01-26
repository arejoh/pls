module.exports = function(grunt) {
  grunt.config('browserSync', {
    dev: {
      bsFiles: {
        src: [
          './public/css/style.css',
          './public/index.html'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './public/',
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browser-sync');
}

