import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleFilter } from '../../../actions/index';
import CheckboxFilter from '../../../components/filters/items/checkbox_filter_item';
import CollapsibleFilterItem from '../../../components/filters/common';


class GenericCheckboxFilters extends Component {

  constructor(props) {
    super(props);

    this.updateCorrespondingFilters = this.updateCorrespondingFilters.bind(this);
  }

  updateCorrespondingFilters(payload) {
    this.props.toggleFilter(this.props.actionType, payload);
  }

  renderCheckboxList(items) {
    return Object.keys(items || {}).map((item) => {
      const checked = items[item];
      return (
        <CheckboxFilter
          key={item}
          name={item}
          checked={checked}
          handleCheckboxChange={this.updateCorrespondingFilters}
        />
      );
    });
  }

  render() {
    return (
      <CollapsibleFilterItem title={this.props.title}>
        {this.renderCheckboxList(this.props.items)}
      </CollapsibleFilterItem>
    );
  }
}

GenericCheckboxFilters.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.objectOf(React.PropTypes.bool).isRequired,
  toggleFilter: React.PropTypes.func.isRequired,
  actionType: React.PropTypes.string.isRequired,
  itemsStateName: React.PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.filters[ownProps.itemsStateName]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFilter }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GenericCheckboxFilters);
