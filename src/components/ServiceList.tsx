import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import serviceStore from '../stores/serviceStore';

const ServiceList = () => {

  const {servicesArray, services} = serviceStore;

  useEffect(() => {
    services();
    console.log(JSON.stringify(servicesArray));
  }, [servicesArray.length]);

  return (
    <div>
      {/* {servicesArray.map((service) => {
        return (
          <div>
          <div>{service.productName}</div>
          <div>{service.timeToFinnish}</div>
          <div>{service.productDescription}</div>
          <div>{service.avalaibleDate}</div>
          <div>{service.price}</div>
          <div>{service.imageUrl}</div>
          </div>

        )
      })} */}
    </div>
  )
}

export default observer(ServiceList);
