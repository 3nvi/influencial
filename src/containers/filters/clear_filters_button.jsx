import { Button } from 'react-mdl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearFilters } from '../../actions/index';

class ClearFiltersButton extends Component {
  render() {
    if (this.props.isCustomFiltered) {
      return false;
    }

    return (
      <Button
        className="center-block mdl-typography--text-center"
        raised
        colored
        ripple
        style={{ marginTop: '15px', marginBottom: '15px' }}
        onClick={this.props.clearFilters}
      >
        Reset
      </Button>
    );
  }
}

ClearFiltersButton.propTypes = {
  isCustomFiltered: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isCustomFiltered: (state.filters.q !== '')
    /* need to calculate whether button is visible or not. Use reselect */
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearFilters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearFiltersButton);
