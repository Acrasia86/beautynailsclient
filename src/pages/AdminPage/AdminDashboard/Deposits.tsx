import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
        3,024.00 kr
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
    </React.Fragment>
  );
}