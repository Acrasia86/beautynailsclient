import { Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import userStore from '../../stores/userStore';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const AllUsers = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([]);
    const {users, getAllUsers} = userStore;
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
     getAllUsers();
    }, [users.length])
  
    
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{ padding: "20px" }}
    >
      Användare
    </Typography>
    <Divider />
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
       
        <TableBody>
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((users, i) => {
              return (
                <TableRow key={i} hover role="checkbox" tabIndex={-1}>
                  <TableCell align='left'>
                    {users.userName}
                  </TableCell>
                  <TableCell  align='left'>
                    {users.birthday}
                  </TableCell>
                  <TableCell align='left'>
                  <Stack spacing={2} direction="row">
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
  )
}

export default observer(AllUsers);
