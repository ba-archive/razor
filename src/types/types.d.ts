// eslint-disable sort-exports/sort-exports

export interface Args {
  t?: 'momotalk' | 'story' | 'momo';
  type?: 'momotalk' | 'story' | 'momo';
  [key: string]: string | boolean | undefined;
}

export interface Student {
  Id: number;
  [key: string]: string | number | boolean | undefined;
}

/**
 * @see https://github.com/ba-archive/blue-archive-story-viewer/issues/24
 */
export interface Momotalk {
  MessageGroupId: number;
  Id: number;
  CharacterId: number;
  MessageCondition: 'None' | 'FavorRankUp' | 'Answer' | 'Feedback';
  ConditionValue: number;
  PreConditionGroupId: number;
  FavorScheduleId: number;
  NextGroupId: number;
  FeedbackTimeMillisec: number;
  MessageType: 'Text' | 'Image' | 'None';
  ImagePath: string | undefined;
  MessageKR: string | undefined;
  MessageJP: string | undefined;
  MessageCN: string | undefined;
  MessageEN: string | undefined;
  MessageTH: string | undefined;
  MessageTW: string | undefined;
}

export interface MomotalkTitle {
  FavorScheduleId: number;
  TextCn?: string;
  TextJp: string;
  TextKr?: string;
  TextEn?: string;
  TextTh?: string;
  TextTw?: string;
}

export interface FavorSchedule {
  GroupId: number;
  SelectionGroup: number;
  BGMId: number;
  Sound: string;
  Transition: number;
  BGName: number;
  BGEffect: number;
  PopupFileName: string;
  ScriptKr: string;
  TextJp: string;
  TextCn?: string;
  TextKr?: string;
  TextEn?: string;
  TextTh?: string;
  TextTw?: string;
  VoiceJp?: string;
}

export interface RawFavorScheduleTitle {
  GroupId: number;
  TextJp?: string;
  TextCn?: string;
  TextKr?: string;
  TextEn?: string;
  TextTh?: string;
  TextTw?: string;
}

export interface FavorScheduleTitle {
  GroupId: number;
  FavorScheduleId: number;
  TextJp?: string;
  TextCn?: string;
  TextKr?: string;
  TextEn?: string;
  TextTh?: string;
  TextTw?: string;
}

export interface StudentMomotalkData {
  CharacterId: number;
  title: FavorScheduleTitle[];
  content: Momotalk[];
}
