 'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    reload        = browserSync.reload;

gulp.task('browser-sync', function () {
  browserSync ({
    proxy: "localhost:2000",
    open: false,
    logSnippet: false
  })
});

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  gulp.src(['./scss/*.scss','!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default',['sass', 'browser-sync'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch('views/**/*.html').on('change',reload);
  gulp.watch('**/*.yml').on('change',reload);
  gulp.watch('javascripts/**/*.js').on('change',reload);
  gulp.watch('scss/**/*.scss').on('change',reload);
});
