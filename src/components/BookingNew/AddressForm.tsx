import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ServiceDropDown from '../Booking/ServiceDropDown';
import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import serviceStore from '../../stores/serviceStore';
import checkoutStore from '../../stores/checkoutStore';
import { observer } from 'mobx-react';

 function AddressForm() {

  const { servicesArray, services, serviceObj, setServiceChosen, service, setService, selectService } = serviceStore;
  const { createCheckout, dateChosen, setDateChosen, nextStepChosen, setConfirmChosen, confirmChosen } = checkoutStore;

  const initialCheckoutState = {
    id: uuidv4(),
    productId: uuidv4(),
    bookedDate: "",
    address: "",
    zipCode: "",
    phoneNumber: ""
  };

  const [initCheckout, setInitCheckout] = useState(initialCheckoutState);

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setService(event.target.value as string);
    setInitCheckout({ ...initCheckout, [name]: value });
    setServiceChosen(true);
  };

  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Välj en tjänst
    </Typography>
    <Grid container spacing={3}>
     <ServiceDropDown handleChange={handleChange}/>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cardNumber"
          label="Card number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="expDate"
          label="Expiry date"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          id="cvv"
          label="CVV"
          helperText="Last three digits on signature strip"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Remember credit card details for next time"
        />
      </Grid>
    </Grid>
  </React.Fragment>
  );
}

export default observer(AddressForm);