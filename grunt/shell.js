module.exports = function(grunt) {
  grunt.config('shell', {
    patternlab: {
      options: {
        stdout: true
      },
      command: 'php core/builder.php -g'
    }
  });
  grunt.loadNpmTasks('grunt-shell');
};
