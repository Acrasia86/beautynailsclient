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


const Booking = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs("2022-04-07"));

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const steps = [
    'Tjänst',
    'Tid',
    'Bekräfta',
  ];

  return (
    <div>

<Box component="div" sx={{ width: '40%', marginLeft: '60px' }}>
      <Stepper activeStep={0} alternativeLabel>
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
    <MenuItem value={10}>Naglar</MenuItem>
    <MenuItem value={20}>Mer naglar</MenuItem>
    <MenuItem value={30}>Ännu mer naglar</MenuItem>
  </Select>
</FormControl>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
        </Grid>
      </Grid>
    </LocalizationProvider>
    </div>
  );
}


export default observer(Booking);