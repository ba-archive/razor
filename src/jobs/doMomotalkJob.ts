import fs from 'fs';
import path from 'path';

function getMomotalkFullList(resDir: string) {
  const momotalkFilesList: string[] = [];
  fs.readdirSync(path.resolve(resDir, 'excel')).forEach(file => {
    if (/AcademyMessanger[0-9]ExcelTable/.test(file)) {
      momotalkFilesList.push(path.resolve(resDir, 'excel', file));
    }
  });
  return momotalkFilesList
    .map(file => {
      return JSON.parse(fs.readFileSync(file, 'utf8')).DataList;
    })
    .flat();
}

function doMomotalkJob(resDir: string) {
  const momotalkFullList = getMomotalkFullList(resDir);
  console.log(momotalkFullList.length);
}

export { doMomotalkJob };
