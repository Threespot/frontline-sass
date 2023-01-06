/* jshint node: true */
'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
const fs = require('fs');
const gulp = require('gulp');
const cssimport = require('gulp-cssimport');
const plugins = require('gulp-load-plugins')();
const packageInfo = require('./package.json');
const sass = require('gulp-sass')(require('sass'));
const sassdoc = require('sassdoc');
const path = require('path');
const yaml = require('js-yaml');

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
