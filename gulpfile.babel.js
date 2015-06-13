let gulp = require('gulp');
let babel = require('gulp-babel');
let del = require('del');

gulp.task('watch', watchTask);
gulp.task('clean', cleanTask);
gulp.task('build', buildTask);

function watchTask() {
  gulp.watch('./src/**/*.js', ['build']);
}

function cleanTask(done) {
  let clean = [
    './dist',
  ];

  del(clean, done);
}

function buildTask() {
  return gulp.src('./src/**/*.js')
  .pipe(babel({ modules: 'umd' }))
  .pipe(gulp.dest('./dist'));
}
