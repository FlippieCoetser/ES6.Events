'use strict'
var gulp = require('gulp'),
   tsc = require('gulp-typescript'),
   merge = require('merge2'),
   mocha = require('gulp-mocha'),
   sourcemaps = require('gulp-sourcemaps'),
   lint = require('gulp-tslint'),
   del = require('del'),
   copy = require('gulp-copy'),
   sequence = require('gulp-sequence'),
   istanbul = require('gulp-istanbul');
   
let Project = tsc.createProject('tsconfig.json');

//***************************************************************************
//* CLEAN
//***************************************************************************
gulp.task('clean:lib', function () {
    return del([
        "lib/*.*"
    ]);
});
gulp.task('clean:src', function () {
    return del([
        "src/*.js",
        "src/*.d.ts",
        "src/*.map"
    ]);
});
gulp.task('clean:test', function () {
    return del([
        "test/*.js"
    ]);
});
gulp.task('clean', ['clean:lib', 'clean:src', 'clean:test']);

//***************************************************************************
//* LINT
//***************************************************************************
gulp.task('lint:src', function(){
    return gulp
        .src([
            "src/*.ts"
        ])
        .pipe(lint({}))
        .pipe(lint.report('prose')); 
});
gulp.task('lint', sequence('clean:src', 'lint:src'));

//***************************************************************************
//* BUILD
//***************************************************************************
gulp.task('build:src', function(){
    var tsResult = Project
        .src()
        .pipe(sourcemaps.init())
        .pipe(Project());
   
    return merge([
        tsResult.dts
            .pipe(gulp.dest('./src')),
        tsResult.js
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./src'))     
    ]); 
});

gulp.task('build', sequence('lint', 'build:src'));

//***************************************************************************
//* TEST
//***************************************************************************
gulp.task('test:build', function(){
    return gulp
        .src('./test/*.ts')
        .pipe(tsc({
            module: "commonjs"
        }))
        .pipe(gulp.dest('./test'));
});
gulp.task('test:coverage', function(){
    return gulp
        .src([
            'src/*.js'
        ])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});
gulp.task('test:mocha', function(){
    return gulp
        .src('test/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
        .pipe(istanbul.writeReports()); 
});
gulp.task('test', sequence('build', 'test:build', 'test:coverage', 'test:mocha', 'clean'));

//***************************************************************************
//* PUBLISH
//***************************************************************************
gulp.task('build:lib', function(){
    var tsResult = Project
        .src()
        .pipe(sourcemaps.init())
        .pipe(Project());
   
    return merge([
        tsResult.dts
            .pipe(gulp.dest('./lib')),
        tsResult.js
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./lib'))     
    ]); 
});
gulp.task('publish', sequence('build:lib'));