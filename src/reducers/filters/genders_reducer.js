import { TOGGLE_GENDER_FILTER } from '../../actions/types';
import GenericRadioReducer from './templates/generic_radio_reducer';

export default GenericRadioReducer({
  both: true,
  male: false,
  female: false
}, TOGGLE_GENDER_FILTER);
