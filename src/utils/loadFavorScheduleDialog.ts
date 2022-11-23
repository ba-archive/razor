import fs from 'fs';
import path from 'path';
import { FavorSchedule, RawFavorScheduleTitle } from '../types/types';

function getFavorScheduleFullList(resDir: string): FavorSchedule[] {
  const favorScheduleFileList: string[] = [];
  const EXCEL_DIR = path.resolve(resDir, 'excel');
  fs.readdirSync(EXCEL_DIR).forEach(file => {
    if (/ScenarioScriptFavor[0-9+]ExcelTable/.test(file)) {
      favorScheduleFileList.push(path.resolve(resDir, 'excel', file));
    }
  });
  return favorScheduleFileList
    .map(file => {
      return JSON.parse(fs.readFileSync(file, 'utf8')).DataList;
    })
    .flat();
}

function getFavorScheduleTitle(resDir: string): RawFavorScheduleTitle[] {
  return getFavorScheduleFullList(resDir)
    .filter(e => e.ScriptKr.toLowerCase().includes('#title;'))
    .map(e => {
      return {
        GroupId: e.GroupId,
        TextJp: e.TextJp,
        TextCn: e.TextCn,
        TextKr: e.TextKr,
        TextEn: e.TextEn,
        TextTh: e.TextTh,
      };
    });
}

export { getFavorScheduleFullList, getFavorScheduleTitle };
