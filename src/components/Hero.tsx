import * as React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRef} from 'react'

const theme = createTheme();

export default function Hero() {

  const booking= useRef(null);
  const scrollToSection = (elementRef:any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <main style={{height:'700px'}}>

        <Box
        component="div"
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="left"
              color="text.primary"
              gutterBottom
            >
              Lorem ipsum
            </Typography>
            <Typography variant="h5" align="left" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nibh viverra sollicitudin sed faucibus elit enim amet faucibus. Velit diam id odio fermentum risus amet at ultricies.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="left"
            >
              <Button variant="contained" color="success" onClick={() => scrollToSection(booking) }>Boka tid</Button>
              <Button variant="outlined"  color="success">Tjänster</Button>
            </Stack>
          </Container>
        </Box>
      </main>
      <section ref={booking} className="booking" style={{height:'1000px',background:'white', color: "red"}}>
        <h1>Här kommer bokigssida</h1>
      </section>
    </ThemeProvider>
  );
}