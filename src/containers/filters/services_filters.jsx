import React from 'react';
import RadioFilterComponent from './templates/radio_filter_component';
import { TOGGLE_SERVICE_FILTER } from '../../actions/types';

function ServiceFilters() {
  return (
    <RadioFilterComponent
      title="Social Media"
      actionType={TOGGLE_SERVICE_FILTER}
      itemsStateName="services"
      items={['twitter', 'instagram']}
    />
  );
}

export default ServiceFilters;
