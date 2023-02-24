import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NailPolish from "../components/NailPolish";
import { Canvas } from "@react-three/fiber";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";

function Main() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const ref = useRef<HTMLInputElement>(null);

  const scrollToBottom = (count: number) => {
    if (ref.current) {
      window.scrollTo({
        behavior: "smooth",
        top: (ref.current.scrollTop += count),
      });
    }
  };

  return (
    <Box component="header" position="relative">
      <Box component="nav" position="absolute" top="0.5rem" width="100%"></Box>
      <Canvas><NailPolish /></Canvas>
      <Box
        style={{
          position: "absolute",
          bottom: "-30px",
          width: "50%",
          left: "50px",
        }}
        component="div"
        display="flex"
        alignItems="center"
        minHeight="100vh"
      >
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
            <Typography variant="h1" ref={ref} color="#555a54" mb={3}>
              EXPERTER PÅ SKÖNHET
            </Typography>
            <Typography>
              Stort utbud professionella skönhetsbehandlingar från våra
              Fransstylister, Nagelterapeuter, Laserterapeuter, Makeup artister,
              Medicinska fotvårdare och Auktoriserade Hudterapeuter
            </Typography>
            <Stack direction="row" spacing={1} mt={3}>
              <Button
                onClick={() => scrollToBottom(650)}
                variant="contained"
                color="success"
              >
                Booka tid
              </Button>
              <Button
                onClick={() => scrollToBottom(1350)}
                variant="outlined"
                color="secondary"
              >
                Tjänster
              </Button>
            </Stack>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default observer(Main);
