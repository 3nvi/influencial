import React from 'react';
import { Checkbox } from 'react-mdl';

function CheckboxItem(props) {
  return (
    <Checkbox
      label={props.name.split('-').join(' ')}
      name={props.name}
      ripple
      checked={props.checked}
      onChange={props.handleCheckboxChange}
    />
  );
}

CheckboxItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired,
  handleCheckboxChange: React.PropTypes.func.isRequired
};

export default CheckboxItem;

