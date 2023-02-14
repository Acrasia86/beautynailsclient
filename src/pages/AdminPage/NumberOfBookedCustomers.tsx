import { Card, CardContent, Grid, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import checkoutStore from '../../stores/checkoutStore';

const NumberOfBookedCustomers = () => {

    const { allCheckouts, checkouts } = checkoutStore;

    useEffect(() => {
        allCheckouts();
      }, [checkouts.length])

  return (

    <Stack spacing={2}>
      <Card sx={{ maxWidth: 345, background: '#f7f2ef' }}>
        <CardContent>
          <Stack spacing={2} direction='row'>
            <div className='info-icon'>
              <TaskAltIcon />
            </div>
            <div className='dashboad-info'>
              <span className='info-title'>{checkouts.length}.</span>
              <br />
              <span className='info-subtitle'>Inbokade kunder</span>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </Stack>

  )
}

export default observer(NumberOfBookedCustomers);
