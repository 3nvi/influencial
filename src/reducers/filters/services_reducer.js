import { TOGGLE_SERVICE_FILTER } from '../../actions/types';
import GenericRadioReducer from './templates/generic_radio_reducer';

export default GenericRadioReducer({
  both: true,
  twitter: false,
  instagram: false
}, TOGGLE_SERVICE_FILTER);
