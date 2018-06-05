/*
 * Created with Sublime Text 2.
 * User: 田想兵
 * Date: 2015-03-26
 * Time: 14:11:42
 * Contact: 55342775@qq.com
 */

var fs = require("fs");
var path = require("path");
module.exports = function(grunt) {
	var today = new Date();
	var config = {
		version: [today.getFullYear(), today.getMonth() + 1, today.getDate(), today.getTime()].join('.'),
		pkg: grunt.file.readJSON('package.json')
	};
	config.publishVersion = config.pkg.version;
	config.watch={
		scripts:{
			files:['src/**.*'],
			tasks:['default'],
			options:{
				livereload: true
			}
		},
		html:{
			files:['example/**.*'],
			tasks:['default'],
			options:{
				livereload: true
			}
		}
	};
	config.requirejs={
		compile:{
			options:{
				"appDir": "src",
				"baseUrl": ".",
				"dir": "dest",
				"modules": [{
					"name": "mobileSelectDate"   //这里会生成id 
				}],
				"paths": {
					"$": "zepto",
					"mobileSelectDate":'mobile-select-date'
				}
			}
		}
	};
	config.uglify = {
		options: {
			banner: '/*! <%= pkg.name %>  v<%= pkg.version %>\n* author:<%=pkg.family%> email:<%=pkg.author.email%>\n* demo:<%=pkg.author.url%> \n* git:<%=pkg.git%>  <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		build: {
			// src: ['src/<%= pkg.name %>.js', '!*.min.js'],
			// dest: 'dist/<%= pkg.name %>.min.js'
			files:[{
				expand:true,
				cwd:"src",
				src:['*.js', '!*.min.js'],
				dest:"dist",
				ext:'.min.js'
			}]
		}
	};
	config.cssmin = {
		options: {
			compatibility: 'ie8', //设置兼容模式 
			noAdvanced: true //取消高级特性 
		},
		target: {
			files: [{
				expand: true,
				cwd: 'src',
				src: ['*.css', '!*.min.css'],
				dest: 'dist',
				ext: '.min.css'
			}]
		}
	};
	grunt.initConfig(config);
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	// 默认被执行的任务列表。
	grunt.registerTask('default', ['uglify','cssmin','requirejs']);

	//requirejs
};