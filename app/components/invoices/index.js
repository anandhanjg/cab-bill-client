import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import $ from 'jquery';
import { convertToDateTimeLocal } from '../../util/util';

const initInvoiceValue = {
  customerName: '',
  customerEmail: '',
  customerMobile: '',
  id: '',
  invoiceNo: '',
  startingKm: 0,
  endingKm: 0,
  invoiceType: '',
  nonAcKms: 0,
  acKms: 0,
  acChargePerKm: 0,
  nonAcChargePerKm: 0,
  vehicleChargePerDay: 0,
  chargePerHour: 0,
  tripStartingDate: '',
  tripEndDate: 0,
  vehicleName: '',
  totalSeats: 0,
  vehicleNo: '',
  driverBatta: 0,
  tollGateCharge: 0,
  parkingCharge: 0,
  locationsCovered: '',
  travel_id: '',
  packageAmount: 0,
  packageTripCity: '',
};
export default class InvoicesComponent extends Component {
  @service invoice;

  @tracked invoiceData = { ...initInvoiceValue };
  @tracked opt = 'SAVE';

  @tracked invoices = [];

  @tracked sortBy = 'invoiceNo';
  @tracked order = 1;

  @tracked searchTxt = '';

  @tracked page = 1;
  @tracked size = 5;

  constructor(owner, args) {
    super(owner, args);
    this.getInvoices();
    // setTimeout(() => this.openModal(), 500);
  }

  @action
  setSorting(name, oder) {
    this.sortBy = name;
    this.order = oder;
    this.getInvoices();
  }

  headers = [
    {
      displayValue: 'Invoice No',
      key: 'invoiceNo',
    },
    {
      displayValue: 'Invoice Date',
      key: 'createdAt',
    },
    {
      displayValue: 'Invoice Type',
      key: 'invoiceType',
    },
    {
      displayValue: 'Vehicle No',
      key: 'vehicleNo',
    },
    {
      displayValue: 'Customer Name',
      key: 'customerName',
    },
    // {
    //     displayValue:'Customer Mobile',
    //     key:'customerMobile'
    // },
    {
      displayValue: 'Customer Email',
      key: 'customerEmail',
    },
    {
      displayValue: 'Total',
      key: 'total',
    },
  ];

  @action
  async onDelete(data) {
    if(confirm("Are you sure want to delete the record?")){
      await this.invoice.deleteInvoice(data.id);
      await this.getInvoices();
    }
  }

  @action
  onEdit(data) {
    this.openModalToEdit(data);
  }

  @action
  async getInvoices() {
    try {
      this.invoices = await this.invoice.fetch({
        page: this.page,
        size: this.size,
        order: this.order,
        searchTxt: this.searchTxt,
        sortBy: this.sortBy,
      });

      this.invoices = this.invoices.map((inv) => {
        inv.createdAt = new Date(inv.createdAt).toDateString();
        inv.tripStartingDate = convertToDateTimeLocal(inv.tripStartingDate);
        inv.tripEndDate = convertToDateTimeLocal(inv.tripEndDate);
        return inv;
      });
    } catch (err) {
      console.log(err);
    }
  }

  willDestroy() {
    super.willDestroy(...arguments);
    console.log('GOING TO DESTROY');
  }

  openModal() {
    $('#invoice-modal').modal('toggle');
  }

  @action
  openModalToSave() {
    this.invoiceData = { ...initInvoiceValue };
    this.opt = 'SAVE';
    this.openModal();
  }

  @action
  openModalToEdit(inv) {
    this.invoiceData = inv;
    this.opt = 'EDIT';
    this.openModal();
  }

  @action
  onDataSave() {
    this.getInvoices();
  }
}
