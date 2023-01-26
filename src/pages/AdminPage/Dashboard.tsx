import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AdminNavbar from '../../components/AdminComponents/AdminNavbar';
import AdminAccordion from '../../components/AdminComponents/AdminAccordion';
import Stack from '@mui/material/Stack';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import SavingsIcon from '@mui/icons-material/Savings';

const AdminHome = () => {
  return (<>
  <div className='admin-container'>
    <AdminNavbar />
    <Box height={70} />
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction='row'>
              <Card sx={{ minWidth: 49 + '%', height: 150 }} className='income1'>
                <CardContent>
                  <div>
                    <PaymentIcon />
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                    530 kr
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{color:'#555a54'}}>
                    Dagens inkomst
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + '%', height: 150 }} className='income2'>
                <CardContent>
                  <div>
                    <SavingsIcon />
                  </div>
                  <Typography gutterBottom variant="h5" component="div">
                    10030 kr
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" sx={{color:'#555a54'}}>
                    Månadsinkomst
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Stack spacing={2} direction='row'>
                    <div className='info-icon'>
                      <TaskAltIcon />
                    </div>
                    <div className='dashboad-info'>
                      <span className='info-title'>20 st.</span>
                      <br />
                      <span className='info-subtitle'>Inbokade kunder</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Stack spacing={2} direction='row'>
                    <div className='info-icon'>
                      <EventBusyIcon />
                    </div>
                    <div className='dashboad-info'>
                      <span className='info-title'>3 st.</span>
                      <br />
                      <span className='info-subtitle'>Avbokade kunder</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        <Box height={20} />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height: 60 + 'vh' }}>
              <CardContent>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 60 + 'vh' }}>
              <CardContent>
              <div className='dashboad-info'>
                      <span className='info-title'>Populära tjänster</span>
                    </div>
              <AdminAccordion/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box> </div></>);
}

export default AdminHome;