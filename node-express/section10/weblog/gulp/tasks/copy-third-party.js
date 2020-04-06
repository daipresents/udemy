var config = require("../config.js");
var gulp = require("gulp");
var del = require("del");

gulp.task("copy-third-party.clean", ()=>{
  return del("./third-party/**/*", { cwd: config.path.output });
});

// jquery, popper.js, bootstrap, font-awesome
gulp.task("copy-third-party.jquery", ["copy-third-party.clean"], ()=> {
  gulp.src("./jquery/dist/**/*", { cwd: config.path.node_modules})
    .pipe(gulp.dest("./third-party/jquery", { cwd: config.path.output }));
});

gulp.task("copy-third-party.popper.js", ["copy-third-party.clean"], ()=> {
  gulp.src("./popper.js/dist/**/*", { cwd: config.path.node_modules})
    .pipe(gulp.dest("./third-party/popper.js", { cwd: config.path.output }));
});

gulp.task("copy-third-party.bootstrap", ["copy-third-party.clean"], ()=> {
  gulp.src("./bootstrap/dist/**/*", { cwd: config.path.node_modules})
    .pipe(gulp.dest("./third-party/bootstrap", { cwd: config.path.output }));
});

gulp.task("copy-third-party.font-awesome", ["copy-third-party.clean"], ()=> {
  gulp.src("./font-awesome/**/*", { cwd: config.path.node_modules})
    .pipe(gulp.dest("./third-party/font-awesome", { cwd: config.path.output }));
});

gulp.task("copy-third-party", [
  "copy-third-party.jquery",
  "copy-third-party.popper.js",
  "copy-third-party.bootstrap",
  "copy-third-party.font-awesome",
]);
