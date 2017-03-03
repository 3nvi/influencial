import React from 'react';
import { SelectField, Option } from 'react-mdl-extra';
import GenericSingleValueFiltersHoc from './generic_single_value_filter_component';

function renderSelectComponent(props) {
  const { title, ...rest } = props;
  if (!props.items) {
    return false;
  }

  return (
    <SelectField
      label={title}
      className="center-block"
      floatingLabel
      {...rest}
    >
      {props.items.map(item => <Option value={item} key={item}>{item.split('-').join(' ')}</Option>)}
    </SelectField>
  );
}

renderSelectComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default GenericSingleValueFiltersHoc(renderSelectComponent);
