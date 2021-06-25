import React, { useState, useEffect } from 'react';
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
import InfoDialog from './Dialog';
import { Link } from 'react-router-dom';

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
  const[data, setData] = useState([]);
  const userData = props;

  useEffect ( () => {
    setData(userData.data.data);
  }, [userData.data.data]); 

  const deletedUserHandler = (index) => {
    // console.log('Item will be deleted: ', index);
    const usersUpdate = [...data];
    usersUpdate.splice(index, 1);
    setData(usersUpdate);
  }

  const viewUserHandler = ( index ) => {
    return data[index];
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Web</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              
              data?.map( (user, index) => {
                return(
                  <StyledTableRow key={index} tabIndex={-1}>
                    {
                      Object.values(user).map((value, index) => {
                        return(
                          index === 0 ? <StyledTableCell key={index}>{value}</StyledTableCell> : <StyledTableCell align="right" key={index}>{value}</StyledTableCell>
                        );
                      })
                    }
                    <StyledTableCell align="right" className={classes.actions}>
                      <InfoDialog info={viewUserHandler(index)}>
                        <VisibilityOutlinedIcon style={{ color: yellow[800] }}/>
                      </InfoDialog>

                      <Link color="primary" to={'/update/' + index}>
                        <EditOutlinedIcon style={{ color: green[500] }} />
                      </Link>

                      <IconButton onClick={() => {deletedUserHandler(index);}}><DeleteOutlineOutlinedIcon style={{ color: red[500] }}/></IconButton>
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
