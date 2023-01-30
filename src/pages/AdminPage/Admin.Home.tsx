import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';

const AdminHome = () => {
    return (<>
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Hem</h1>
  </Box>
    </Box> </> );
}
 
export default AdminHome;