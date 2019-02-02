module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/main.js',
      },
    },
    uglify: {
    my_target: {
      files: {
        'built/main.min.js': ['js/main.js']
      }
    }
  },
  sass: {
    dist: {
      files: {
        'styles/main.css': 'styles/style.scss'
      }
    }
  },
  cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'built/main.min.css': ['styles/main.css']
      }
    }
  },
  watch: {
    concat: {
      // We watch and compile js files as normal but don't live reload here
      files: ['js/src/*.js'],
      tasks: ['concat'],
    },
    uglify: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['js/main.js'],
      tasks: ['uglify'],
    },
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/style.scss'],
      tasks: ['sass'],
    },
    cssmin: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/main.css'],
      tasks: ['cssmin'],
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);

};
