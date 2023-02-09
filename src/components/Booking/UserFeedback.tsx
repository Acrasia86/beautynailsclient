import { observer } from "mobx-react-lite";
import React from "react";
import serviceStore from "../../stores/serviceStore";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import checkoutStore from "../../stores/checkoutStore";
import moment from "moment";

interface Props {
  initCheckout: {
    id: string;
    productId: number;
    bookedDate: string;
    address: string;
    zipCode: string;
    phoneNumber: string;
  };
}

const UserFeedback = ({ initCheckout }: Props) => {
  const { serviceObj } = serviceStore;
  const { setNextStepChosen } = checkoutStore;

  return (
    <div style={{position: 'absolute', bottom: '60px', left: '100px'}}>
      <h4>Service: {serviceObj?.productName}</h4>
      <h4>Beskrivning: {serviceObj?.productDescription}</h4>
      <h4>Pris: {serviceObj?.price} kr</h4>
      <h4>Tid: {serviceObj?.timeToFinnish} min</h4>
      <h4>Vald tid: {moment(initCheckout.bookedDate).format("DD-MM-YYYY hh:mm")}</h4>
      <Button style={{marginTop: '30px'}} variant="contained" color="success" onClick={() => setNextStepChosen(true)}>
        Nästa steg
      </Button>
    </div>
  );
};

export default observer(UserFeedback);
