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
}
