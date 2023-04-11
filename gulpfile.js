const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('update-href', function () {
    return gulp.src('**/*.html')
        .pipe(replace(/href="sp_basic info.html"/g, 'href="sp_basicinfo.html"'))
        .pipe(gulp.dest('./', { overwrite: true }));
});

// run this task with "npx gulp update-href"


