import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

const FormDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const data = props.data;

  /* Data from Inputs */
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [web, setWeb] = useState(``);
  const [location, setLocation] = useState(``);


  const nameHandler = ( event ) => {
    setName(event.target.value);
  }

  const emailHandler = ( event ) => {
    setEmail(event.target.value);
  }

  const webHandler = ( event ) => {
    setWeb(event.target.value);
  }

  const locationHandler = ( event ) => {
    setLocation(event.target.value);
  }

  const handleClickOpen = () => {
    setName(data.name);
    setEmail(data.email);
    setWeb(data.web);
    setLocation(data.location);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleUpdate(){
    console.log(`In DialogForm Component, Name: ${name}, Email: ${email}, Web: ${web}, Location: ${location}`);
    handleClose();
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        {props.children}
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{`${info.name} Info`}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={5}>
        <Grid item >
          <Input fullWidth inputProps={{ 'aria-label': 'description' }} value={name} onChange={nameHandler}/>
        </Grid>
        <Grid item >
          <Input fullWidth inputProps={{ 'aria-label': 'description' }} value={email} onChange={emailHandler}/>
        </Grid>
        <Grid item >
          <Input fullWidth inputProps={{ 'aria-label': 'description' }} value={web} onChange={webHandler}/>
        </Grid>
        <Grid item >
          <Input fullWidth inputProps={{ 'aria-label': 'description'}} value={location} onChange={locationHandler}/>
        </Grid>
      </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
            <Button onClick={handleUpdate} color="primary">Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
