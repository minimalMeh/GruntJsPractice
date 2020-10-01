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
        },
        copy: {
          task_d: {
            src: 'dist/*',
            dest: 'dest/',
            expand: true,
            options: {
              process: function (content, srcpath) {
                return content.replace(/[ ]/g, '');
              },
            },
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat', 'copy:task_d']);
}