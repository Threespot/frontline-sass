import fs from 'fs';
import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sassdoc from 'sassdoc';
import path from 'path';

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
  return gulp
    .src('src/**/*.scss')
    .pipe(sassdoc({
      basePath: 'https://github.com/Threespot/frontline-sass/tree/master/src',
      dest: './sassdoc/documentation',
      exclude: ['_index.scss'],
      display: {
        access: ['public'],
        alias: true,// show aliases
        watermark: true,// Sassdoc logo
      },
      package: './package.json',
      // theme: 'default',
      // verbose: true,
      // googleAnalytics: 'UA-XXXXXXXX-X'
      // groups: {
      //   'undefined': 'General',
      //   main: 'Main',
      //   utilities: 'Utilities',
      //   selectors: 'Selectors',
      // },
    }))
  .resume();
});
