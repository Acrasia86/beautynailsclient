import SideNav from '../../components/SideNav'
import Box from '@mui/material/Box';

const Dashboard = () => {
    return (<>
    <Box sx={{ display: 'flex' }}>
        <SideNav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Home</h1>
      </Box>
        </Box>
    </>);
}
 
export default Dashboard;