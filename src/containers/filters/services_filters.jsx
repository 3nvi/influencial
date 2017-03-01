import React from 'react';
import GenericRadioFilters from './templates/generic_radio_filters_component';
import { TOGGLE_SERVICE_FILTER } from '../../actions/types';

function ServiceFilters() {
  return (
    <GenericRadioFilters
      title="Social Services"
      actionType={TOGGLE_SERVICE_FILTER}
      itemsStateName="services"
    />
  );
}

export default ServiceFilters;
