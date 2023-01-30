import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import serviceStore from '../../stores/serviceStore';
import EditIcon from '@mui/icons-material/Edit';
import OneService from '../OneService'
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';


function AdminServicesList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { servicesArray, services } = serviceStore;

  useEffect(() => {
    services();
  }, [servicesArray.length]);

  console.log(JSON.stringify(servicesArray));

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Tjänster
      </Typography>
      <Divider />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align='left'
                style={{ minWidth: '100px' }}
              >
                Namn
              </TableCell>
              <TableCell
                align='left'
                style={{ minWidth: '100px' }}
              >
                Beskrivning
              </TableCell>
              <TableCell
                align='left'
                style={{ minWidth: '100px' }}
              >
                Tid (min)
              </TableCell>
              <TableCell
                align='left'
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
                    <TableCell align='left'>
                      {servicesArray.productName}
                    </TableCell>
                    <TableCell align='left'>
                      {servicesArray.productDescription}
                    </TableCell>
                    <TableCell align='left'>
                      {servicesArray.timeToFinnish}
                    </TableCell>
                    <TableCell align='left'>
                      {servicesArray.price}
                    </TableCell>
                    <TableCell align='left'>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                      <EditIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default observer(AdminServicesList);