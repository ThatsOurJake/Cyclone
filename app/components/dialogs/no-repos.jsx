import React from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

export default (props) => {
  return(
    <Dialog
      ignoreEscapeKeyUp
      ignoreBackdropClick
      open>
      <DialogTitle>You currently have no repos 😢</DialogTitle>
      <DialogContent>
        <DialogContent>
          Why not add one now to get started?
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.dialogAccept}>Okay 👍</Button>
          <Button color="primary" onClick={props.dialogRefuse}>No Thanks 👎</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
