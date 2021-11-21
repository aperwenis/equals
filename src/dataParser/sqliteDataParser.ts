import { BirthdayEventEmitter } from '../birthdayEventEmitter';
import { DataParserInterface } from './dataParserInterface';
import { DataParserType } from './dataParserType';

export class SqliteDataParser implements DataParserInterface {
  constructor(private readonly birthdayEventEmitter: BirthdayEventEmitter, private readonly url: string) {}

  emitBirthdays(date: Date): void {
    // emit
  }

  getType(): DataParserType {
    return DataParserType.SQLITE;
  }
}
