import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import serviceStore from "../../stores/serviceStore";
import { v4 as uuidv4 } from "uuid";
import { Button, Box, Typography } from "@mui/material";
import checkoutStore from "../../stores/checkoutStore";
import moment from "moment";
import userStore from "../../stores/userStore";

interface Props {
  initCheckout: {
    id: string;
    productId: string;
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
    <Box component="div" sx={{marginLeft: '100px', marginTop: '30px'}}>
      <Typography>Tjänsten: {serviceObj?.productName}</Typography>
      <Typography>Beskrivning: {serviceObj?.productDescription}</Typography>
      <Typography>Pris: {serviceObj?.price} kr</Typography>
      <Typography>Det tar: {serviceObj?.timeToFinnish} min</Typography>
      <Typography>Tid: {moment(initCheckout.bookedDate).format("DD-MM-YYYY HH:mm")}</Typography>

      <Button sx={{marginTop: '30px', background:'#c9e552', color:'#555a54' }} onClick={() => setNextStepChosen(true)}>
        Nästa steg
      </Button>

    </Box>

  );
};

export default observer(UserFeedback);
