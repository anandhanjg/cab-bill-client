import { module, test } from 'qunit';
import { setupRenderingTest } from 'bill-client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | date_opt', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{date-opt this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});