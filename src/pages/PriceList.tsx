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

export default function PriceList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { servicesArray, services } = serviceStore;

  React.useEffect(() => {
    services();
  }, [servicesArray.length]);
  
  return (
    <>
      <Typography gutterBottom variant="h3" align='center' marginBottom={6}> 
      <Divider>Erbjudande</Divider></Typography>
      <Box component="div" sx={{ width: '90%', ml:'110px', mb:'80px' }}>
        <Masonry columns={4} spacing={2}>
          {servicesArray.map((servicesArray) => (
            <Card sx={{ minWidth: 275, background:'#e1ddd2' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Uppskatta tid: {servicesArray.timeToFinnish} min
              </Typography>
              <Typography variant="h5" component="div">
              {servicesArray.productName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Pris: {servicesArray.price} kr
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{background:'#dde07d', color:'#555a54'}} onClick={handleOpen}>Läs mer</Button>
            </CardActions>
          </Card>
            
          ))}
        </Masonry>
      </Box>
  
      <div>
      <Modal
        open={open}
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
      </Modal>
    </div>
    </>
  );
}