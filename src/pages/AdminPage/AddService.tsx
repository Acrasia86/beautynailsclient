import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, FormGroup, TextField } from '@mui/material';
import serviceStore from '../../stores/serviceStore';
import modalStore from '../../stores/modalStore';
import { v4 as uuidv4 } from "uuid";

const AddService = () => {

  let randomInt = Math.random() * 1000;
  let roundedInt = Math.floor(randomInt);
  const initialCheckoutState = {
    id: uuidv4(),
    productName: "",
    productDescription: "",
    timeToFinnish: "",
    price: 0
  };

  const [initCheckout, setInitCheckout] = useState(initialCheckoutState);
  const {createService, servicesArray, services} = serviceStore;
  const {closeModal} = modalStore;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInitCheckout({ ...initCheckout, [name]: value });
  };

  const onSubmit = () => {
    createService(initCheckout);
    closeModal();
  };

  useEffect(() => {
    services();
  }, [servicesArray.length])
  

  return (
    <div style={{height: '500px', display: 'flex', gap: '20px', flexDirection: 'column'}}>
      <FormGroup>
      <TextField onChange={handleInputChange} name='productName' placeholder='Servicenamn' id="outlined-basic" label="Servicenamn" variant="outlined" />
      </FormGroup>
      <FormGroup>
      <TextField onChange={handleInputChange} name="productDescription" placeholder='Servicebeskrivning' id="outlined-basic" label="Servicebeskrivning" variant="outlined" />
      </FormGroup>
      <FormGroup>
      <TextField onChange={handleInputChange} name="timeToFinnish" placeholder='Behandlingstid' id="outlined-basic" label="Behandlingstid" variant="outlined" />
      </FormGroup>
      <FormGroup>
      <TextField onChange={handleInputChange} name="price" placeholder='Pris' id="outlined-basic" label="Pris" variant="outlined" />
      </FormGroup>
      <Button onClick={onSubmit}>Lägg till service</Button>
    </div>
  )
}

export default observer(AddService);
