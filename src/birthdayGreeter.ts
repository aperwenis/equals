import { getDataParser } from './dataParser/getDataParser';
import { getSender, SenderType } from './sender/getSender';
import { getBirthdayEventEmitter } from './birthdayEventEmitter';
import { DataParserType } from './dataParser/dataParserType';

interface GreetOptions {
  dataParserType: DataParserType;
  senderType: SenderType;
  date: Date;
}

export async function greet(greetOptions: GreetOptions): Promise<undefined> {
  const birthdayEventEmitter = getBirthdayEventEmitter();
  const dataParser = getDataParser({ type: greetOptions.dataParserType, birthdayEventEmitter });
  const sender = getSender({ type: greetOptions.senderType });
  if (!sender.supports(dataParser.getType())) {
    console.error(`Sender ${greetOptions.senderType} does not support ${greetOptions.dataParserType} as data provider`);
    return;
  }
  birthdayEventEmitter.subscribeSender(sender);
  dataParser.emitBirthdays(greetOptions.date);
}
