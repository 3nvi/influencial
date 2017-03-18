import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

class Modal extends Component {

  constructor(props) {
    super(props);

    this.state = { isOpened: false };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({ isOpened: true });
  }

  handleCloseDialog() {
    this.props.handleCancel();
    this.setState({ isOpened: false });
  }

  render() {
    const invokerButton = this.props.invokerButton;
    return (
      <div>
        <invokerButton.type {...invokerButton.props} onClick={this.handleOpenDialog} />
        <Dialog open={this.state.isOpened} onCancel={this.handleCloseDialog}>
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>
            {this.props.children}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleConfirm}>{this.props.confirmText}</Button>
            <Button onClick={this.handleCloseDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Modal.propTypes = {
  title: React.PropTypes.string,
  confirmText: React.PropTypes.string,
  handleCancel: React.PropTypes.func,
  handleConfirm: React.PropTypes.func,
  children: React.PropTypes.element.isRequired,
  invokerButton: React.PropTypes.element.isRequired
};

Modal.defaultProps = {
  title: '',
  confirmText: 'Ok',
  handleConfirm: () => true,
  handleCancel: () => true
};

export default Modal;
