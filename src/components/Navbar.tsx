import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DiamondIcon from '@mui/icons-material/Diamond';
import Face3Icon from '@mui/icons-material/Face3';
import userStore from '../stores/userStore';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import modalStore from '../stores/modalStore';
import LoginForm from '../features/users/LoginForm';
import RegisterForm from '../features/users/RegisterForm';



function Navbar() {
  const pages = ['Hem', 'Prislista', 'Kontakta oss'];
const settings = ['Logga in','Skapa ett konto','Admin'];
const {isLoggedIn, user, logout, role} = userStore;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {openModal} = modalStore;

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='inherit'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DiamondIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#132F3A',
              textDecoration: 'none',
            }}
          >
            Beauty Nails
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <DiamondIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Beauty Nails
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#132F3A', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            {isLoggedIn ? (<MenuItem style={{marginLeft: '300px'}}><Typography textAlign='center'>Välkommen {user?.displayName}</Typography></MenuItem>)
            : (null)}       
                    
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Öppna instälningar">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Face3Icon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                {!isLoggedIn ? 
                <MenuItem style={{textDecoration: 'none'}}  onClick={() => openModal(<LoginForm />)}>
                  <Typography textAlign="center">Logga in</Typography>
                </MenuItem>
                : 
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logga ut</Typography>
                </MenuItem> 
                }
                <MenuItem style={{textDecoration: 'none'}}  onClick={() => openModal(<RegisterForm />)}>
                  <Typography textAlign="center">Skapa konto</Typography>
                </MenuItem>
                { isLoggedIn ?
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to='/admin'>
                  <Typography textAlign="center">Admin</Typography>
                  </Link>
                </MenuItem>
                : null}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default observer(Navbar);