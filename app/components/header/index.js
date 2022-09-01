import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @service router;
  @service auth;
  @service profile;

  get routeName() {
    let cname = this.router.currentRouteName.split('.')[1];
    cname = cname == 'index' ? 'travels' : cname;
    console.log(cname);
    return cname;
  }

  @action
  logout() {
    this.auth.clear();
    this.profile.clearProfile();
    this.router.transitionTo('login');
  }
}
