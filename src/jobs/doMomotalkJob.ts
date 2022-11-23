import fs from 'fs';
import path from 'path';
import { Momotalk } from '../types/types';
import { splitMomotalks } from '../utils/splitMomotalks.js';

function getMomotalkFullList(resDir: string): Momotalk[] {
  const RESOURCE_DIR = path.resolve(resDir, 'excel');
  if (!fs.existsSync(RESOURCE_DIR)) {
    throw new Error(`资源文件夹不存在: ${RESOURCE_DIR}`);
  }
  const momotalkFilesList: string[] = [];
  fs.readdirSync(RESOURCE_DIR).forEach(file => {
    if (/AcademyMessanger[0-9+]?ExcelTable/.test(file)) {
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
  splitMomotalks(momotalkFullList);
}

export { doMomotalkJob };
