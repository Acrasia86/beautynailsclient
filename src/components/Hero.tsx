import * as React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <main>

        <Box
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
              <Button variant="contained" color="success">Boka tid</Button>
              <Button variant="outlined" color="success">Tjänster</Button>
            </Stack>
          </Container>
        </Box>

      </main>
    </ThemeProvider>
  );
}