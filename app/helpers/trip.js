import { helper } from '@ember/component/helper';
import { billTypes } from '../util/const';

function trip([billType, core]) {
  if (
    core === 'KM' &&
    (billType === billTypes.HOUR_AND_KM_CHARGE ||
      billType === billTypes.KM_AND_VEH_CHARGE ||
      billType === billTypes.KM_CHARGE)
  ) {
    return true;
  }

  if (
    core === 'HOUR' &&
    (billType === billTypes.HOUR_AND_KM_CHARGE ||
      billType === billTypes.HOUR_CHARGE)
  ) {
    return true;
  }

  return false;
}

export default helper(trip);
