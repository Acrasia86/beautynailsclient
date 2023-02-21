import { observer } from 'mobx-react-lite'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import checkoutStore from '../../stores/checkoutStore';
import { useEffect } from 'react';
import moment from "moment";
import { Typography } from '@mui/material';


const BookedCustomers = () => {

    const {checkoutService, checkOutServices} = checkoutStore;

    useEffect(() => {
        checkOutServices();
        console.log(checkoutService);
    }, [checkoutService.length])

  return (
    <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
        <h3 style={{marginLeft: '20px'}}>Bokade kunder</h3>
    { checkoutService.map((x) => (
    <ListItem key={x.id}>
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={moment(x.bookedDate).format("DD-MM-YYYY HH:mm")} secondary={x.product.productName} />
  </ListItem>
    ))

}
  </List>
  )
}

export default observer(BookedCustomers);
