export const convertToDateTimeLocal = (v) => {
  v = new Date(v);
  return new Date(v - v.getTimezoneOffset() * 60 * 1000)
    .toISOString()
    .replace('Z', '');
};

export const convertDateToDbString = (v) => {
  let vs = v.split('T');
  vs.push('+05:30');
  return vs.join(' ');
};
