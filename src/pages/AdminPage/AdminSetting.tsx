import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';

const AdminSetting = () => {
    return ( <Box sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Inställningar</h1>
  </Box>
    </Box> );
}
 
export default AdminSetting;