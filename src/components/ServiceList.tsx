import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import serviceStore from '../stores/serviceStore';
import OneService from './OneService';

const ServiceList = () => {

  const {servicesArray, services} = serviceStore;

  useEffect(() => {
    services();
  }, [servicesArray.length]);

  return (
    <div>
      {servicesArray.map((service) => (
        <OneService service={service}/>
      ))}
    </div>
  )
}

export default observer(ServiceList);
