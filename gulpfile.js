'use strict'
var gulp = require('gulp'),
   tsc = require('gulp-typescript'),
   merge = require('merge2'),
   mocha = require('gulp-mocha'),
   sourcemaps = require('gulp-sourcemaps'),
   clean = require('gulp-clean');
   
var tsProject = tsc.createProject('tsconfig.json');
var config = {
    out: 'dist'
}
gulp.task('build', ['clean'], function(){
   var tsResult = tsProject.src()
       .pipe(sourcemaps.init())
       .pipe(tsc(tsProject));
   
   return merge([
      tsResult.dts.pipe(gulp.dest(config.out)),
      tsResult.js.pipe(sourcemaps.write('./')).pipe(gulp.dest(config.out))     
   ]);
   
});

gulp.task('clean', function () {
	return gulp.src(config.out, {read: false})
		.pipe(clean());
});

