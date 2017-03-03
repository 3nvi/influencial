

import React from 'react';
import { RadioGroup, Radio } from 'react-mdl';
import GenericSingleValueFiltersHoc from './generic_single_value_filter_component';

function renderRadioComponent(props) {
  /* eslint-disable no-unused-vars, react/prop-types */
  const { items, actionType, itemsStateName, selectedItem, toggleFilter, ...rest } = props;
  /* eslint-enable no-unused-vars, react/prop-types */

  if (!items) {
    return false;
  }

  return (
    <RadioGroup
      style={{ textAlign: 'left' }}
      name={props.itemsStateName}
      childContainer="div"
      {...rest}
    >
      {items.map(item => <Radio value={item} key={item} ripple>{item.split('-').join(' ')}</Radio>)}
    </RadioGroup>
  );
}

renderRadioComponent.propTypes = {
  itemsStateName: React.PropTypes.string.isRequired,
  items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default GenericSingleValueFiltersHoc(renderRadioComponent);
