/* jshint node: true */
'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
var fs = require('fs');
var gulp = require('gulp');
var cssimport = require('gulp-cssimport');
var plugins = require('gulp-load-plugins')();
var packageInfo = require('./package.json');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var path = require('path');
var yaml = require('js-yaml');

// -----------------------------------------------------------------------------
// Dist
// -----------------------------------------------------------------------------
gulp.task('build', function () {
  return gulp
    .src('src/_frontline.scss')
    .pipe( cssimport() )
    .pipe(plugins.header(fs.readFileSync('./banner.txt', 'utf8')))
    .pipe(plugins.header('@charset \'UTF-8\';\n\n'))
    .pipe(plugins.replace(/@version@/, packageInfo.version))
    .pipe(gulp.dest('dist/'));
});


// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------
gulp.task('test', function () {
  return gulp
    .src(['./tests/tests.scss'])
    .pipe( sass().on('error', sass.logError) );
});


// -----------------------------------------------------------------------------
// Generate documentation site using http://sassdoc.com
// -----------------------------------------------------------------------------
gulp.task('sassdoc', function () {
  var options = yaml.load(fs.readFileSync('.sassdocrc', 'utf-8'));
  options.dest = './sassdoc/documentation';
  options.verbose = true;
  options.package = require('./package.json');

  return gulp
    .src('src/**/*.scss')
    .pipe(sassdoc(options))
    .resume();
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------
gulp.task('default', gulp.series('build'));
