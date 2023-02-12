import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import serviceStore from '../stores/serviceStore';

const heights = [150];
<Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
</Box>

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PriceList() {
  const { servicesArray, services } = serviceStore;

  React.useEffect(() => {
    services();
  }, [servicesArray.length]);
  
  return (
    <>
      <Typography gutterBottom variant="h3" align='center' marginBottom={6}>Erbjudande</Typography>
      <Box component="div" sx={{ width: '90%', ml:'110px', mb:'80px' }}>
        <Masonry columns={4} spacing={2}>
          {servicesArray.map((servicesArray) => (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                {servicesArray.timeToFinnish} min
                </Typography>
                <Typography variant="h5" component="div">
                  {servicesArray.productName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {servicesArray.price} kr
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Läs mer</Button>
              </CardActions>
            </Card>
          ))}
        </Masonry>
      </Box>
    </>
  );
}