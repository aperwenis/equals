import * as fs from 'fs';
import csvParser from 'csv-parser';
import dayjs from 'dayjs';
import { BirthdayEventEmitter } from '../birthdayEventEmitter';
import { checkIfHasBirthdayToday } from '../birthdayChecker';
import { DataParserInterface } from './dataParserInterface';
import { DataParserType } from './dataParserType';

interface CsvRow {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
}

export class CsvParser implements DataParserInterface {
  constructor(private readonly birthdayEventEmitter: BirthdayEventEmitter, private readonly filePath: string) {}

  async emitBirthdays(date: Date): Promise<void> {
    if (!fs.existsSync(this.filePath)) {
      console.error(`File: ${this.filePath} does not exists`);
      return;
    }
    fs.createReadStream(this.filePath)
      .pipe(csvParser({ headers: ['last_name', 'first_name', 'date_of_birth', 'email'], skipLines: 1 }))
      .on('data', (row: CsvRow) => {
        const birthDay = dayjs(row.date_of_birth).toDate();
        if (checkIfHasBirthdayToday(birthDay)) {
          this.birthdayEventEmitter.emitFoundCelebrant({
            firstName: row.first_name,
            lastName: row.last_name,
            email: row.email,
            birthDay,
          });
        }
      });
  }

  getType(): DataParserType {
    return DataParserType.CSV;
  }
}
