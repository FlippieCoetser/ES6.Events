'use strict'
var gulp = require('gulp'),
   tsc = require('gulp-typescript'),
   merge = require('merge2'),
   mocha = require('gulp-mocha'),
<<<<<<< HEAD
   sourcemaps = require('gulp-sourcemaps');
   
var tsProject = tsc.createProject('tsconfig.json');

gulp.task('Build', function(){
=======
   sourcemaps = require('gulp-sourcemaps'),
   clean = require('gulp-clean');
   
var tsProject = tsc.createProject('tsconfig.json');
var config = {
    out: 'dist'
}
gulp.task('build', ['clean'], function(){
>>>>>>> 156f9b2147b60d2c595e4ea484c157b0119fa771
   var tsResult = tsProject.src()
       .pipe(sourcemaps.init())
       .pipe(tsc(tsProject));
   
   return merge([
<<<<<<< HEAD
      tsResult.dts.pipe(gulp.dest('lib')),
      tsResult.js.pipe(sourcemaps.write('./')).pipe(gulp.dest('lib'))     
=======
      tsResult.dts.pipe(gulp.dest(config.out)),
      tsResult.js.pipe(sourcemaps.write('./')).pipe(gulp.dest(config.out))     
>>>>>>> 156f9b2147b60d2c595e4ea484c157b0119fa771
   ]);
   
});

<<<<<<< HEAD
gulp.task('PreTest', function(){
    return gulp.src('./test/*.ts')
        .pipe(tsc({
           module: "commonjs"
        }))
        .pipe(gulp.dest('./test'));
});

gulp.task('Test', ['PreTest'], function(){
   return gulp.src('./test/*.js', {read: false})
          .pipe(mocha({reporter: 'spec'})); 
});
  
=======
gulp.task('clean', function () {
	return gulp.src(config.out, {read: false})
		.pipe(clean());
});

>>>>>>> 156f9b2147b60d2c595e4ea484c157b0119fa771
