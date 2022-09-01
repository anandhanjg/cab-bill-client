import { module, test } from 'qunit';
import { setupRenderingTest } from 'bill-client/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Login />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Login>
        template block text
      </Login>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
