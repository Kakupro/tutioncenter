const gulp = require('gulp');


const { paths, baseDir, version } = require('./utils.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Clean
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('clean', async () => {
  const { deleteAsync } = await import('del');
  return deleteAsync([
    `${baseDir}/${paths.style.dest}/**/*.*`,
    `${baseDir}/${paths.script.dest}/**/*.*`,
    `${baseDir}/**/*.html`,
  ]);
});
gulp.task('clean:build', async () => {
  const { deleteAsync } = await import('del');
  return deleteAsync(paths.dir.prod);
});
gulp.task('clean:live', async () => {
  const { deleteAsync } = await import('del');
  return deleteAsync(`live/${version}`);
});
