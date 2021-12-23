import * as React from 'react';
import {UserModel} from "../../models"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { userInfo } from 'os';


interface IProps {
    users: Array<UserModel>
    setPag: React.Dispatch<React.SetStateAction<{
        page: number;
        results: number;
    }>>
}


export default function DataTable({users}:IProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full name</TableCell>
            <TableCell align="right">User name</TableCell>
            <TableCell align="right">Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
              </TableCell>
              <TableCell align="right">{user.login.username}</TableCell>
              <TableCell align="right">
                  <img src={user.picture.thumbnail} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
