import { createTransport } from 'nodemailer';
import { runGreeter } from '../src/init';

describe('application test', () => {
  const mailerMock = {
    sendMail: jest.fn(),
  };
  (createTransport as jest.Mock).mockReturnValue(mailerMock);

  it('should greet celebrants on last day of february in not leap year', async () => {
    // given
    Date.now = jest.fn(() => 1614510000000); // 2021-02-28

    // when
    await runGreeter();
    await new Promise((f) => setTimeout(f, 1000));
    await (() => new Promise(setImmediate))();
    await (() => new Promise(setImmediate))();
    await (() => new Promise(setImmediate))();
    await (() => new Promise(setImmediate))();

    // then
    expect(mailerMock.sendMail).toHaveBeenNthCalledWith(1, {
      from: process.env.EMAIL,
      to: 'test@foorbar.test',
      subject: 'Happy birthday!',
      text: expect.stringContaining('Nick'),
    });
    expect(mailerMock.sendMail).toHaveBeenNthCalledWith(2, {
      from: process.env.EMAIL,
      to: 'markb@foorbar.test',
      subject: 'Happy birthday!',
      text: expect.stringContaining('Black'),
    });
    expect(mailerMock.sendMail).toHaveBeenCalledTimes(2);
  });

  it('should greet celebrants in leap year for leap birthday', async () => {
    // given
    Date.now = jest.fn(() => 1582930800000); // 2020-02-29

    // when
    await runGreeter();
    await new Promise((f) => setTimeout(f, 1000));
    await (() => new Promise(setImmediate))();
    await (() => new Promise(setImmediate))();
    await (() => new Promise(setImmediate))();
    await (() => new Promise(setImmediate))();

    // then
    expect(mailerMock.sendMail).toHaveBeenNthCalledWith(1, {
      from: process.env.EMAIL,
      to: 'test@foorbar.test',
      subject: 'Happy birthday!',
      text: expect.stringContaining('Nick'),
    });
    expect(mailerMock.sendMail).toHaveBeenCalledTimes(1);
  });
});
