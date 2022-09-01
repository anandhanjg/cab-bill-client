import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import EndpointService from '../../util/endpoint';
export default class LoginComponent extends Component {
  @service auth;
  @service http;
  @service router;

  @tracked username = null;
  @tracked password = null;
  @tracked error = null;

  @action
  async authenticate(e) {
    try {
      e.preventDefault();
      let data = await this.http.apiRequest(
        EndpointService.login.method,
        EndpointService.login.path,
        { username: this.username, password: this.password },
        null
      );
      //   data = JSON.parse(data);
      this.auth.storeToken(data.token);
      this.router.transitionTo('');
    } catch (err) {
      this.error = err;
      setTimeout(() => (this.error = ''), 5000);
    }
  }
}
