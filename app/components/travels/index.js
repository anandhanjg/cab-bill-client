import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';
const initValue = {
  id: '',
  addressId: '',
  name: '',
  email: '',
  mobile: '',
  doorNo: '',
  street: '',
  pinCode: '',
  city: '',
};
export default class TravelsComponent extends Component {
  //   @tracked sortBy = 'name';
  //   @tracked order = 1;

  @service store;

  get travels() {
    return this.store.peekAll('travel');
  }

  @tracked opt = 'SAVE';
  @tracked travel = { ...initValue };
  headers = [
    {
      displayValue: 'Name',
      key: 'name',
    },
    {
      displayValue: 'Email',
      key: 'email',
    },
    {
      displayValue: 'Mobile',
      key: 'mobile',
    },
    {
      displayValue: 'Door No.',
      key: 'doorNo',
    },
    {
      displayValue: 'Street',
      key: 'street',
    },
    {
      displayValue: 'City',
      key: 'city',
    },
    {
      displayValue: 'Pin Code',
      key: 'pinCode',
    },
  ];

  //   setSorting = (data, order) => {
  //     this.sortBy = data;
  //     this.order = order;
  //   };

  @action
  openModal() {
    $('#travel-modal').modal('toggle');
  }

  @action
  openModalToSave() {
    this.opt = 'SAVE';
    this.travel = { ...initValue };
    this.openModal();
  }

  @action
  onDelete(tvl) {
    if (
      window.confirm(
        'Are you sure want to Delete? All the associated invoices will also be deleted.'
      )
    ) {
      tvl.destroyRecord();
    }
  }

  @action
  onEdit(tvl) {
    this.opt = 'EDIT';
    this.travel = tvl.getProperties(...Object.keys(initValue));
    console.log(this.travel);
    this.openModal();
  }
}
