const gulp = require("gulp")
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")

gulp.task('default', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series(['styles']))
})

gulp.task("styles", () => {
  return gulp.src("./src/scss/main.scss")
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions']
    }))
    .pipe(gulp.dest("./public/stylesheets"))
})
