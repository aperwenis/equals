import { EmailSender } from './emailSender';
import { SmsSender } from './smsSender';
import { SenderInterface } from './senderInterface';

export enum SenderType {
  EMAIL = 'email',
  SMS = 'SMS',
}

interface SenderOptions {
  type: SenderType;
}

export function getSender(options: SenderOptions): SenderInterface {
  switch (options.type) {
    case SenderType.EMAIL:
      return new EmailSender();
    case SenderType.SMS:
      return new SmsSender();
    default:
      throw new Error(`Unsupported sender type: ${options.type}`);
  }
}
