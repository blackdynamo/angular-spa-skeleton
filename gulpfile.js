require('babel-core/register');

var _ = require('lodash');
var gulp = require('gulp');
var tasks = require("./gulp-tasks");

var options = {
  dependencies: _.without(_.keys(require('./package.json').dependencies), 'mdi'),

  build: {
    css: {
      dir: 'build/css',
      app: 'app.css',
      vendor: 'vendor.css'
    },

    dir: 'build',

    fonts: {
      dir: 'build/fonts'
    },

    js: {
      dir: 'build/js',
      app: 'app.js',
      vendor: 'vendor.js'
    },

    partials: {
      dir: 'build/partials'
    }
  },

  src: {
    fonts: {
      all: ['node_modules/mdi/fonts/*']
    },

    html: 'src/*.html',
    partials: 'src/app/partials/**/*.html',

    scripts: {
      all: 'src/app/**/*.js',
      app: 'src/app/initialize.js'
    },

    styles: {
      all: 'src/styles/**/*.scss',
      app: 'src/styles/app.scss',
      vendor: 'src/styles/vendor.scss'
    }
  }
};

gulp.task('browserify:app', tasks.browserifyApp(options));
gulp.task('browserify:vendor', tasks.browserifyVendor(options));
gulp.task('build', tasks.build(options));
gulp.task('clean', tasks.clean(options));
gulp.task('compress', ['uglify:vendor', 'uglify:app']);
gulp.task('css', ['sass:vendor', 'sass:app']);
gulp.task('fonts', tasks.fonts(options));
gulp.task('html', tasks.html(options));
gulp.task('lint', tasks.lint(options));
gulp.task('partials', tasks.partials(options));
gulp.task('release', tasks.release(options));
gulp.task('sass:app', tasks.sass(_.assign({}, options, {paths: options.src.styles.app})));
gulp.task('sass:vendor', tasks.sass(_.assign({}, options, {paths: options.src.styles.vendor})));
gulp.task('uglify:app', tasks.uglify(_.assign({}, options, {paths: options.build.js.dir + '/' + options.build.js.app})));
gulp.task('uglify:vendor', tasks.uglify(_.assign({}, options, {paths: options.build.js.dir + '/' + options.build.js.vendor})));
gulp.task('watch', tasks.watch(options));
gulp.task('watchify:app', tasks.browserifyApp(_.assign({}, options, {watch: true})));
