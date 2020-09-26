module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
      browserify: {
        task0: {
            files: {
              src: ['dist/calculator.js'],
              dest: 'src.js',
              ext: '-compiled.js'
            },
            options: {
                transform: [
                  ['babelify', { presets: "es2015" }]
                ]
            }
        }
    }
    });

    grunt.registerTask('default', ['browserify:task0']);
}