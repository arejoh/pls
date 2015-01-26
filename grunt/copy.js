module.exports = function(grunt) {
  grunt.config('copy', {
    'css': {
      'files': [{
        'expand': true,
        'cwd': 'source/css',
        'src': ['**/*.css'],
        'dest': 'export/css'
      }]
    },
    'fonts': {
      'files': [{
        'expand': true,
        'cwd': 'source/fonts',
        'src': ['**/*'],
        'dest': 'export/fonts'
      }]
    },
    'js': {
      'files': [{
        'expand': true,
        'cwd': 'source/js',
        'src': ['**/*.js'],
        'dest': 'export/js'
      }]
    },
    'html': {
      'files': [{
        'expand': true,
        'cwd': 'public/patterns',
        'src': ['**/*-templates-*.html'],
        'dest': 'export/patterns'
      }]
    },
    'images': {
      'files': [{
        'expand': true,
        'cwd': 'source/images',
        'src': ['**/**'],
        'dest': 'export/images'
      }]
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
};
