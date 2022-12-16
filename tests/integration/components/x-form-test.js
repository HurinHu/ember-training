import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-training/tests/helpers';
import { render, click, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | x-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.expect(2);
    const store = this.owner.lookup('service:store');
    const entity = this.owner.lookup('service:store').modelFor('entity');
    const entityStatus = store.createRecord('entitystatus', {entityStatusID: 1, entityStatusCode: 'NA', entityStatusDescription: 'Some description', isActive: false});
    const data = {entityName:'test', websiteUrl: null, nzbnNumber: null, entityStatus: {entityStatusID: 1, entityStatusCode: 'NA', entityStatusDescription: 'Some description', isActive: false}, industry: null, creditRating: null};
    const entitySaved = this.owner.lookup('service:store').modelFor('entity');
    entitySaved.id = 1;
    entitySaved.entityName = 'test';
    entitySaved.websiteUrl = null;
    entitySaved.nzbnNumber = null;
    entitySaved.entityStatus = {entityStatusID: 1, entityStatusCode: 'NA', entityStatusDescription: 'Some description', isActive: false};
    entitySaved.industry = null;
    entitySaved.creditRating = null;
    entitySaved.save = async () => {
      return data;
    };
    entitySaved.deleteRecord = () => {
    };
    store.createRecord = (entity, data) => {
      return entitySaved;
    };
    this.set('entityModel', entity);
    this.set('entityStatus', [entityStatus]);
    await render(hbs`<X-Form @model={{this.entityModel}} @entityStatus={{this.entityStatus}}/>`);
    assert.dom(this.element).hasText('Entity Name * Website URL NZBN Number EntityStatus * Select an EntityStatus Some description Create');
    // await fillIn(this.element.querySelector('input[name="entityName"]'), 'test');
    await click(this.element.querySelector('button'));
    assert.dom(this.element).hasText("Entity Name * Entity name can't be blank, Entity name must be between 3 and 40 characters Website URL NZBN Number EntityStatus * Select an EntityStatus Some description Entity status can't be blank Create");
  });
});
