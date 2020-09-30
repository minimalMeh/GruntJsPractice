module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
              banner: '/* I\'m exausted, anxiety */\n',
              separator: '\n\r',
            },
            dist: {
              src: ['../TODOLIST/*.js'],
              dest: 'dist/built.js',
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}