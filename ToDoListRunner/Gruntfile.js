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
        },
        watch: {
          scripts: {
            options: {
              spawn: false,
              event: ['changed']
            },
            files: ['../TODOLIST/*.js'],
            tasks: ['concat'],
          },
        },
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: [{
              expand: true,
              cwd: '../TODOLIST',
              src: ['*.css', '!*.min.css'],
              dest: 'dist',
              ext: '.min.css'
            }]
          }
        },
        // we know that uglify supports only es5, so I'm taking it from folder with es5
        uglify: {
          my_target: {
            files: {
              'dist/uglified.min.js': ['../ConvertJsES6toES5/js-compiled/dist/calculator-compiled.js']
            }
          }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'copy:task_d']);
}