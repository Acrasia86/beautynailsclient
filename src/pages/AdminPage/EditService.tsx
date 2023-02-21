import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Service } from '../../interfaces/Service';
import { v4 as uuidv4 } from "uuid";
import { Button, FormGroup, TextField } from '@mui/material';
import modalStore from '../../stores/modalStore';
import serviceStore from '../../stores/serviceStore';

interface Props {
    service: Service;
}

const EditService = ({service} :Props) => {

    const {closeModal} = modalStore;
    const {updateService} = serviceStore;

    const initialCheckoutState = {
        id: service.id,
        productName: service.productName,
        productDescription: service.productDescription,
        timeToFinnish: service.timeToFinnish,
        price: service.price
      };

    const [initCheckout, setInitCheckout] = useState(initialCheckoutState);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setInitCheckout({ ...initCheckout, [name]: value });
      };

      const onSubmit = () => {
        updateService(initCheckout);
        closeModal();
        console.log(initCheckout);
      };
    

  return (
    <div style={{height: '500px', display: 'flex', gap: '20px', flexDirection: 'column'}}>
    <FormGroup>
    <TextField onChange={handleInputChange} name='productName' id="outlined-basic" label="Servicenamn" variant="outlined" />
    </FormGroup>
    <FormGroup>
    <TextField onChange={handleInputChange}  name="productDescription" placeholder='Servicebeskrivning' id="outlined-basic" label="Servicebeskrivning" variant="outlined" />
    </FormGroup>
    <FormGroup>
    <TextField onChange={handleInputChange} name="timeToFinnish" placeholder='Behandlingstid' id="outlined-basic" label="Behandlingstid" variant="outlined" />
    </FormGroup>
    <FormGroup>
    <TextField onChange={handleInputChange}  name="price" placeholder='Pris' id="outlined-basic" label="Pris" variant="outlined" />
    </FormGroup>
    <Button onClick={onSubmit}>Uppdatera service</Button> 
  </div>
  )
}

export default observer(EditService);
