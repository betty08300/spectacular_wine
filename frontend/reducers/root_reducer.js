import { combineReducers } from 'redux';

import bottles from './bottles_reducer';
import note from './notes_reducer'; 


const rootReducer = combineReducers({
    bottles, 
    note 
});

export default rootReducer;