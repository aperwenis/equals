import { checkIfHasBirthdayToday } from '../src/birthdayChecker';

describe('birthdayChecker', () => {
  const testData = [
    { // leap year same month and day
      birthday: new Date(1992, 1, 28),
      isBirthday: true,
      currentDate: 1614510000000, // 2021-02-28
    },
    { // leap day on not leap year
      birthday: new Date(1992, 1, 29),
      isBirthday: true,
      currentDate: 1614510000000, // 2021-02-28
    },
    { // leap year not birthday but february
      birthday: new Date(1992, 1, 27),
      isBirthday: false,
      currentDate: 1614510000000, // 2021-02-28
    },
    { // leap year not birthday
      birthday: new Date(1992, 11, 27),
      isBirthday: false,
      currentDate: 1614510000000, // 2021-02-28
    },
    { // not leap year not birthday
      birthday: new Date(1990, 10, 27),
      isBirthday: false,
      currentDate: 1637485029233, // 2021-11-21
    },
    { // not leap birthday
      birthday: new Date(1990, 10, 21),
      isBirthday: true,
      currentDate: 1637485029233, // 2021-11-21
    },
    { // leap year leap birthday
      birthday: new Date(1992, 1, 29),
      isBirthday: true,
      currentDate: 1582930800000, // 2020-02-29
    },
    { // leap year 02-28
      birthday: new Date(1992, 1, 28),
      isBirthday: false,
      currentDate: 1582930800000, // 2020-02-29
    },
  ];
  it.each(testData)('should check if today is birthday day', ({ currentDate, isBirthday, birthday }) => {
    Date.now = jest.fn(() => currentDate); // 2021-02-28
    expect(checkIfHasBirthdayToday(birthday)).toBe(isBirthday);
  });
});
