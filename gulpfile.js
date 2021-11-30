// From: https://www.cssigniter.com/use-sass-gulp-wordpress-theme-plugin-development-workflow/

const gulp = require('gulp');
const zip = require('gulp-zip');
const revall = require('gulp-rev-all');


/**
 * Zip plugin files for upload to WP site.
 */
const zipFiles = () =>
   gulp.src([
      '*assets/**/*',
      '*includes/**/*',
      '*lang/**/*',
      '*.php',
      '*.png',
      'LICENSE',
      '*.md',
      'readme.txt'
   ], { cwd: __dirname })
      .pipe(zip('exit-notifier-plus.zip'))
      .pipe(gulp.dest('dist', { cwd: __dirname }));

const copyZip = () =>
   gulp.src([
      'dist/exit-notifier-plus.zip'
   ], { cwd: __dirname })
      .pipe(revall.revision())
      .pipe(gulp.dest('dist', { cwd: __dirname }));

const plugin = gulp.series(zipFiles, copyZip);

/**
 * Default task executed by running `gulp`
 */
exports.default = plugin;
exports.plugin = plugin;
