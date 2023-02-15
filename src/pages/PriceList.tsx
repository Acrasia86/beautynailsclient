import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import serviceStore from '../stores/serviceStore';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import { observer } from 'mobx-react-lite';
import modalStore from '../stores/modalStore';
import ServiceInfo from '../components/ServiceInfo';
import ThankYou from '../components/Booking/ThankYou';

<Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>
</Box>

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  function PriceList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { servicesArray, services, getServiceById, serviceObj } = serviceStore;
  const {openModal} = modalStore;

  const testing = () => {
    servicesArray.map((x) => {
      return (getServiceById(x.id))
    })
    setOpen(true);
  }

  React.useEffect(() => {
    services();
  
  }, [servicesArray.length]);
  
  return (
    <>
      <Typography gutterBottom variant="h3" align='center' marginBottom={6}> 
      <Divider>Erbjudande</Divider></Typography>
      <Box component="div" sx={{ width: '90%', ml:'110px', mb:'80px' }}>
        <Masonry columns={4} spacing={2}>
          
          {servicesArray.map((servicesArra) => (
            <Card sx={{ minWidth: 275, background:'#e1ddd2' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Uppskatta tid: {servicesArra.timeToFinnish} min
              </Typography>
              <Typography variant="h5" component="div">
              {servicesArra.productName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Pris: {servicesArra.price} kr
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => openModal(<ServiceInfo servicesArra={servicesArra}/>)} size="small" sx={{background:'#dde07d', color:'#555a54'}} >Läs mer</Button>
            </CardActions>
          </Card>
            
          ))}
        </Masonry>
      </Box>
  
      <div>
      {/* <Modal
        open={() => testing}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          productName
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          productDescription
          </Typography>
        </Box>
      </Modal> */}
    </div>
    </>
  );
}

export default observer(PriceList);