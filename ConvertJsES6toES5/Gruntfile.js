module.exports = function(grunt) {
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                "sourceMap": true
            },
            dist: {
                files: [{
                    "expand": true,
                    "src": ["dist/calculator.js"],
                    "dest": "js-compiled",
                    "ext": "-compiled.js"
                }]
            }
        //task0: {
        //  files: [{
        //    "expand": true,
        //    "src": ["dist/calculator.js"],
        //    "dest": "js-compiled",
        //    "ext": "-compiled.js"
        //   }],
        //   options: {
        //      transform: [
        //        ['babelify', { presets: "es2015" }]
        //      ]
        //   }
        
        }
    });
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', ['babel']);
}