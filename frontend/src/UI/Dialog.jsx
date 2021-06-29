import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';

const InfoDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const info = props.info;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <DialogTitle id="alert-dialog-title">{`${info.name} Info`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Name: ${info.name}`}<br/>
            {`Email: ${info.email}`}<br/>
            {`Web: ${info.web}`}<br/>
            {`Location: ${info.location}`}<br/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default InfoDialog;
