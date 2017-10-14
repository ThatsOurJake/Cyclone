import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

class AddRepoDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.repoLocation,
      bookmark: props.bookmark
    };

    this.bookmarkChange = this.bookmarkChange.bind(this);
  }

  bookmarkChange(e) {
    this.setState({
      bookmark: e.target.value
    });
  }

  render() {
    return(
      <Dialog
        ignoreEscapeKeyUp
        ignoreBackdropClick
        open>
        <DialogTitle>Add a new repository</DialogTitle>
        <DialogContent>
          <DialogContent>
            Location:
            <TextField
              disabled
              value={this.state.location}
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              What would you like the display name to be?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="bookmark"
              label="Display Name"
              type="text"
              fullWidth
              value={this.state.bookmark}
              required
              onChange={this.bookmarkChange}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => { this.props.dialogAccept(this.state); }}>Add Repo ✔️</Button>
            <Button color="primary" onClick={this.props.dialogRefuse}>Cancel ✖️</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  }
}

export default AddRepoDialog;
