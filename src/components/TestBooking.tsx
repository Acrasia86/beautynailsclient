import { Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { observer } from "mobx-react-lite"
import { ChangeEvent, useEffect, useState } from "react";
import checkoutStore from "../stores/checkoutStore";
import serviceStore from "../stores/serviceStore";
import { v4 as uuidv4 } from 'uuid';
import userStore from "../stores/userStore";
import { Service } from "../interfaces/Service";

const TestBooking = () => {

    const [service, setService] = useState('');
    
    const {servicesArray, services, selectService, serviceObj} = serviceStore;
    const {createCheckout} = checkoutStore;
    const {user, getUser} = userStore;


    const initialCheckoutState = {
        id: uuidv4(),
        productId: serviceObj?.id,
        bookedDate: '',
        dailySum: 0,
        monthlySum: 0,
        address: '',
        zipCode: '',
        phoneNumber: ''
    }
    const [initCheckout, setInitCheckout] = useState(initialCheckoutState)
  
   
    const handleChange = (event: SelectChangeEvent) => {
      const {name, value} = event.target;
        setService(event.target.value as string);
        setInitCheckout({...initCheckout, [name]: value})
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setInitCheckout({...initCheckout, [name]: value})
      }

      const onSubmit = () => {
        createCheckout(initCheckout);
      }
    


    useEffect(() => {
       
        servicesArray.map((serv) => {
            if(serv.productName.includes(service)) {
                selectService(serv.id)
            }
        })
        getUser();
        services();

    }, [servicesArray.length, serviceObj, service, initCheckout])

  return (
    <div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
<div>

<FormControl>
    <Input disabled placeholder={user?.userName} id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Användare</FormHelperText>
  </FormControl>
  <FormControl>
  <Input id="my-input" onChange={handleInputChange} name="address" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Adress</FormHelperText>
  </FormControl>
  <FormControl>
  <Input id="my-input" onChange={handleInputChange} name="zipCode" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">PostKod</FormHelperText>
  </FormControl>
  <FormControl>
  <Input id="my-input" onChange={handleInputChange} name="phoneNumber" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">Telefonnummer</FormHelperText>
  </FormControl>
</div>
   <FormControl>
  <InputLabel id="demo-simple-select-label">Välj en tjänst</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="productId"
    value={service}
    label="Age"
    onChange={handleChange}
  >
    { 
      servicesArray.map((service) => {
        return (
          <MenuItem id={`${service.id}`} value={service.id}>{`${service.productName} ${service.price} kr`}</MenuItem>
        )
      })
    }
  </Select>
</FormControl>

<TextField
    id="datetime-local"
    label="Välj tid"
    type="datetime-local"
    name="bookedDate"
    defaultValue={new Date()}
    onChange={handleInputChange}
    InputLabelProps={{
      shrink: true,
    }}
  />
  
  <Button style={{marginRight: '225px', marginTop: '50px'}} onClick={onSubmit} variant="contained" color="success">Bekräfta</Button>
</div>
<div>
    <h4>Service: {serviceObj?.productName}</h4>
    <h4>Beskrivning: {serviceObj?.productDescription}</h4>
    <h4>Pris: {serviceObj?.price} kr</h4>
    <h4>Tid: {serviceObj?.timeToFinnish} min</h4>
    <h4>Bokad tid: {initCheckout.bookedDate}</h4>
    <h4>ID: {serviceObj?.id}</h4>
</div>
    </div>
  )
}

export default observer(TestBooking);