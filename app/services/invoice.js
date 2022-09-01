import Service, { inject as service } from '@ember/service';
import EndpointService from '../util/endpoint';

export default class InvoiceService extends Service {
  @service http;

  async createInvoice(invoice) {
    try {
      let data = await this.http.apiRequest(
        EndpointService.createInvoice.method,
        EndpointService.createInvoice.path,
        invoice
      );
      console.log(data);
      return Promise.resolve(data.invoice);
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  }

  async getInvoice(id) {
    try {
      let data = await this.http.apiRequest(
        EndpointService.getInvoice.method,
        `${EndpointService.getInvoice.path}/${id}`
      );
      return Promise.resolve(data.invoice);
    } catch (err) {
      return Promise.reject(err.message || err);
    }
  }

  async updateInvoice(id, data) {
    try {
      delete data.id;
      let resp = await this.http.apiRequest(
        EndpointService.updateInvoice.method,
        `${EndpointService.updateInvoice.path}/${id}`,
        data
      );
      return Promise.resolve(resp.invoice);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteInvoice(id) {
    try {
      let data = await this.http.apiRequest(
        EndpointService.deleteInvoice.method,
        `${EndpointService.deleteInvoice.path}/${id}`
      );
      return Promise.resolve(data.invoice);
    } catch (err) {
      return Promise.reject(err.message || err);
    }
  }

  async fetch(body = {}) {
    try {
      let data = await this.http.apiRequest(
        EndpointService.searchInvoice.method,
        EndpointService.searchInvoice.path,
        body
      );
      return Promise.resolve(data.invoices);
    } catch (err) {
      return Promise.reject(err.message || err);
    }
  }
}
