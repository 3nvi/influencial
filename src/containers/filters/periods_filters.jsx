import React from 'react';

import { TOGGLE_PERIOD_FILTER } from '../../actions/types';
import GenericRadioFilters from './templates/generic_radio_filters_component';

function PeriodFilter() {
  return (
    <GenericRadioFilters
      title="Period"
      actionType={TOGGLE_PERIOD_FILTER}
      itemsStateName="periods"
      items={['past-7-days', 'past-30-days', 'past-90-days']}
    />
  );
}

export default PeriodFilter;
