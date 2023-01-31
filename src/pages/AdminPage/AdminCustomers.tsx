import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';

const AdminCustomers = () => {
    return (
    <Box component="div" sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Kunder</h1>
  </Box>
    </Box> );
}
 
export default  AdminCustomers;