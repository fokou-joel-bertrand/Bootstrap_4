"use strict";

const { task } = require('grunt');

module.exports = grunt => {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({

        sass : {
            dist : {
                files : {
                    'css/style.css ' : 'css/style.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            task: ['sasaa']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/.*css',
                        'js/*.js',
                        '*.html'
                    ]
                },
                options: {
                    watchTask : true,
                        server: {
                            basedir: './'
                        }
                }
            }
        },
    });

    grunt.registerTask('css', ['sass']);

    grunt.registerTask('default', ['browserSync', 'watch']);
};
