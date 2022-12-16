import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-training/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | x-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const store = this.owner.lookup('service:store');
    const entity = this.owner.lookup('service:store').modelFor('entity');
    this.set('entityModel', entity);
    await render(hbs`<Sidebar @model={{this.entityModel}} />`);
    assert.dom(this.element).hasText('');
  });
});
