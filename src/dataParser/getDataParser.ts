import { CsvParser } from './csvParser';
import { SqliteDataParser } from './sqliteDataParser';
import { BirthdayEventEmitter } from '../birthdayEventEmitter';
import { DataParserInterface } from './dataParserInterface';
import { DataParserType } from './dataParserType';

export interface DataParserOptions {
  type: DataParserType;
  birthdayEventEmitter: BirthdayEventEmitter;
}

export function getDataParser(options: DataParserOptions): DataParserInterface {
  switch (options.type) {
    case DataParserType.CSV:
      if ((process.env.CSV_FILE_PATH || '').length === 0) {
        throw new Error('No csv file path');
      }
      return new CsvParser(options.birthdayEventEmitter, process.env.CSV_FILE_PATH);
    case DataParserType.SQLITE:
      if ((process.env.SQLITE_URL || '').length === 0) {
        throw new Error('No url for sqlite');
      }
      return new SqliteDataParser(options.birthdayEventEmitter, process.env.SQLITE_URL);
    default:
      throw new Error(`Unsupported provider type: ${options.type}`);
  }
}
