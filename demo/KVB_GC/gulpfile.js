var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
// var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var cssbeautify = require('gulp-cssbeautify');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var twig            = require('gulp-twig');

var reload = browserSync.reload;


//twig

var onError = function(error) {
	gutil.beep();
	gutil.log(gutil.colors.red('Error [' + error.plugin + ']: ' + error.message));
	this.emit('end');
};

gulp.task('watch:pages', ['make:pages'], reload);

gulp.task('make:pages', function() {
	return gulp.src('assets/twig/'+ '**/!(_)*.twig')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(twig({
			base: 'assets/twig/'
		}))
		.pipe(gulp.dest('./'));
});

// styles task
gulp.task('sass', function () {
	return gulp.src('./assets/sass/**/*.scss')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./assets/compiled/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src(['./assets/js/plugins/jquery*.js', './assets/js/plugins/*.js', './assets/js/custom/*.js'])
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./assets/compiled/js/'))
	.pipe(browserSync.stream());
});

gulp.task('sass:min', function() {
	return gulp.src('./assets/scss/**/*.scss')
	.pipe(plumber())
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(
		autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(gulp.dest('./assets/compiled/css'));
});

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "../markup"
		},
		open: 'local',
		directory: true
	});
	gulp.watch('./assets/js/*/*.js',['scripts']);
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
	// gulp.watch('sourceimages/*', ['imagemin']);
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("assets/twig/" + '**/*.twig', ['watch:pages']);
});

// // imagemin
// gulp.task('imagemin', function() {
// 	gulp.src('sourceimages/*')
// 	.pipe(plumber())
// 	.pipe(imagemin())
// 	.pipe(gulp.dest('images'));
// })

// clean css and images
gulp.task('clean', function() {
	return gulp.src(['css', 'images'], {read: false})
	.pipe(clean());
});

gulp.task('clean:maps', function() {
	return gulp.src(['./assets/compiled/css/*.css.map','./assets/compiled/js/*.js.map'])
	.pipe(clean({
		force: true
	}));
});

// task beautify
gulp.task('beautify', function() {
	gulp.src('./assets/compiled/css/*.css')
	.pipe(cssbeautify({
		indent_size: 2,
	}))
	.pipe(plumber())
	.pipe(gulp.dest('./assets/compiled/css/'));
});

// task dist
// release project and make ready for QA
gulp.task('dist', function(callback) {
	runSequence('clean', 'beautify','sass', 'scripts','clean:maps', 'make:pages',  callback);
});

gulp.task('default', ['browser-sync']);