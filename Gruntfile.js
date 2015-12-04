module.exports = function(grunt){
	
	
	// Project configuration. 
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			js: {
				src: ['js/add.js', 'js/log.js' , 'js/login.js', 'js/not.js', 'js/setting.js', 'js/sha256.js', 'js/uploadImg.js'],
				dest: 'build/built.js',
			},
			css:{
				src: ['css/box.css', 'css/default.css', 'css/forms.css', 'css/list.css', 'css/log.css' , 'css/login.css' , 'css/notification.css', 'css/setting.css', 'css/welcome.css']
			}
		},
		watch: {
  		js: {
				files: ['js/**/*.js'],
				tasks: ['jshint'],
			},		
  		css: {
				files: ['css/**/*.css'],
				tasks: ['jshint'],
			},		
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
}