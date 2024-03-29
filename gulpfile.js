var del         = require('del'),
    gulp        = require('gulp'),
    log         = require('fancy-log'),
    watch       = require('gulp-watch'),
    stylus      = require('gulp-stylus'),
    rename      = require("gulp-rename"),
    concat      = require('gulp-concat'),
    notify      = require('gulp-notify'),
    cleanCSS    = require('gulp-clean-css'),
    runSequence = require('gulp4-run-sequence');

// The Init task it's for copy the javascript dependencies to the src folder.
gulp.task('init', function() {
    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('src/assets/css/compile/vendor'))
        .pipe(notify('The initialization of the project has been succesful!'))
});

// Compile Stylus CSS
gulp.task('style', function (done) {
    gulp.src('src/assets/css/compile/styl/main.styl')
        .pipe(stylus({
            'include css': true
        }))
        .pipe(cleanCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('src/assets/css'))
        .pipe(notify('CSS Compiled!'));
    done();
});

// Watch
gulp.task('watch', function() {
    gulp.watch('src/assets/css/compile/styl/*.styl', gulp.series('style'));
});

gulp.task('cleanBuild', function () {
    return del('build');
});

gulp.task('copy', function(done) {
    gulp.src('src/*.*')
        .pipe(gulp.dest('build/'))
    gulp.src('src/assets/css/style.css')
        .pipe(gulp.dest('build/assets/css/'))
    gulp.src('src/assets/js/*.js')
        .pipe(gulp.dest('build/assets/js/'))
    gulp.src('src/assets/img/**/*')
        .pipe(gulp.dest('build/assets/img/'))
        .pipe(notify('All the resources has been copied to the build folder.'));
    done();
});

gulp.task('build', function(callback) {
    runSequence(
        'style',
        'copy', 
        callback
    );
});

// Default gulp task to run 
gulp.task('default', gulp.series('watch'));