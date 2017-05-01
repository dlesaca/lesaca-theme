var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

//Builds Images
gulp.task('images', () => {
  return gulp.src('./src/image/**/*.+(png|jpg|jpeg|gif|svg|ico)')
  .pipe(imagemin()) //compress images
  .pipe(gulp.dest('./public/assets/images'));
});
