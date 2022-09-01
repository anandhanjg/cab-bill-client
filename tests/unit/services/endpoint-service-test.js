import { module, test } from 'qunit';
import { setupTest } from 'bill-client/tests/helpers';

module('Unit | Service | endpoint-service', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:endpoint-service');
    assert.ok(service);
  });
});
