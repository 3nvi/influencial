import { Button } from 'react-mdl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IsCustomFiltered from '../../selectors/is_custom_filtered';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { clearFilters } from '../../actions/index';

class ClearFilters extends Component {

  renderNotification() {
    if (!this.props.isCustomFiltered) {
      return false;
    }
    return (
      <div className="notification--fixed mdl-shadow--2dp">
        <p>
          <span>Got lost with all these filters?</span>
          <Button
            className="center-block mdl-typography--text-center"
            raised
            ripple
            colored
            style={{ marginLeft: '15px' }}
            onClick={this.props.clearFilters}
          >
            Clear
          </Button>
        </p>
      </div>
    );
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.renderNotification()}
      </ReactCSSTransitionGroup>
    );
  }
}

ClearFilters.propTypes = {
  isCustomFiltered: React.PropTypes.bool.isRequired,
  clearFilters: React.PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return { isCustomFiltered: IsCustomFiltered(state) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearFilters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearFilters);
