import { DataParserType } from './dataParserType';

export interface DataParserInterface {
  getType(): DataParserType;

  emitBirthdays(date: Date): void;
}
