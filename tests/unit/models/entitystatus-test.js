import { module, test } from 'qunit';

import { setupTest } from 'ember-training/tests/helpers';

module('Unit | Model | entitystatus', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('entitystatus', {});
    assert.ok(model);
  });
});
