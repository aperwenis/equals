import EventEmitter from 'events';
import { Celebrant } from './celebrant';
import { SenderInterface } from './sender/senderInterface';

enum BirthdayEvents {
  FOUND_CELEBRANT = 'foundCelebrant',
}

export class BirthdayEventEmitter {
  private readonly eventEmitter: EventEmitter;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
  }

  public subscribeSender(sender: SenderInterface): void {
    this.eventEmitter.on(BirthdayEvents.FOUND_CELEBRANT, (celebrant: Celebrant) => sender.send(celebrant));
  }

  public emitFoundCelebrant(celebrant: Celebrant): void {
    this.eventEmitter.emit(BirthdayEvents.FOUND_CELEBRANT, celebrant);
  }
}

export function getBirthdayEventEmitter(): BirthdayEventEmitter {
  return new BirthdayEventEmitter(new EventEmitter());
}
