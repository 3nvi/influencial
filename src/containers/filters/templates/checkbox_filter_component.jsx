import React from 'react';
import CheckboxGroup from '../../../components/input/checkbox_group';
import GenericSingleValueFiltersHoc from './generic_filter_hoc';

// we wrap with the outer function only because we want to pass "getPayload". We could have passed
// it also at instantisation but then the code would become less DRY since we would redeclare the
// same "getPayload" function for all same-type filters (i.e. radio, select etc.)
function CheckboxFilterComponent(props) {

  function renderCheckboxComponent(inheritedProps) {

    const { selectedItem, ...rest } = inheritedProps;
    const items = selectedItem;

    if (!items) {
      return false;
    }

    return <CheckboxGroup items={items} {...rest} />;
  }

  renderCheckboxComponent.propTypes = {
    selectedItem: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
  };

  const EnhancedComponent = GenericSingleValueFiltersHoc(renderCheckboxComponent);
  const getPayload = (event) => {
    return {
      name: event.target.name,
      checked: event.target.checked
    };
  };

  return <EnhancedComponent {...props} getPayload={getPayload} />;
}

export default CheckboxFilterComponent;


