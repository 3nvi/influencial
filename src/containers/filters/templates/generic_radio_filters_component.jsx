import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RadioGroup, Radio } from 'react-mdl';

import { toggleFilter } from '../../../actions/index';
import CollapsibleFilterItem from '../../../components/filters/common';


class GenericRadioFilters extends Component {

  constructor(props) {
    super(props);

    this.updateCorrespondingFilters = this.updateCorrespondingFilters.bind(this);
    this.renderRadioList = this.renderRadioList.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  updateCorrespondingFilters(payload) {
    this.props.toggleFilter(this.props.actionType, payload);
  }

  handleOnChange(event) {
    this.updateCorrespondingFilters(event.target.value)
  }

  renderRadioList(items) {
    if (!items) {
      return false;
    }

    const itemKeys = Object.keys(items);
    let selectedValue = itemKeys[0];
    const radioListItems = itemKeys.map((item) => {
      return <Radio value={item} key={item} ripple >{item.split('-').join(' ')}</Radio>;
    });

    itemKeys.forEach((item) => {
      if (items[item]) {
        selectedValue = item; // only one value is gonna be True
      }
    });

    return (
      <RadioGroup
        style={{ textAlign: 'left' }}
        name={this.props.itemsStateName}
        value={selectedValue}
        onChange={this.handleOnChange}
        childContainer="div"
      >
        {radioListItems}
      </RadioGroup>
    );
  }

  render() {
    return (
      <CollapsibleFilterItem title={this.props.title}>
        {this.renderRadioList(this.props.items)}
      </CollapsibleFilterItem>
    );
  }
}

GenericRadioFilters.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GenericRadioFilters);
