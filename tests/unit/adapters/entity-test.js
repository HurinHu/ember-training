import { module, test } from 'qunit';

import { setupTest } from 'ember-training/tests/helpers';

module('Unit | Adapter | entity', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:entity');
    assert.ok(adapter);
  });
});
