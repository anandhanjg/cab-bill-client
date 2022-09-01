import EmberRouter from '@ember/routing/router';
import config from 'bill-client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('register');
  this.route('home', { path: '/' }, function () {
    this.route('profile');
    this.route('travels', { path: '/' });
    this.route('invoices');
  });
});
