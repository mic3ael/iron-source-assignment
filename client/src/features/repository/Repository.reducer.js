import { fromJS } from 'immutable';
import constants from './Repository.constants';

const initState = fromJS({});

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    let newState;

    switch (type) {
        case constants.SET_REPOSITORY:
            newState = fromJS(payload);
            break;
        default:
            newState = state;
    }

    return newState;
};

export default {
    reducer,
    key: constants.REPOSITORY_REDUCER_KEY
};