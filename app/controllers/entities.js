import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EntitiesController extends Controller {
  // declare services and variables
  @service store;
  entityModel = this.store.modelFor('entity');

  constructor() {
    super(...arguments);
  }

  @action
  openCreateModal(flag) {
    this.modalCreated = flag;
  }

}
