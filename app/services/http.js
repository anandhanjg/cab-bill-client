import Service, { inject as service } from '@ember/service';
import EndpointService from '../util/endpoint';

export default class HttpService extends Service {
  @service auth;

  get tokenHeader() {
    let token = this.auth.getToken;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async apiRequest(
    method,
    path,
    body = {},
    headers = {},
    opts = { json: true }
  ) {
    try {
      let options = {
        method,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...this.tokenHeader,
          ...headers,
        },
      };
      if (method != 'GET' && method != 'DELETE') {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(EndpointService.url + path, options);

      if (!response.ok) {
        throw (await response.json())?.error;
      }

      let data;
      if (opts.json) {
        data = await response.json();
      } else {
        data = await response.text();
      }
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err.message || err);
    }
  }
}
