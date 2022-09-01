import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class HomeRoute extends Route {
  @service profile;
  @service store;

  async model() {
    let pf = await this.profile.getProfile();
    return {
      profile: pf,
      travels: this.store.findAll('travel'),
    };
  }
}
