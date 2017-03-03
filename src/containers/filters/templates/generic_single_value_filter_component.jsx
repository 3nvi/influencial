import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleFilter } from '../../../actions/index';

export default function (ComposedComponent) {
  class GenericSingleValueFiltersComponent extends Component {

    constructor(props) {
      super(props);

      this.updateCorrespondingFilters = this.updateCorrespondingFilters.bind(this);
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    updateCorrespondingFilters(payload) {
      this.props.toggleFilter(this.props.actionType, payload);
    }

    handleOnChange(eventOrValue) { // if event then it will be an object
      const val = (typeof eventOrValue === 'object') ? eventOrValue.target.value : eventOrValue;
      this.updateCorrespondingFilters(val);
    }

    render() {
      return (
        <ComposedComponent
          onChange={this.handleOnChange}
          value={this.props.selectedItem}
          {...this.props}
        />
      );
    }
  }

  GenericSingleValueFiltersComponent.propTypes = {
    toggleFilter: React.PropTypes.func.isRequired,
    actionType: React.PropTypes.string.isRequired,
    itemsStateName: React.PropTypes.string.isRequired,
    selectedItem: React.PropTypes.string.isRequired
  };

  function mapStateToProps(state, ownProps) {
    return {
      selectedItem: state.filters[ownProps.itemsStateName]
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleFilter }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(GenericSingleValueFiltersComponent);
}
