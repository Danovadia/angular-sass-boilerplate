var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create();

gulp.task('default', function() {

});

gulp.task('serve', ['sass'], function() {
  bs.init({
    proxy: "http://localhost/demos/start/index.html"
  });

  gulp.watch("./public/scss/*.scss", ['sass']);
  gulp.watch("./public/app/*.js").on('change', bs.reload);
  gulp.watch("./*.html").on('change', bs.reload);
});

gulp.task('sass', function() {
  return gulp.src('./public/scss/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'))
   .pipe(bs.stream());
});

gulp.task('watch', function () {
  gulp.watch('./public/scss/*.scss', ['sass']);
  gulp.watch("./index.html").on('change', bs.reload);
});
