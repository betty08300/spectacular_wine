import merge from 'lodash/merge';
import { RECEIVE_ALL_BOTTLES, RECEIVE_NOTE } from '../actions/bottle_actions';

const BottlesReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ALL_BOTTLES:
            return merge(state, action.payload);

        default:
            return state;
    }
}

export default BottlesReducer; 