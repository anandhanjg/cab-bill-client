import { helper } from '@ember/component/helper';
import { convertToDateTimeLocal } from '../util/util';

function dt([v1]) {
  return convertToDateTimeLocal(v1);
}
export default helper(dt);
