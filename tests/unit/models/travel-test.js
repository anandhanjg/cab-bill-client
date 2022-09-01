import { module, test } from 'qunit';
import { setupTest } from 'bill-client/tests/helpers';

module('Unit | Model | travel', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('travel', {});
    assert.ok(model);
  });
});
