import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import SavingsIcon from '@mui/icons-material/Savings';
import Avatar from '@mui/material/Avatar';
import Calendar from '../../components/Calendar'
import CountUp from 'react-countup';
import userStore from '../../stores/userStore';
import { useEffect, useState } from 'react';
import checkoutStore from '../../stores/checkoutStore';
import { AnyARecord } from 'dns';
import serviceStore from '../../stores/serviceStore';
import store from '../../stores/store';
import { CheckoutService } from '../../interfaces/CheckoutService';
import { observer } from 'mobx-react';
import TotalIncome from './TotalIncome';
import NumberOfBookedCustomers from './NumberOfBookedCustomers';

const Dashboard = () => {

  const {getAllUsers, users, birthday, birthdays, user} = userStore;
  const {checkOutServices, checkoutService} = checkoutStore;
  const {servicesArray} = serviceStore;

  useEffect(() => {
    birthday();
    getAllUsers();
    checkOutServices();
    console.log(JSON.stringify(birthdays));
  }, [users.length, checkoutService.length, servicesArray.length, birthdays.length])

  return (<>

    <div className='admin-container'>
      <Box component="div" height={70} />
      <Box component="div" sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction='row'>
               <TotalIncome />
                <Card sx={{ minWidth: 49 + '%', height: 150 }} className='income2'>
                  <CardContent>
                    <div>
                      <SavingsIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                     {birthdays.map((bday) => (
                      bday.userName
                     ))}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#555a54' }}>
                      Kund som fyller år
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <NumberOfBookedCustomers />
            </Grid>
          </Grid>
          <Box component="div" height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ minheight: 60 + 'vh', background: '#f7f2ef' }}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                      Din kalender: 
                    </Typography>
                  <Calendar/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
         
                  <Card sx={{ height: 60 + 'vh', background: '#f7f2ef' }}>
                  <CardContent>
                    <div className='dashboad-info'>
                      <span className='info-title'>Användare</span>
                    </div>
                    {users.map((usr, i) => {
                return (
             <Stack key={i} spacing={2} direction='row'>
             <div className='info-icon'>
  
               <Avatar alt="Users">{usr.userName[0]}</Avatar>
             </div>
             <div className='dashboad-info'>
               <span>Hudvårdsterapeut</span>
               <br />
                <span>{usr.userName}</span>
             </div>
           </Stack>
                     )
                    })}
                  </CardContent>
                </Card>
      
  
            </Grid>
          </Grid>
        </Box >
      </Box > </div ></>);
}

export default observer(Dashboard);