let gulp = require('gulp');
let webserver = require('gulp-webserver');

gulp.task('webserver', function () {
  return gulp.src('')
    .pipe(webserver({
      livereload: true
    }));
});