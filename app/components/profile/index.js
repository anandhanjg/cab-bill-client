import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProfileComponent extends Component {
  @service profile;

  @tracked pf;
  @tracked error;

  tout;

  constructor(owner, args) {
    super(owner, args);
    this.setServiceProfile();
  }

  @action
  async updateProfile(e) {
    e.preventDefault();
    try {
      this.pf = await this.profile.updateProfile(this.pf);
      alert('Profile Updated Successfully');
    } catch (err) {
      this.setError(err);
    }
  }

  @action
  setServiceProfile(e) {
    e && e.preventDefault();
    this.pf = Object.assign({ password: '' }, this.profile.getProfileLocal);
  }

  setError(err) {
    this.error = err.message || err;
    clearTimeout(this.tout);
    this.tout = setTimeout(() => (this.error = err), 5000);
  }
}
