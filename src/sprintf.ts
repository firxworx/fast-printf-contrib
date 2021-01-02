import {
  format as formatNumber,
} from 'mathjs';

export const sprintf = (subject: string, ...args: any[]): string => {
  let index = -1;

  return subject.replaceAll(/(%[%c-fosux])/g, (match) => {
    index++;

    const boundValue = args[index];

    if (match === '%c') {
      if (boundValue.length !== 1) {
        throw new Error('%c must be bound to a single character');
      }

      return boundValue;
    } else if (match === '%d') {
      return boundValue;
    } else if (match === '%e') {
      return formatNumber(
        boundValue,
        {
          notation: 'exponential',
        },
      );
    } else if (match === '%f') {
      return boundValue;
    } else if (match === '%i') {
      return boundValue;
    } else if (match === '%o') {
      return (Number.parseInt(boundValue, 10) >>> 0).toString(8);
    } else if (match === '%s') {
      return boundValue;
    } else if (match === '%u') {
      return Number.parseInt(boundValue, 10) >>> 0;
    } else if (match === '%x') {
      return (Number.parseInt(boundValue, 10) >>> 0).toString(16);
    } else if (match === '%%') {
      return '%';
    } else {
      throw new Error('Unknown format specifier.');
    }
  });
};
