import { module, test } from 'qunit';

import { setupTest } from 'ember-training/tests/helpers';

module('Unit | Serializer | entity', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('entity');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    const data = {entityName:'test', websiteUrl: null, nzbnNumber: null, entityStatus: {entityStatusID: 1, entityStatusCode: 'NA', entityStatusDescription: 'Some description', isActive: false}, industry: null, creditRating: null};
    
    let entity = this.owner.lookup('service:store').modelFor('entity');
    const json = {
      id: 1,
      attributes: data,
    };
    entity.serialize = (snapshot, options) => {
      return json;
    };
    store.createRecord = (model, u) => {
      return entity;
    };

    let record = store.createRecord('entity', data);

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
    assert.equal(serializedRecord, json, 'serializes json');
  });
});
