import React from 'react';
import { Snackbar } from 'react-mdl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeNotification } from '../../actions/index';

function SnackbarNotification(props) {
  return (
    <Snackbar active={Boolean(props.notification)} onTimeout={props.removeNotification}>
      {props.notification}
    </Snackbar>
  );
}

SnackbarNotification.propTypes = {
  notification: React.PropTypes.string.isRequired,
  removeNotification: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { notification: state.notification };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeNotification
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarNotification);
