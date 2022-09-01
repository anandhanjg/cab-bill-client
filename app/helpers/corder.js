import { helper } from '@ember/component/helper';

function changeOrder([order]) {
  return order * -1;
}

export default helper(changeOrder);
