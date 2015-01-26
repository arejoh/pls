module.exports = function(grunt) {
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('dev',
    'Starting browsersync and watch task.',
    ['browserSync', 'watch']);

  grunt.registerTask('build-patternlab',
    ['shell:patternlab']);

  grunt.registerTask('push',
    ['copy:css', 'copy:js']);

  grunt.registerTask('default',
    ['uglify', 'compass', 'modernizr', 'shell:patternlab']);
}
