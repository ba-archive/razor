// 没必要

import fs from 'fs';
import path from 'path';
import { Student } from '../types/types';

function readStudentList(resDir: string) {
  const studentListFile = path.join(
    resDir,
    'excel',
    'CharacterExcelTable.json'
  );
  return JSON.parse(fs.readFileSync(studentListFile, 'utf8')).DataList.map(
    (e: Student) => e.Id
  );
}

function getStudentList(resDir: string): number[] {
  return readStudentList(resDir);
}

export { getStudentList };
