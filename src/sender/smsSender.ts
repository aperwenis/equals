import { Celebrant } from '../celebrant';
import { SenderInterface } from './senderInterface';
import { DataParserType } from '../dataParser/dataParserType';

export class SmsSender implements SenderInterface {
  send(celebrant: Celebrant): void {
    // send
  }

  supports(dataProviderType: DataParserType): boolean {
    return dataProviderType === DataParserType.SQLITE;
  }
}
