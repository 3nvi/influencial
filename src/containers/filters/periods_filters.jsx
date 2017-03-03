import React from 'react';

import { TOGGLE_PERIOD_FILTER } from '../../actions/types';
import RadioFilter from './templates/radio_filter_component';

function PeriodFilter() {
  return (
    <RadioFilter
      actionType={TOGGLE_PERIOD_FILTER}
      itemsStateName="periods"
      items={['past-7-days', 'past-30-days', 'past-90-days']}
    />
  );
}

export default PeriodFilter;
