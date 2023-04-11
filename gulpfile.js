const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('update-href', function () {
    return gulp.src('**/*.html')
        .pipe(replace(/sp_sandbox.html"/g, 'href="sp_sandbox.html"'))
        // .pipe(replace(/href="map_api.html"/g, 'href="sb_mapapi.html"'))
        .pipe(gulp.dest('./', { overwrite: true }));
});

// run this task with "npx gulp update-href"


