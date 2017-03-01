import React from 'react';

import { TOGGLE_PERIOD_FILTER } from '../../actions/types';
import GenericSelectFilter from './templates/generic_select_filter_component';

function PeriodFilter() {
  return (
    <GenericSelectFilter
      title="Calculate based on"
      actionType={TOGGLE_PERIOD_FILTER}
      itemsStateName="periods"
    />
  );
}

export default PeriodFilter;
