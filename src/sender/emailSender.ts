import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { Celebrant } from '../celebrant';
import { SenderInterface } from './senderInterface';
import { DataParserType } from '../dataParser/dataParserType';

export class EmailSender implements SenderInterface {
  private readonly transporter: Transporter ;

  constructor() {
    this.transporter = createTransport(this.getSMTPTransportOptions());
  }

  private getSMTPTransportOptions(): SMTPTransport.Options {
    let options = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
    };

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      options = {
        ...options,
        ...{
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        },
      };
    }

    if (process.env.SMTP_SECURE === 'true') {
      options = { ...options, ...{ secure: true } };
    }

    return options;
  }

  send(celebrant: Celebrant): void {
    if (celebrant.email) {
      try {
        this.transporter.sendMail({
          from: process.env.EMAIL,
          to: celebrant.email,
          subject: 'Happy birthday!',
          text: `Happy birthday, dear ${celebrant.firstName}`,
        });
      } catch (e) {
        console.error(`Cannot send email: ${e}`);
      }
    } else {
      console.info(`Cannot send email to: ${celebrant.firstName} ${celebrant.lastName}. Missing email`);
    }
  }

  supports(dataProviderType: DataParserType): boolean {
    return [DataParserType.CSV, DataParserType.SQLITE].includes(dataProviderType);
  }
}
