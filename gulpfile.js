'use strict'
var gulp = require('gulp'),
   tsc = require('gulp-typescript'),
   merge = require('merge2'),
   mocha = require('gulp-mocha'),
   sourcemaps = require('gulp-sourcemaps');
   
var tsProject = tsc.createProject('tsconfig.json');

gulp.task('Build', function(){
   var tsResult = tsProject.src()
       .pipe(sourcemaps.init())
       .pipe(tsc(tsProject));
   
   return merge([
      tsResult.dts.pipe(gulp.dest('lib')),
      tsResult.js.pipe(sourcemaps.write('./')).pipe(gulp.dest('lib'))     
   ]);
   
});

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
