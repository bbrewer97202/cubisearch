module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */\r',
      },
      dev: {
        files: {
          'public/js/vendor.js': [
            "src/public/js/bower_components/jquery/jquery.min.js",
            "src/public/js/bower_components/underscore/underscore-min.js",
            "src/public/js/bower_components/backbone/backbone-min.js"
          ],
          'public/js/script.js': [
            'src/public/js/src/main.js',
            'src/public/js/src/models.js',
            'src/public/js/src/collections.js',
            'src/public/js/src/views.js'
          ]
        }
      }    
    },

    watch: {
      js: {
        files: ['src/public/js/src/*.js'],
        tasks: ['concat:dev']
      }
    }

  });

  //lib
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //tasks
  grunt.registerTask('default', ['concat:dev']);

}
