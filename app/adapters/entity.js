import RESTAdapter from '@ember-data/adapter/rest';
import fetch from 'fetch';

export default class EntityAdapter extends RESTAdapter {
  // define api base url
  host = '/v1/';
  contentType = 'application/json';
  dataType = 'json';
  init() {
    super.init(...arguments);
  }

  async findAll(store, type, query) {
    let res = await fetch(this.host + 'Entities');
    let data = await res.json();
    if (res.status !== 200) {
      let error = data;
      if (typeof data.errors === 'object') {
        error = Object.values(data.errors).join('<br>');
      }
      throw error;
    }
    return data;
  }

  async createRecord(store, type, snapshot) {
    let { _attributes } = snapshot;
    let res = await fetch(this.host + 'Entities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(_attributes),
    });
    let data = await res.json();
    if (res.status !== 201) {
      let error = data;
      if (typeof data.errors === 'object') {
        error = Object.values(data.errors).join('<br>');
      }
      throw error;
    }
    return data;
  }
}
