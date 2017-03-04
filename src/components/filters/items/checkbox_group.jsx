import React from 'react';
import CheckboxItem from './checkbox_item';

function CheckboxGroup(props) {

  const checkboxes = Object.keys(props.items).map((item) => {
    return (
      <CheckboxItem
        key={item}
        name={item}
        checked={props.items[item].checked}
        handleCheckboxChange={props.onChange}
      />
    );
  });

  return <div>{checkboxes}</div>;
}

CheckboxGroup.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  items: React.PropTypes.objectOf(React.PropTypes.object).isRequired
};

export default CheckboxGroup;

