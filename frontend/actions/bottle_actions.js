import * as BottleAPIUtil from '../util/bottle_api_util';

export const RECEIVE_ALL_BOTTLES = 'RECEIVE_ALL_BOTTLES';

export const receiveAllBottles = bottles => ({
    type: RECEIVE_ALL_BOTTLES,
    payload: bottles
})

export const fetchAllBottles = () => dispatch => (
    BottleAPIUtil.fetchAllBottles().then(bottles => (
        dispatch(receiveAllBottles(bottles))
    ))
);