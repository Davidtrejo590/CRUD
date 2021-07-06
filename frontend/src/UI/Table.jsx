import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { green, red, yellow } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default function TableUsers(props) {
  const classes = useStyles();

  // States for Data
  const userData = props.data;
  console.log(userData)

  const deletedUserHandler = (idUser) => {
    console.log('Item will be deleted: ', idUser);
    axios.delete('http://localhost:4000/api/users/' + idUser);
    window.location.href = '/';
  }

  const viewUserHandler = (idUser) => {
    axios.get('http://localhost:4000/api/users/' + idUser)
      .then(request => {
        window.location.href = '/info/' + idUser;
      })
  }

  const editUserHandler = (idUser) => {
    window.location.href = '/update/' + idUser;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Web</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {

            userData?.map((user, index) => {
              return (
                <StyledTableRow key={index} tabIndex={-1}>
                  {
                    Object.values(user).map((value, index) => {
                      return (
                        index === 4 ? <StyledTableCell key={index}></StyledTableCell> : <StyledTableCell align="right" key={index}>{value}</StyledTableCell>
                      );
                    })

                  }
                  <StyledTableCell align="right" className={classes.actions}>
                    <IconButton onClick={() => { viewUserHandler(user.id); }}><VisibilityOutlinedIcon style={{ color: yellow[800] }} /></IconButton>
                    <IconButton onClick={() => { editUserHandler(user.id);}}>
                        <EditOutlinedIcon style={{ color: green[500] }} />
                    </IconButton>
                    <IconButton onClick={() => { deletedUserHandler(user.id); }}><DeleteOutlineOutlinedIcon style={{ color: red[500] }} /></IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
