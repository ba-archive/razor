import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export default function walk(dir: string, callback: (pathname: string) => void) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(chalk.red(err));
    } else {
      files.forEach(file => {
        const pathname = path.join(dir, file);
        fs.stat(pathname, (err, stats) => {
          if (err) {
            console.log(chalk.red(err));
          } else if (stats.isDirectory()) {
            walk(pathname, callback);
          } else {
            callback(pathname);
          }
        });
      });
    }
  });
}
