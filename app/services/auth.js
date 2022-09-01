import Service, { inject as service } from '@ember/service';
import EndpointService from '../util/endpoint';

export default class AuthService extends Service {
  SESSION_ID = 'SESSION_ID';
  profile = null;
  storeToken(token) {
    localStorage.setItem(this.SESSION_ID, token);
  }

  get getToken() {
    return localStorage.getItem(this.SESSION_ID);
  }

  get isAuthenticated() {
    return (
      (localStorage.getItem(this.SESSION_ID) &&
        localStorage.getItem(this.SESSION_ID) != 'undefined') ||
      false
    );
  }

  clear() {
    localStorage.clear();
    this.profile = null;
  }
}
