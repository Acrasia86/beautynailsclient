import Box from '@mui/material/Box';
import SideNav from '../../components/SideNav';
import AdminServicesList from '../../components/AdminComponents/AdminServicesList'
import { observer } from 'mobx-react';

const AdminServices = () => {
    return (
    <Box component="div" sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <AdminServicesList/>
  </Box>
    </Box> );
}
 
export default observer(AdminServices);