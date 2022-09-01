import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action,computed } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';
import { billTypes as BILL_TYPES } from '../../util/const';

export default class InvoiceModalComponent extends Component {
  @tracked error = null;
  @service store;
  @service invoice;
  @tracked billType = BILL_TYPES.KM_CHARGE;
  @tracked travels;

  @tracked invoiceData;

  tout = null;
  constructor(owner, args) {
    super(owner, args);
    this.travels = this.store.peekAll('travel');
  }

  @action setInvoiceData(element,[inv]) {
      this.invoiceData=Object.assign({},inv);
      if(this.invoiceData.invoiceType){
        this.billType=this.invoiceData.invoiceType;
      }else{
        this.billType=BILL_TYPES.KM_CHARGE;
      }
  }

  

  

  get isSave() {
    return this.args.opt === 'SAVE';
  }

  @action
  setBillType(btype) {
    this.billType = btype;
  }

  @action
  onTravelSelect(e) {
    this.invoiceData.travel_id = e.target.value;
  }

  @action
  async onSubmit(e) {
    e.preventDefault();
    try {
      let inv = Object.assign({}, this.invoiceData);
      inv.invoiceType = this.billType;
      
      if(!Array.isArray(inv.locationsCovered))
        inv.locationsCovered = inv.locationsCovered.split(',');

      if (this.args.opt == 'SAVE') {
        await this.invoice.createInvoice(inv);
      }else if (this.args.opt == 'EDIT') {
        await this.invoice.updateInvoice(inv.id,inv);
      }
      this.args.onDataSave();
      $('#invoice-modal').modal('toggle');
    } catch (err) {
      this.error = err.message || err;
      clearTimeout(this.tout);
      setTimeout(() => (this.error = ''), 3000);
    }
  }

  @action
  onReset(e) {
    e.preventDefault();
  }
}
