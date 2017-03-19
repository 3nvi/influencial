import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';

class ModalForm extends Component {

  constructor(props) {
    super(props);

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpened && nextProps.isOpened) {
      this.props.initialize(nextProps.initialValues);
    }
  }

  handleCloseDialog() {
    this.props.reset();
    this.props.handleCancel();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Dialog open={this.props.isOpened} onCancel={this.handleCloseDialog}>
          <form>
            <DialogTitle>{this.props.title}</DialogTitle>
            <DialogContent>
              {this.props.children}
            </DialogContent>
            <DialogActions>
              <Button type="button" onClick={handleSubmit(this.props.handleConfirm)}>
                {this.props.confirmText}
              </Button>
              <Button type="button" onClick={this.handleCloseDialog}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

ModalForm.propTypes = {
  title: React.PropTypes.string,
  confirmText: React.PropTypes.string,
  handleConfirm: React.PropTypes.func,
  handleCancel: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  reset: React.PropTypes.func.isRequired,
  isOpened: React.PropTypes.bool.isRequired
};

ModalForm.defaultProps = {
  title: '',
  confirmText: 'Ok',
  handleConfirm: () => true
};

export default ModalForm;

