import React from 'react';
import { SelectField, Option } from 'react-mdl-extra';
import GenericSingleValueFiltersHoc from './generic_filter_hoc';

// we wrap with the outer function only because we want to pass "getPayload". We could have passed
// it also at instantisation but then the code would become less DRY since we would redeclare the
// same "getPayload" function for all same-type filters (i.e. radio, select etc.)
function SelectFilterComponent(props) {

  function renderSelectComponent(inheritedProps) {
    const { title, items, ...rest } = inheritedProps;
    if (!items.length) {
      return false;
    }

    return (
      <SelectField
        label={title}
        className="center-block"
        floatingLabel
        {...rest}
      >
        {items.map(item => <Option value={item} key={item}>{item.split('-').join(' ')}</Option>)}
      </SelectField>
    );
  }

  renderSelectComponent.propTypes = {
    title: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  };

  const EnhancedComponent = GenericSingleValueFiltersHoc(renderSelectComponent);
  return <EnhancedComponent {...props} getPayload={selectedOptionVal => selectedOptionVal} />;
}

export default SelectFilterComponent;

