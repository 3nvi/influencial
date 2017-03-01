import React, { Component } from 'react';
import { Textfield } from 'react-mdl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TOGGLE_FREE_TEXT_FILTER } from '../../actions/types';
import { toggleFilter } from '../../actions/index';

class FreeSearchFilter extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.toggleFilter(TOGGLE_FREE_TEXT_FILTER, event.target.value);
  }

  render() {
    return (
      <Textfield
        value={this.props.q}
        onChange={this.handleChange}
        floatingLabel
        label="Search for specific influencers"
        style={{ width: '100%' }}
      />
    );
  }
}

FreeSearchFilter.propTypes = {
  q: React.PropTypes.string.isRequired,
  toggleFilter: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { q: state.filters.q };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FreeSearchFilter);
