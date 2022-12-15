import Component from '@glimmer/component';
import { task } from "ember-concurrency";
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

import {
    validatePresence,
    validateLength,
  } from "ember-changeset-validations/validators";
  

export default class modelXFormComponent extends Component {
    EntityValidations = {
        entityName: [validatePresence(true), validateLength({ min: 3, max: 40 })],
        websiteUrl: [validateLength({ allowBlank: true, max: 200 })],
        nzbnNumber: [validateLength({ allowBlank: true, max: 200 })],
        entityStatus: [validatePresence(true)],
        };
    @service store;
    @service tool;
    @tracked alert = '';
    @tracked msg = '';
  
    @task
    *submit(model) {
        try{
            let item = this.store.createRecord('entity', {
                entityID: model.entityID !== undefined ? model.entityID : null,
                entityName: model.entityName !== undefined ? model.entityName : null,
                websiteUrl: model.websiteUrl !== undefined ? model.websiteUrl : null,
                nzbnNumber: model.nzbnNumber !== undefined ? this.nzbnNumber : null,
                entityStatus: {entityStatusID: model.entityStatus.entityStatusID !== undefined ? model.entityStatus.entityStatusID : null, entityStatusCode: model.entityStatus.entityStatusCode !== undefined ? model.entityStatus.entityStatusCode : null, entityStatusDescription: model.entityStatus.entityStatusDescription !== undefined ? model.entityStatus.entityStatusDescription : null, isActive: model.entityStatus.isActive !== undefined ? model.entityStatus.isActive : null},
                industry: model.industry !== undefined ? model.industry : null,
                creditRating: model.creditRating !== undefined ? model.creditRating : null
            });
            item.save()
            .then((res) => {
                model.entityName = '';
                model.websiteUrl = '';
                model.nzbnNumber = '';
                model.entityStatusID =
                model.entityStatus = null;
                this.alert = 'success';
                this.msg = 'New Entity added';
                this.tool.delay(3000).then(() => {
                    this.alert = '';
                    this.msg = '';
                    //this.openCreateModal(false);
                });
            })
            .catch((error) => {
                console.log(error);
                item.deleteRecord();
                this.alert = 'error';
                this.msg = error.message;
                this.tool.delay(5000).then(() => {
                    this.alert = '';
                    this.msg = '';
                });
            });
        } catch (error) {
            this.alert = 'error';
            this.msg = error;
        }
    }
}
