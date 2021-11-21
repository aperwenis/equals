import dayjs, { Dayjs } from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';

function sameMonth(date1: Dayjs, date2: Dayjs): boolean {
  return date1.month() === date2.month();
}

function sameDay(date1: Dayjs, date2: Dayjs): boolean {
  return date1.date() === date2.date();
}

function isLastDayOfFebruaryInNotLeapYear(today: Dayjs): boolean {
  return !today.isLeapYear() && today.month() === 1 && today.date() === 28;
}

function birthdayIsOnLeapDay(date: Dayjs): boolean {
  return date.isLeapYear() && date.date() === 29;
}

function leapBirthday(today: Dayjs, potentialBirthDay: Dayjs): boolean {
  return isLastDayOfFebruaryInNotLeapYear(today) && birthdayIsOnLeapDay(potentialBirthDay);
}

export function checkIfHasBirthdayToday(date: Date): boolean {
  dayjs.extend(isLeapYear);
  const today = dayjs(new Date(Date.now()));
  const potentialBirthDay = dayjs(date);
  return sameMonth(today, potentialBirthDay)
    && (sameDay(today, potentialBirthDay) || leapBirthday(today, potentialBirthDay));
}
