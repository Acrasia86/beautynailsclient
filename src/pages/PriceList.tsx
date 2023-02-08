import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider"
import serviceStore from '../stores/serviceStore';
import { observer } from 'mobx-react-lite';


function AdminServicesList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1000);


  const { servicesArray, services} = serviceStore;

  useEffect(() => {
    services();
  }, [servicesArray.length]);

  console.log(JSON.stringify(servicesArray));

  return (
    <Paper elevation={24}  sx={{ width: '80%', overflow: 'hidden', m:'200px', background:'#e1ddd2' }}>
      <Typography
        gutterBottom
        variant="h4"
        align='center'
        component="div"
        sx={{ padding: "20px" }}
      >
        Behandlingar
      </Typography>
      <TableContainer sx={{ minHeight: 440, mt:'25px' }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell
                align='center'
                style={{ minWidth: '100px', }}>
                Tjänsten
              </TableCell>
              <TableCell
                align='center'
                style={{ minWidth: '100px' }}
              >
                Beskrivning
              </TableCell>
              <TableCell
                align='center'
                style={{ minWidth: '100px' }}
              >
                Tid (min)
              </TableCell>
              <TableCell
                align='center'
                style={{ minWidth: '100px' }}
              >
                Pris (kr)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicesArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((servicesArray) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell align='center'>
                      {servicesArray.productName}
                    </TableCell>
                    <TableCell key={servicesArray.id} align='center'>
                      {servicesArray.productDescription}
                    </TableCell>
                    <TableCell key={servicesArray.id} align='center'>
                      {servicesArray.timeToFinnish}
                    </TableCell>
                    <TableCell key={servicesArray.id} align='center'>
                      {servicesArray.price}
                    </TableCell>
                    <TableCell key={servicesArray.id} align='center'>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default observer(AdminServicesList);