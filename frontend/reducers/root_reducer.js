import { combineReducers } from 'redux';

import bottles from './bottles_reducer';


const rootReducer = combineReducers({
    bottles
});

export default rootReducer;