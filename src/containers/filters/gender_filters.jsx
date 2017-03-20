import React from 'react';
import RadioFilterComponent from './templates/radio_filter_component';
import { TOGGLE_GENDER_FILTER } from '../../actions/types';

function GenderFilters() {
  return (
    <RadioFilterComponent
      title="Genders"
      actionType={TOGGLE_GENDER_FILTER}
      itemsStateName="genders"
      items={['any', 'male', 'female']}
    />
  );
}

export default GenderFilters;
