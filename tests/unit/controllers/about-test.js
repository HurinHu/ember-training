import { module, test } from 'qunit';
import { setupTest } from 'ember-training/tests/helpers';

module('Unit | Controller | about', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:about');
    assert.ok(controller);
  });
});
