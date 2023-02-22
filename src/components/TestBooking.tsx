import {
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useState } from "react";
import checkoutStore from "../stores/checkoutStore";
import serviceStore from "../stores/serviceStore";
import { v4 as uuidv4 } from "uuid";
import UserInputs from "./Booking/UserInputs";
import ServiceDropDown from "./Booking/ServiceDropDown";
import BookingDatePicker from "./Booking/BookingDatePicker";
import UserFeedback from "./Booking/UserFeedback";
import BookingStepper from "./Booking/BookingStepper";
import { useNavigate } from "react-router-dom";
import userStore from "../stores/userStore";

const TestBooking = () => {


  const { servicesArray, services, serviceObj, setServiceChosen, service, setService, selectService } = serviceStore;
  const { createCheckout, dateChosen, setDateChosen, nextStepChosen, setConfirmChosen, confirmChosen } = checkoutStore;
  const { isLoggedIn, users } = userStore;
  const navigate = useNavigate();

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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInitCheckout({ ...initCheckout, [name]: value });
  };

  const handleDateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInitCheckout({ ...initCheckout, [name]: value });
      setDateChosen(true);
  };

  const onSubmit = () => {
    createCheckout(initCheckout);
      setConfirmChosen(true);
    navigate('/thankyou')
  };

  useEffect(() => {
    selectService(initCheckout.productId);
    services();
  }, [servicesArray.length, serviceObj, service, initCheckout]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
        <BookingStepper />
    
       <ServiceDropDown handleChange={handleChange}/>
       <BookingDatePicker handleDateChange={handleDateChange}/>
       </div>
       { nextStepChosen ?
       <div style={{display: 'flex', flexDirection: 'column'}}>
       <UserInputs handleInputChange={handleInputChange}/>
       <Button
          onClick={onSubmit}
          variant="contained"
          color="success"
          style={{marginLeft: '45px', position: 'absolute', bottom: '-400px'}}
        >
          Bekräfta
        </Button>
        </div>
        : null }
      </div>
      { dateChosen ? 
      <UserFeedback initCheckout={initCheckout}/>
      : null }
    </div>
  );
};

export default observer(TestBooking);
