import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import EndpointService from '../../util/endpoint';

const initData = {
  email: '',
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  mobile: '',
};

export default class RegisterComponent extends Component {
  @service http;
  @service router;

  @tracked error = '';
  @tracked loading = false;

  @tracked registerData = { ...initData };

  @action
  async onSubmit(e) {
    e.preventDefault();
    this.loading = true;
    try {
      let data = await this.http.apiRequest(
        EndpointService.register.method,
        EndpointService.register.path,
        this.registerData,
        null
      );
      // data = JSON.parse(data);
      if (
        confirm(
          `${data.user.fullName} Registered Successfully! Do you want to move to login Page?`
        )
      ) {
        this.router.transitionTo('login');
      }
      this.registerData = { ...initData };
    } catch (err) {
      console.error(err);
      this.error = err;
      setTimeout(() => (this.error = ''), 5000);
    }
    this.loading = false;
  }
}
