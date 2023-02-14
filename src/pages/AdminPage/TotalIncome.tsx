import { Card, CardContent, Typography } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import checkoutStore from '../../stores/checkoutStore';

const TotalIncome = () => {

    const [sum, setSum] = useState<any>();
    let totalSum = 0;
    const {checkOutServices, checkoutService} = checkoutStore;

    useEffect(() => {

        checkOutServices();
        checkoutService.map((serv) => (
           totalSum += Number(serv.product.price)
        ))
        setSum(totalSum);
      }, [checkoutService.length, sum])

  return (
  
          <Card sx={{ minWidth: 49 + '%', height: 150 }} className='income1'>
                  <CardContent>
                    <div>
                      <PaymentIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      <CountUp start={0} end={sum} duration={1.1}></CountUp> kr
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#555a54' }}>
                      Total inkomst
                    </Typography>
                  </CardContent>
                </Card>

  )
}

export default observer(TotalIncome);
