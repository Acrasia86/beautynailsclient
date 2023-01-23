import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  services: string,
  cost: number,
  
) {
  return { id, date, name, services, cost };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Andersson',
    'Manikyr med gellack',
    371,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul Karlsson',
    'Fotmassage 30 min',
  2574,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Microblading', 253),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Nilsson',
    'Fransar',
    2000,
  ),
 
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Typography variant='h5'>Dagens bokningar</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell>Namn</TableCell>
            <TableCell>Tjänst</TableCell>
            <TableCell>Pris (kr)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.services}</TableCell>
              <TableCell>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}