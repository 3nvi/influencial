import { SelectField, Option } from 'react-mdl-extra';
import React, { Component } from 'react';

class PeriodFilter extends Component {
  render() {
    return (
      <SelectField
        label="Calculate based on"
        value={'trimester'}
        className="center-block"
        floatingLabel
      >
        <Option value={'week'}>Past 7 days</Option>
        <Option value={'month'}>Past 30 days</Option>
        <Option value={'trimester'}>Past 90 days</Option>
      </SelectField>
    );
  }
}

export default PeriodFilter;
