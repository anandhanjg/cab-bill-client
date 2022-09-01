import Model, { attr } from '@ember-data/model';

export default class TravelModel extends Model {
//   @attr('string') id;
  @attr('string') name;
  @attr('string') email;
  @attr('string') mobile;
  @attr('string') doorNo;
  @attr('string') street;
  @attr('string') city;
  @attr('string') addressId;
  @attr('string') pinCode;
  
}
