const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const version = require('gulp-version-append');
const run = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('source/sass/style.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(rename({ suffix: '.min', prefix : '' }))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('cssmin', function () {
   return gulp.src('dist/css/*')
       .pipe(csso({
           restructure: false,
           sourceMap: true,
           debug: false
       }))
       .pipe(gulp.dest('dist/css'));
});
gulp.task('js', function () {
    return gulp.src([
        'source/libs/jquery/dist/jquery.min.js',
        'source/libs/bootstrap/dist/js/bootstrap.min.js',
        'source/libs/Magnific-Popup-master/dist/jquery.magnific-popup.min.js',
        'source/libs/TouchSwipe-Jquery-Plugin-master/jquery.touchSwipe.min.js',
        'source/libs/tiny-slider-master/dist/tiny-slider.js',
        'source/js/common.js',
    ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.min.js'))
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('dist', function () {
    return gulp.src([
        'source/img/**',
        'source/libs/**'
    ], {
        base: 'source'
    })
        .pipe(plumber())
        .pipe(gulp.dest('dist'))
});

gulp.task('html', function () {
    return gulp.src(['!source/libs/**','source/**/*.html'])
        .pipe(plumber())
        .pipe(version(['html', 'js', 'css', 'img'], {appendType: 'version', versionFile: 'version.json'}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function () {
    return gulp.src('source/img/**')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "dist",
            serveStaticOptions: {
                extensions: ["html"]
            },
        },
        notify: false,
        // open: true,
        // open: "tunnel",
        // tunnel: true,
        // tunnel: "dynamic-company", //Demonstration page: http://projectmane.localtunnel.me
    });
    gulp.watch(['!source/libs/**','source/**/*.html'], ['html']);
    gulp.watch('source/sass/**/*.sass', ['sass', 'cssmin']);
    gulp.watch(['source/libs/**/*.js' ,'source/js/common.js'], ['js']);
    gulp.watch('source/img/**', ['img']);
});

gulp.task('default', function (fn) {
    run(
        'sass',
        'cssmin',
        'js',
        'dist',
        'html',
        'watch',
        fn
    );
});