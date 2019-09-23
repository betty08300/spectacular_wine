import * as BottleAPIUtil from '../util/bottle_api_util';

export const RECEIVE_ALL_BOTTLES = 'RECEIVE_ALL_BOTTLES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';

export const receiveAllBottles = bottles => ({
    type: RECEIVE_ALL_BOTTLES,
    payload: bottles
})

export const receiveNote = note => ({
    type: RECEIVE_NOTE,
    payload: note
})

export const fetchAllBottles = () => dispatch => (
    BottleAPIUtil.fetchAllBottles().then(bottles => (
        dispatch(receiveAllBottles(bottles))
    ))
);

export const fetchNote = (id) => dispatch => (
    BottleAPIUtil.fetchNote(id).then(note =>(
        dispatch(receiveNote(note))
    ))
)