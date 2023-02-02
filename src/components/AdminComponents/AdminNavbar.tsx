import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import DiamondIcon from '@mui/icons-material/Diamond';


const AppBar = styled(MuiAppBar, {})
  (({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
  }));

export default function AdminNavbar() {
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#555a54', color: '#f7f2ef' }}>
        <Toolbar>
        <DiamondIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#f7f2ef' }} />
          <Typography
               variant="h6"
               noWrap
               component="a"
               href="/"
            sx={{ display: { xs: 'none', sm: 'block',  color: '#f7f2ef' } }}
          >
            Beauty Nails Dashboard
          </Typography>

          
        </Toolbar>
      </AppBar> 
}