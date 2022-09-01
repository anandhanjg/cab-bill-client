import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegisterRoute extends Route {
  @service auth;
  @service router;

  beforeModel() {
    if (this.auth.isAuthenticated) {
      this.router.transitionTo('');
    }
  }
}
