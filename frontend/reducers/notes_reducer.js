import merge from 'lodash/merge';
import { RECEIVE_NOTE } from '../actions/bottle_actions';

const NoteReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_NOTE:
            return merge(state, action.payload);

        default:
            return state;
    }
}

export default NoteReducer; 