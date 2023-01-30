import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';
import AdminServicesList from '../../components/AdminComponents/AdminServicesList'

const AdminServices = () => {
    return (
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <AdminServicesList/>
  </Box>
    </Box> );
}
 
export default AdminServices;