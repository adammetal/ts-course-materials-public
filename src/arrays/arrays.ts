export const mapNumbers = (array: number[], cb: (num: number) => number) => {
  const result: number[] = [];

  for (const item of array) {
    result.push(cb(item));
  }

  return result;
};

export const map = <T, R>(array: T[], cb: (t: T) => R): R[] => {
  const result: R[] = [];

  for (const item of array) {
    result.push(cb(item));
  }

  return result;
};

export const filter = <T>(array: T[], cb: (t: T) => boolean): T[] => {
  const result: T[] = [];

  for (const item of array) {
    if (cb(item) === true) {
      result.push(item);
    }
  }

  return result;
};

export const reduce = <T, R>(
  array: T[],
  cb: (a: R, t: T) => R,
  start: R
): R => {
  let acc: R = start;

  for (const item of array) {
    acc = cb(acc, item);
  }

  return acc;
};
