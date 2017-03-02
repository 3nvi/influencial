import { SelectField, Option } from 'react-mdl-extra';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleFilter } from '../../../actions/index';

class GenericSelectFilter extends Component {

  constructor(props) {
    super(props);

    this.updateCorrespondingFilters = this.updateCorrespondingFilters.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  updateCorrespondingFilters(payload) {
    this.props.toggleFilter(this.props.actionType, payload);
  }

  handleOnChange(value) {
    this.updateCorrespondingFilters(value);
  }

  renderSelect(items) {
    if (!items) {
      return false;
    }

    const selectOptions = this.props.items.map((item) => {
      return <Option value={item} key={item}>{item.split('-').join(' ')}</Option>;
    });

    return (
      <SelectField
        label={this.props.title}
        value={this.props.selectedItem}
        className="center-block"
        floatingLabel
        onChange={this.handleOnChange}
      >
        {selectOptions}
      </SelectField>
    );
  }

  render() {
    return this.renderSelect(this.props.items);
  }
}

GenericSelectFilter.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(GenericSelectFilter);
