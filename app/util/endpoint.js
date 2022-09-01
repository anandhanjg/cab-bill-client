export default class EndpointService {
  static url = 'http://localhost:5000';

  //User Routes
  static login = {
    path: '/users/login',
    method: 'POST',
  };

  static profile = {
    path: '/users/profile',
    method: 'GET',
  };

  static register = {
    path: '/users/register',
    method: 'POST',
  };

  static updateUser = {
    path: '/users/profile',
    method: 'PUT',
  };

  static getUser = {
    path: '/users/',
    method: 'GET',
  };

  //Travel Routes
  static createTravel = {
    path: '/travels/',
    method: 'POST',
  };

  static updateTravel = {
    path: '/travels/',
    method: 'PUT',
  };

  static deleteTravel = {
    path: '/travels/',
    method: 'DELETE',
  };

  static getTravel = {
    path: '/travels/',
    method: 'GET',
  };

  //Invoice Routes
  static createInvoice = {
    path: '/invoices/',
    method: 'POST',
  };

  static deleteInvoice = {
    path: '/invoices/',
    method: 'DELETE',
  };

  static updateInvoice = {
    path: '/invoices/',
    method: 'PUT',
  };

  static getInvoice = {
    path: '/invoices/',
    method: 'DELETE',
  };

  static searchInvoice = {
    path: '/invoices/search',
    method: 'POST',
  };
}
