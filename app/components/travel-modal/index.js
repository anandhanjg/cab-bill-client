import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class TravelModalComponent extends Component {
  @tracked error = null;
  @service store;
  @tracked travelData;

  get isSave() {
    return this.args.opt === 'SAVE';
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    let tvl;
    try {
      if (this.args.opt == 'SAVE') {
        tvl = this.store.createRecord('travel', this.travelData);
      } else {
        let tl = Object.assign({}, this.travelData);
        delete tl.id;

        tvl = this.store.peekRecord('travel', this.travelData.id);

        Object.keys(tl).forEach((k) => {
          tvl[k] = tl[k];
        });
      }
      try {
        await tvl.save();
      } catch (err) {
    
        if (err) throw err;
      }

      $('#travel-modal').modal('toggle');
    } catch (err) {
      if (tvl) {
        if (this.args.opt == 'SAVE') tvl.deleteRecord();
        else if (this.args.opt == 'EDIT') tvl.rollbackAttributes();
      }
      this.error = err.message || err;
      console.log(err);
      setTimeout(() => (this.error = ''), 3000);
    }
  }

  @action
  onReset(e) {
    e.preventDefault();
  }

  @action
  setTravelData(ele,[tvl]){
    this.travelData=Object.assign({},tvl);
  }
}
