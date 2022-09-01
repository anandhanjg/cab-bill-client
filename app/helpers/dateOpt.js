import { helper } from '@ember/component/helper';

function dateOpt([d1, d2, opt]) {
  let diff = Math.abs(new Date(d1) - new Date(d2));
  if (opt === 'HOURS') {
    return Math.round(diff / 3600000);
  }

  if (opt === 'DAYS') {
    return Math.ceil(diff / (24 * 3600000));
  }

  return diff;
}

export default helper(dateOpt);
