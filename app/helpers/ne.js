import { helper } from '@ember/component/helper';

export default helper(function ne([v1, v2] /*, named*/) {
  return v1 !== v2;
});
