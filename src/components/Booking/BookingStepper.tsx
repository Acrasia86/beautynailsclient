import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react'
import checkoutStore from '../../stores/checkoutStore';
import serviceStore from '../../stores/serviceStore';

const BookingStepper = () => {

    const {serviceChosen} = serviceStore;
    const {dateChosen, nextStepChosen, confirmChosen} = checkoutStore;

    const steps = [
        'Välj tjänst',
        'Välj tid',
        'Gå vidare',
        'Bekräfta',
      ];

  return (
    <Box component="div" sx={{ width: '235%', marginTop: '50px'}}>
    <Stepper activeStep={serviceChosen && dateChosen && nextStepChosen && confirmChosen ? 4 : 3
         && serviceChosen && dateChosen && nextStepChosen ? 3 : 2 
         && serviceChosen && dateChosen ? 2: 1 
         && serviceChosen ? 1 : 0} 
         alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
  )
}

export default observer(BookingStepper);
