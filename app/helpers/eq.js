import { helper } from '@ember/component/helper';

function eq([v1, v2]) {
  return v1 === v2;
}

export default helper(eq);
