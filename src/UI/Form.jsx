import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '5px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Form(props) {
  const classes = useStyles();

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

   /* Send Data */
  const addClickHandler = ( event ) => {
    console.log(`In Form Component, Name: ${name}, Email: ${email}, Web: ${web}, Location: ${location}`);
    props.formHandler(name, email, web, location);
    setName(``);
    setEmail(``);
    setWeb(``);
    setLocation(``);
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing={5}>
        <Grid item >
          <Input fullWidth placeholder="Name" inputProps={{ 'aria-label': 'description' }} value={name} onChange={nameHandler}/>
        </Grid>
        <Grid item >
          <Input fullWidth placeholder="Email" inputProps={{ 'aria-label': 'description' }} value={email} onChange={emailHandler}/>
        </Grid>
        <Grid item >
          <Input fullWidth placeholder="Web" inputProps={{ 'aria-label': 'description' }} value={web} onChange={webHandler}/>
        </Grid>
        <Grid item >
          <Input fullWidth placeholder="Location" inputProps={{ 'aria-label': 'description'}} value={location} onChange={locationHandler}/>
        </Grid>
        <Grid item >
          <Button fullWidth variant="contained" color="secondary" onClick={addClickHandler}>Add User</Button>
        </Grid>
      </Grid>
    </div>
  );
}
