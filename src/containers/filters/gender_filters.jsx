import React from 'react';
import GenericRadioFilters from './templates/generic_radio_filters_component';
import { TOGGLE_GENDER_FILTER } from '../../actions/types';

function GenderFilters() {
  return (
    <GenericRadioFilters
      title="Genders"
      actionType={TOGGLE_GENDER_FILTER}
      itemsStateName="genders"
    />
  );
}

export default GenderFilters;
