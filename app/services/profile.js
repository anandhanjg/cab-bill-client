import Service from '@ember/service';
import { inject as service } from '@ember/service';
import EndpointService from '../util/endpoint';

export default class ProfileService extends Service {
  @service http;

  profile = null;

  get getProfileLocal() {
    return this.profile;
  }

  clearProfile() {
    this.profile = null;
  }

  async getProfile() {
    try {
      let data = await this.http.apiRequest(
        EndpointService.profile.method,
        EndpointService.profile.path
      );
      this.profile = data.user;
      return Promise.resolve(data.user);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async updateProfile(pf) {
    try {
      delete pf.fullName;
      delete pf.createdAt;
      delete pf.updatedAt;

      let data = await this.http.apiRequest(
        EndpointService.updateUser.method,
        EndpointService.updateUser.path,
        pf
      );
      this.profile = data.user;
      return Promise.resolve(this.profile);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
