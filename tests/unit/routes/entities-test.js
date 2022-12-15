import { module, test } from 'qunit';
import { setupTest } from 'ember-training/tests/helpers';

module('Unit | Route | entities', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:entities');
    assert.ok(route);
  });
});
