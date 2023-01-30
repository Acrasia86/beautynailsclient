import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AdminNavbar from '../../components/AdminComponents/AdminNavbar';
import Stack from '@mui/material/Stack';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import SavingsIcon from '@mui/icons-material/Savings';
import Avatar from '@mui/material/Avatar';
import Calendar from '../../components/Calendar'
import CountUp from 'react-countup';

const Dashboard = () => {

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
                      <CountUp start={0} end={100} duration={1.1}></CountUp> kr
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#555a54' }}>
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
                      <CountUp start={0} end={20000} duration={1.1}></CountUp> kr
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#555a54' }}>
                      Månadsinkomst
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345, background: '#f7f2ef' }}>
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
                <Card sx={{ maxWidth: 345, background: '#f7f2ef' }}>
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
                    <span className='info-title'>Personalen</span>
                  </div>
                  <Stack spacing={2} direction='row'>
                    <div className='info-icon'>
                      <Avatar alt="Petra Svensson" src="/static/images/avatar/4.jpg" />
                    </div>
                    <div className='dashboad-info'>
                      <span>Hudvårdsterapeut</span>
                      <br />
                      <span>Petra Svensson</span>
                    </div>
                  </Stack>
                  <Stack spacing={2} direction='row'>
                    <div className='info-icon'>
                      <Avatar alt="Ann Andersson" src="/static/images/avatar/4.jpg" />
                    </div>
                    <div className='dashboad-info'>
                      <span>Nagelterapeut</span>
                      <br />
                      <span>Ann Andersson</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box >
      </Box > </div ></>);
}

export default Dashboard;