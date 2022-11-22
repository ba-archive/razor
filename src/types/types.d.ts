export interface Args {
  t?: 'momotalk' | 'story' | 'momo';
  type?: 'momotalk' | 'story' | 'momo';
  [key: string]: string | boolean | undefined;
}

export interface Student {
  Id: number;
  [key: string]: string | number | boolean | undefined;
}
