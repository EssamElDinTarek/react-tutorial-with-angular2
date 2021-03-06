var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var nodemon = require('gulp-nodemon');

//Browserify
gulp.task('browserify', function() {
  browserify('./app/main.ts')
    .add("typings/browser.d.ts")
    .plugin(tsify)
    .bundle()
    .on("error", function (err) {console.log("ERROR: " + err.message);})
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public'))
});

//Watch Task
gulp.task('watch', function() {
  gulp.watch('./app/**/*.ts', ['browserify'])
});

//Server
gulp.task('server', function () {
  nodemon({ script: './server.js',
            ext: 'html js'})
   .on('restart', function () {
     console.log('restarted!')
   })
})
