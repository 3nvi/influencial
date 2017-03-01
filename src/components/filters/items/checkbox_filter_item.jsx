import React, { Component } from 'react';
import { Checkbox } from 'react-mdl';

class CheckboxFilter extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleCheckboxChange({
      name: event.target.name,
      value: !this.props.checked
    });
  }

  render() {
    return (
      <Checkbox
        label={this.props.name.split('-').join(' ')}
        name={this.props.name}
        ripple
        checked={this.props.checked}
        onChange={this.handleChange}
      />
    );
  }
}

CheckboxFilter.propTypes = {
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  handleCheckboxChange: React.PropTypes.func.isRequired
};

export default CheckboxFilter;

