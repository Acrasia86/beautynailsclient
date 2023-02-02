import { observer } from 'mobx-react-lite'
import * as React from 'react';
import dayjs, { Dayjs } from "dayjs";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import serviceStore from '../stores/serviceStore';
import { useEffect, useState } from 'react';


const Booking = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs("2022-04-07"));

  const [age, setAge] = useState('');
  const [chosenService, setChosenService] = useState(false);
  const [chosenDate, setChosenDate] = useState(false);

  const {servicesArray, services} = serviceStore;

  const handleChange = (event: SelectChangeEvent) => {
    setChosenService(true);
    setAge(event.target.value as string);
  };

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    setChosenDate(true);
  }

  const steps = [
    'Tjänst',
    'Tid',
    'Bekräfta',
  ];

  useEffect(() => {
    services();
  }, [servicesArray.length])

  return (
    <div>

<Box component="div" sx={{ width: '40%', marginLeft: '60px', marginTop: '40px' }}>
  
      <Stepper activeStep={chosenService === true && chosenDate === true ? 1 : 0 || chosenService === true ? 0 : -1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

    <FormControl style={{width: '30%', marginLeft: '125px', marginTop: '50px', marginBottom: '50px'}}>
  <InputLabel id="demo-simple-select-label">Välj en tjänst</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    {
      servicesArray.map((service) => {
        return (
          <MenuItem value={service.productName}>{service.productName}</MenuItem>
        )
      })
    }
  </Select>
</FormControl>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker
            date={date}
            disabled={!chosenService}
            onChange={(newDate) => handleDateChange(newDate)}
          />
        </Grid>
        <Grid item xs={12} md={5}>
        </Grid>
      </Grid>

    </LocalizationProvider>

    </div>
  );
}


export default observer(Booking);