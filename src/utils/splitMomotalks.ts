import chalk from 'chalk';
import fs from 'fs';
import jsYaml from 'js-yaml';
import { groupBy } from 'lodash-es';
import path from 'path';
import { RES_DIR_NAME, ROOT_DIR_NAME } from '../const/__DIRNAME.js';
import { Momotalk, StudentMomotalkData } from '../types/types';
import { getMomotalkTitle } from './getMomotalkTitle.js';
import { getFavorScheduleTitle } from './loadFavorScheduleDialog.js';

function splitMomotalks(momotalkList: Momotalk[]) {
  const MOMOTALK_DIR_NAME = path.resolve(ROOT_DIR_NAME, 'output', 'momotalk');

  if (!fs.existsSync(MOMOTALK_DIR_NAME)) {
    fs.mkdirSync(MOMOTALK_DIR_NAME, { recursive: true });
  }

  // 爱丽丝有一堆 CharacterID 为 0 的空对话，需要过滤掉
  const momotalksById = groupBy(
    momotalkList.filter(e => 0 !== e.CharacterId),
    'CharacterId'
  );

  const favorScheduleTitleList = getFavorScheduleTitle(RES_DIR_NAME);

  Object.keys(momotalksById).forEach(studentId => {
    // console.log(momotalksById[studentId][0]);
    const studentMomotalkJsonPath = path.resolve(
      MOMOTALK_DIR_NAME,
      `${studentId}.yml`
    );

    const momotalkTitles = getMomotalkTitle(
      momotalksById[studentId],
      favorScheduleTitleList
    );

    const studentMomotalkData: StudentMomotalkData = {
      CharacterId: parseInt(studentId),
      title: momotalkTitles,
      content: momotalksById[studentId].map(e => {
        e.MessageCN = e.MessageCN || '';
        e.MessageJP = e.MessageJP || '';
        e.MessageKR = e.MessageKR || '';
        e.MessageEN = e.MessageEN || '';
        e.MessageTH = e.MessageTH || '';
        e.MessageTW = e.MessageTW || '';
        return e;
      }),
    };

    fs.writeFile(
      studentMomotalkJsonPath,
      jsYaml.dump(studentMomotalkData),
      err => {
        if (err) {
          console.log(chalk.red(err));
        }
      }
    );
  });
}

export { splitMomotalks };
