import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  const latitude = '56.04332083738107';
  const longitude = '12.696538086506193';

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q="+latitude+","+longitude);
  }

  return (
    <Box component="div" sx={{ py: 5 }}>
      <CustomContainer>
        <CustomContainer>
          <Box component="div">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Adress
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
             <LocationOnIcon style={{cursor: 'pointer'}} onClick={showInMapClicked} />Järnvägsgatan 29
              <br/>
               25224 Helsingborg
            </Typography>
          </Box>

          <Box component='div'>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Öppettider
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
            Mån - Fre 10:00 - 19:00
            <br/>
            Lö 10:00 - 18:00
            <br/>
            </Typography>
          </Box>
 

          <Box component="div">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Kontakt
            </Typography>

            <FooterLink> <PhoneIcon/> 0704329119</FooterLink>
            <br />
            <FooterLink> <MailOutlineIcon/> beauty@nails.com</FooterLink>
            <br />

          </Box>

          <Box component="div">
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
             Följ oss
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Vi finns på sociala medier
            </Typography>
            <IconBox>
            <FacebookIcon style={{ cursor: "pointer" }}/>
              <InstagramIcon style={{ cursor: "pointer" }}/>
              <PinterestIcon style={{ cursor: "pointer" }}/>
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;