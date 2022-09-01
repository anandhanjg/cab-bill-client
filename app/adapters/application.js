import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';
import EndpointService from '../util/endpoint';
export default class ApplicationAdapter extends RESTAdapter {
  @service http;
  headers = this.http.tokenHeader;
  host = EndpointService.url;

  //   handleResponse(status,headers,payload){

  //     if(status===500){
  //         throw new Error(payload.error);
  //     }

  //     return super.handleResponse(...arguments);
  //   }
}
