import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link1 from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NailPolish from "../components/NailPolish";
import Face2Icon from "@mui/icons-material/Face2";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Canvas } from "@react-three/fiber";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import modalStore from "../stores/modalStore";
import LoginForm from "../features/users/LoginForm";
import RegisterForm from "../features/users/RegisterForm";
import { observer } from "mobx-react-lite";
import userStore from "../stores/userStore";
import { Link } from "react-router-dom";
import Face3 from "@mui/icons-material/Face3";


function Main() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { isLoggedIn, user, logout, role } = userStore;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { openModal } = modalStore;

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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component="header" position="relative">
      <Box component="nav" position="absolute" top="0.5rem" width="100%">
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
              sx={{ listStyle: "none" }}
            >
              <Box component="li">
                <Typography
                  component={Link1}
                  href="#"
                  variant="button"
                  color="#555a54"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Hem
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  component={Link1}
                  href="#"
                  variant="button"
                  color="#555a54"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Erbjudande
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  component={Link1}
                  href="#"
                  variant="button"
                  color="#555a54"
                  fontWeight="regular"
                  p={1}
                  onClick={(e) => e.preventDefault()}
                >
                  Kontakt
                </Typography>
              </Box>
            </Box>
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
                 
                  
                    <MenuItem  onClick={handleCloseNavMenu}>
                  
                      
                    </MenuItem>
                 
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
                      {user?.displayName}
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
                      onClick={() => openModal(<LoginForm />)}
                    >
                      {" "}
                      <Typography textAlign="center">Logga in</Typography>{" "}
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={logout}>
                      {" "}
                      <Typography textAlign="center">Logga ut</Typography>{" "}
                    </MenuItem>
                  )}{" "}
                  <MenuItem
                    style={{ textDecoration: "none" }}
                    onClick={() => openModal(<RegisterForm />)}
                  >
                    {" "}
                    <Typography textAlign="center">Skapa konto</Typography>{" "}
                  </MenuItem>{" "}
                  {isLoggedIn ? (
                    <MenuItem onClick={handleCloseUserMenu}>
                      {" "}
                      <Link to="/admin">
                        {" "}
                        <Typography textAlign="center">Admin</Typography>{" "}
                      </Link>{" "}
                    </MenuItem>
                  ) : null}{" "}
                </Menu>{" "}
              </Box>
              {/* <Box component="div">
                                <Typography
                                    component={Link1}
                                    href="#"
                                    variant="button"
                                    p={1}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Box component="div" color="#555a54"><div>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleOpenNavMenu}
                                        >
                                        <Face2Icon />
                                        </Button>
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
                                    </div></Box>
                                </Typography>

                            </Box> */}
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box component="div" display="flex" alignItems="center" minHeight="100vh">
        <Canvas>{/* <NailPolish /> */}</Canvas>
        <Container>
          <Grid
            container
            item
            xs={12}
            md={7}
            lg={6}
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h1" color="#555a54" mb={3}>
              EXPERTER PÅ SKÖNHET
            </Typography>
            <Typography>
              Stort utbud professionella skönhetsbehandlingar från våra
              Fransstylister, Nagelterapeuter, Laserterapeuter, Makeup artister,
              Medicinska fotvårdare och Auktoriserade Hudterapeuter
            </Typography>
            <Stack direction="row" spacing={1} mt={3}>
              <Button variant="contained" color="success">
                Booka tid
              </Button>
              <Button variant="outlined" color="secondary">
                Tjänster
              </Button>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Main;
