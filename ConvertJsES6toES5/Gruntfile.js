module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      browserify: {
        task0: {
          files: [{
            "expand": true,
            "src": ["dist/calculator.js"],
            "dest": "js-compiled",
            "ext": "-compiled.js"
           }],
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