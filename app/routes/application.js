import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ApplicationRoute extends Route {
  @service auth;
  @service router;

  beforeModel(transition) {
    console.log('CHECKING TOKEN EXISTS OR NOT');
    console.log(this.auth.isAuthenticated);
    console.log(transition);
    if (
      !this.auth.isAuthenticated &&
      transition.targetName != 'login' &&
      transition.targetName != 'register'
    ) {
      this.router.transitionTo('login');
    }
  }
}
