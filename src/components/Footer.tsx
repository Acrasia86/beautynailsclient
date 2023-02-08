import React from 'react'

import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer=() => {
  return (
    <Box component='div'
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor:'#555a54',
         color:'#f7f2ef'
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#f7f2ef" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="#f7f2ef" variant="subtitle1">
              {`${new Date().getFullYear()} A & J`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;