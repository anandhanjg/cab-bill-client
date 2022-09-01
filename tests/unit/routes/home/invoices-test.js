import { module, test } from 'qunit';
import { setupTest } from 'bill-client/tests/helpers';

module('Unit | Route | home/invoices', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:home/invoices');
    assert.ok(route);
  });
});
