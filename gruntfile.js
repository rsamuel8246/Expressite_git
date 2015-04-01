module.exports = function( grunt ) {
 
  grunt.initConfig({
    // Tasks que o Grunt deve executar

	    uglify : {
	    	option:  {
	    		mangle : false
	    	},



	    	minizar : {
	    		files : {
	    			'_js/main.js' : ['js/*.js'],
				    }
		    	 }
	    },

  


		concat: {

			options: {
				separator: ';'
			},

			dist: {
				src: ['css/*css', '!*css/.min.css'],
				dest: '_css/all.css',
			},
		},



		cssmin: {
			minify: {
				expand : true,
				cwd: '_css/',
				src: ['*.css', '!*min.css'],
				dest: '_css/',
				ext:'.css'
			}
		},

 });



  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['uglify', 'concat','cssmin']);	
};