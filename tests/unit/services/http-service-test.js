import { module, test } from 'qunit';
import { setupTest } from 'bill-client/tests/helpers';

module('Unit | Service | http-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:http-service');
    assert.ok(service);
  });
});
