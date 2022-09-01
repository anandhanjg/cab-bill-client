import { module, test } from 'qunit';
import { setupTest } from 'bill-client/tests/helpers';

module('Unit | Service | profile', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:profile');
    assert.ok(service);
  });
});
