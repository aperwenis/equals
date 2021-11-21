import { greet } from './birthdayGreeter';
import { SenderType } from './sender/getSender';
import { DataParserType } from './dataParser/dataParserType';

export async function runGreeter(): Promise<void> {
  await greet({
    date: new Date(Date.now()),
    senderType: process.env.SENDER as SenderType,
    dataParserType: process.env.DATA_PARSER as DataParserType,
  });
}
