import { uniq, uniqBy } from 'lodash-es';
import {
  FavorScheduleTitle,
  Momotalk,
  RawFavorScheduleTitle,
} from '../types/types';

function getMomotalkTitle(
  momotalkList: Momotalk[],
  favorScheduleTitleList: RawFavorScheduleTitle[]
): FavorScheduleTitle[] {
  const favorScheduleIds = uniq(
    momotalkList
      .filter(e => 0 !== e.FavorScheduleId)
      .map(e => {
        const favorScheduleId = e.FavorScheduleId.toString();
        return {
          MessageGroupId: `${favorScheduleId.slice(0, 5)}${favorScheduleId
            .slice(5)
            .padStart(2, '0')}`,
          FavorScheduleId: e.FavorScheduleId,
          CharacterId: e.CharacterId,
        };
      })
  );
  const momotalkTitles = favorScheduleIds.map(favorScheduleId => {
    const titleObject = favorScheduleTitleList.find(
      e => favorScheduleId.MessageGroupId === e.GroupId.toString()
    );
    return {
      GroupId: parseInt(favorScheduleId.MessageGroupId),
      FavorScheduleId: favorScheduleId.FavorScheduleId,
      CharacterId: favorScheduleId.CharacterId,
      TextJp: titleObject?.TextJp,
      TextCn: titleObject?.TextCn,
      TextKr: titleObject?.TextKr,
      TextEn: titleObject?.TextEn,
      TextTh: titleObject?.TextTh,
    };
  });

  return uniqBy(momotalkTitles, 'FavorScheduleId');
}

export { getMomotalkTitle };
