import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Divider, Grid, Typography } from '@mui/material';
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
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
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
  const { openModal } = modalStore;

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

      <Grid container item xs={12} lg={6} justifyContent="center" mx="auto" textAlign="center">
        <Typography style={{marginTop: '400px', marginBottom: '50px'}} variant="h2" mb={2}>
          Våra erbjudande
        </Typography>
      </Grid>
      <Box component="div" sx={{ width: '90%', ml: '70px', mb: '80px' }}>
        <Masonry columns={4} spacing={2}>
          {servicesArray.map((servicesArra) => (
            <Card sx={{ minWidth: 275, background: '#e1ddd2' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Uppskattad tid: {servicesArra.timeToFinnish} min
                </Typography>
                <Typography variant="h5" component="div">
                  {servicesArra.productName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Pris: {servicesArra.price} kr
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => openModal(<ServiceInfo servicesArra={servicesArra} />)} size="small" sx={{ background: '#dde07d', color: '#555a54' }} >Läs mer</Button>
              </CardActions>
            </Card>

          ))}
        </Masonry>
      </Box>
      <Divider sx={{ my: 6 }} />
      <div>
      </div>
    </>
  );
}

export default observer(PriceList);