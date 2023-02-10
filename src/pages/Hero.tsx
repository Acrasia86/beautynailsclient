import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Canvas } from '@react-three/fiber'
import React from "react";
import NailPolis from "../components/NailPolish";
import Navbar from '../components/Navbar'

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box component="div" sx={{ minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box component="div" sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Vällkomen till Beauty Nails
            </Typography>
            <Title variant="h1">
            Skönhet är en attityd
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus dolorum fugiat delectus nulla dolore molestias quo similique, veniam eligendi?
            </Typography>
            <Button variant="contained">Boka tid</Button>
          </Box>

          <Box  component="div"sx={{ flex: "1.25" }}>
            <Canvas shadows>
        <NailPolis />
      </Canvas>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;