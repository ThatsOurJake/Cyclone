import React from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

export default (props) => {
  return(
    <Dialog
      ignoreEscapeKeyUp
      ignoreBackdropClick
      open>
      <DialogTitle>Git not installed</DialogTitle>
      <DialogContent>
        <DialogContent>
          To use this program you will need to install the Git command line tools. Install them and restart this application.
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.dialogAccept}>Take me to the download!</Button>
          <Button color="primary" onClick={props.dialogRefuse}>No Thanks!</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
