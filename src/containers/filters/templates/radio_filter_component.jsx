import React from 'react';
import { RadioGroup, Radio } from 'react-mdl';
import GenericSingleValueFiltersHoc from './generic_filter_hoc';

// we wrap with the outer function only because we want to pass "getPayload". We could have passed
// it also at instantisation but then the code would become less DRY since we would redeclare the
// same "getPayload" function for all same-type filters (i.e. radio, select etc.)
function RadioFilterComponent(props) {

  function renderRadioComponent(inheritedProps) {
    /* eslint-disable no-unused-vars, react/prop-types */
    const {
      items, actionType, itemsStateName, selectedItem, toggleFilter, getPayload, ...rest
    } = inheritedProps;
    /* eslint-enable no-unused-vars, react/prop-types */

    if (!items.length) {
      return false;
    }

    return (
      <RadioGroup
        style={{ textAlign: 'left' }}
        name={itemsStateName}
        childContainer="div"
        {...rest}
      >
        {items.map(item => <Radio value={item} key={item} ripple>{item.split('-').join(' ')}</Radio>)}
      </RadioGroup>
    );
  }

  renderRadioComponent.propTypes = {
    itemsStateName: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  };

  const EnhancedComponent = GenericSingleValueFiltersHoc(renderRadioComponent);
  return <EnhancedComponent {...props} getPayload={event => event.target.value} />;
}

export default RadioFilterComponent;
