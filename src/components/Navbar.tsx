import { Box, Button, Container, Grid, Menu, MenuItem, Typography, IconButton } from '@mui/material'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef, useState } from 'react'
import NailPolish from "../components/NailPolish";
import Face2Icon from "@mui/icons-material/Face2";
import DiamondIcon from "@mui/icons-material/Diamond";
import Link1 from "@mui/material/Link";
import modalStore from '../stores/modalStore';
import store from '../stores/store';
import userStore from '../stores/userStore';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../features/users/LoginForm';
import RegisterForm from '../features/users/RegisterForm';
import serviceStore from '../stores/serviceStore';
import checkoutStore from '../stores/checkoutStore';

const Navbar = () => {

    const ref = useRef<HTMLInputElement>(null);
    const scrollToBottom = (count: number) => {
      if (ref.current) {
        window.scrollTo({
          behavior: "smooth",
          top: ref.current.scrollTop += count
        });
      }
    }

    const [role, setRole] = useState<[]>([]);
    const { openModal } = modalStore;
    const {token} = store;
    const { setServiceChosen, setService } = serviceStore;
    const { setConfirmChosen, setDateChosen, setNextStepChosen } = checkoutStore;
    const { isLoggedIn, user, logout, getUser, getAllUsers, users} = userStore;
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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

      const handleLogout = () => {
        logout();
        handleCloseUserMenu();
        setServiceChosen(false);
        setDateChosen(false);
        setNextStepChosen(false);
        setConfirmChosen(false);
        setService('');
      }

      const handleLogin = () => {
        openModal(<LoginForm />)
        handleCloseUserMenu();
      }

      const handleRegister = () => {
        openModal(<RegisterForm />)
        handleCloseUserMenu();
      }


    useEffect(() => {
        fetch('http://localhost:5235/api/account/getrole', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + store.token,
          }
        }).then(res => res.json())
          .then(data => setRole(data));
  }, [role.length, store.token?.length, users.length])

  return (
    <Container>
    <Grid container flexDirection="row" alignItems="center">
      <DiamondIcon
        sx={{
          display: { xs: "none", md: "flex" },
          mr: 1,
          color: "#318162",
        }}
      />
      <Typography
        component={Link1}
        href="#"
        variant="button"
        color="#555a54"
        fontWeight="regular"
        py={0.8125}
        mr={2}
      >
        Beauty Nails
      </Typography>
      <Button
        variant="outlined"
        sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
      >
        <Box component="i" color="#555a54" className="fas fa-bars" />
      </Button>
      <Box
        component="ul"
        display={{ xs: "none", lg: "flex" }}
        p={0}
        my={0}
        mx="auto"
        sx={{ listStyle: "none"}}
      >
        
        <Box component="li">
          <Typography
          style={{cursor: 'pointer', textDecoration: 'underline', position: 'absolute', top: '0px', left: '480px'}}
            variant="button"
            color="#555a54"
            fontWeight="regular"
            p={1}
            onClick={() => scrollToBottom(1350)}
          >
            Erbjudande
          </Typography>
        </Box>
        <Box component="li">
          <Typography
            style={{cursor: 'pointer', textDecoration: 'underline', position: 'absolute', top: '0px', left: '650px'}}
            variant="button"
            color="#555a54"
            fontWeight="regular"
            p={1}
            onClick={() => scrollToBottom(2400)}
          >
            Kontakt
          </Typography>
        </Box>
      </Box>
      {
      role.map((x: any) => {
        if(x === 'Admin' && token !== null && isLoggedIn) {
          return (
            <Link to='/admin'><div style={{position: 'absolute', top: '10px', left: '900px'}}>Admin</div></Link>
          )
        }
      })
      }

      <Box
        component="ul"
        display={{ xs: "none", lg: "flex" }}
        p={0}
        m={0}
        sx={{ listStyle: "none" }}
      >
        <Box
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          {" "}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            {" "}
            <Face2Icon />{" "}
          </IconButton>{" "}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
          
           
          </Menu>{" "}
        </Box>{" "}
        <DiamondIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        />{" "}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {" "}
          Beauty Nails{" "}
        </Typography>{" "}
        <Box   
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
         
         
          {isLoggedIn ? (
            <MenuItem sx={{ marginLeft: "500px" }}>
              <Typography textAlign="center">
                {user?.userName}
              </Typography>
            </MenuItem>
          ) : null}{" "}
        </Box>{" "}
        <Box component="div" sx={{ flexGrow: 0 }}>
         
        
            <IconButton
              className="personIcon"
              onClick={handleOpenUserMenu}
              sx={{ p: 0 }}
            >
              
              <Face2Icon />
            </IconButton>

          <Menu
            sx={{ mt: "45px", ml: "40px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            {" "}
            {!isLoggedIn ? (
              <MenuItem
                style={{ textDecoration: "none" }}
                onClick={handleLogin}
              >
                {" "}
                <Typography textAlign="center">Logga in</Typography>{" "}
              </MenuItem>
            ) : (
              <MenuItem onClick={handleLogout}>
                {" "}
                <Typography textAlign="center">Logga ut</Typography>{" "}
              </MenuItem>
            )}{" "}
            <MenuItem
              style={{ textDecoration: "none" }}
              onClick={handleRegister}
            >
              {" "}
              <Typography ref={ref} textAlign="center">Skapa konto</Typography>{" "}
            </MenuItem>{" "}
          </Menu>{" "}
        </Box>
      </Box>
    </Grid>
  </Container>
  )
}

export default observer(Navbar)
