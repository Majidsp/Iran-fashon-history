const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        //notify: false, //removes the box info on the corner
        server: {
          baseDir: "app"
      }  
    });

    //Realoads the the browser in case of any change in our file
    watch('./app/index.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });
});


//Injecting the CSS change to the browser (Not realoding it) in case of any change
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});



gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});