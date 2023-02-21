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
import DeleteIcon from "@mui/icons-material/Delete";
import serviceStore from '../../stores/serviceStore';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack'
import { observer } from 'mobx-react-lite';
import AddIcon from '@mui/icons-material/Add';
import modalStore from '../../stores/modalStore';
import AddService from '../../pages/AdminPage/AddService';
import EditService from '../../pages/AdminPage/EditService';


function AdminServicesList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const {openModal} = modalStore;


  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { servicesArray, services, removeService } = serviceStore;

  useEffect(() => {
    services();
  }, [servicesArray.length]);

  // bug
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Tjänster
        <AddIcon className='addNewService' onClick={() => openModal(<AddService />)} style={{marginLeft: '760px'}}/>
      </Typography>

      <Divider />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align='left'
                style={{ minWidth: '100px' }}>
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
              <TableCell
                align='left'
                style={{ minWidth: '100px' }}
              >
               Ta bort/Editera
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicesArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((service) => {
                return (
                  <TableRow key={service.id} hover role="checkbox" tabIndex={-1}>
                  <TableCell align='left'>
                    {service.productName}
                  </TableCell>
                  <TableCell align='left'>
                    {service.productDescription}
                  </TableCell>
                  <TableCell align='left'>
                    {service.timeToFinnish}
                  </TableCell>
                  <TableCell align='left'>
                    {service.price}
                  </TableCell>
                  <TableCell align='left'>
                  <Stack spacing={2} direction="row">
                          <EditIcon
                            key={service.id}
                            style={{
                              fontSize: "20px",
                              color:'#c9e552',
                              cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            onClick={() => {
                              openModal(<EditService service={service}/>)
                            }}
                          />
                          <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "#FF7276",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              removeService(service.id)
                            }}
                          />
                        </Stack>
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