import { Celebrant } from '../celebrant';
import { DataParserType } from '../dataParser/dataParserType';

export interface SenderInterface {
  send(celebrants: Celebrant): void;

  supports(dataProviderType: DataParserType): boolean;
}
