import ApplicationSerializer from './application';

export default class TravelSerializer extends ApplicationSerializer {
  serialize() {
    let json = super.serialize(...arguments);

    json.address = {
      id: json.addressId,
      doorNo: json.doorNo,
      street: json.street,
      city: json.city,
      pinCode: json.pinCode,
    };

    return json;
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.travel) {
      console.log(payload.travel);
      payload.addressId = payload.address.id;
      payload.doorNo = payload.address.doorNo;
      payload.city = payload.address.city;
      payload.street = payload.address.street;
      payload.pinCode = payload.address.pinCode;
    }

    return super.normalizeResponse(...arguments);
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload.travels.forEach((travel) => {
      travel.addressId = travel.address.id;
      travel.doorNo = travel.address.doorNo;
      travel.city = travel.address.city;
      travel.street = travel.address.street;
      travel.pinCode = travel.address.pinCode;
    });

    return super.normalizeArrayResponse(...arguments);
  }
}
