import { fromJS } from 'immutable';
import constants from './Home.constants';

export const initialState = fromJS({
     [constants.REPOSITORIES_KEY]: [],
     [constants.LOADING_KEY]: false,
     [constants.MESSAGE_KEY]: "",
     [constants.SEARCH_BY_KEY]: localStorage.getItem(constants.SEARCH_BY_KEY),
     [constants.SORT_BY_KEY]: localStorage.getItem(constants.SORT_BY_KEY),
});

const reducer = (state = initialState, action) => {

     const { type, payload } = action;
     let newState;
     switch (type) {
          case constants.GET_REPOSITORIES:
               newState = state.set(constants.LOADING_KEY, true);
               newState = newState.set(constants.MESSAGE_KEY, "");
               break;
          case constants.GET_REPOSITORIES_SUCCESS:
               newState = state.set(constants.REPOSITORIES_KEY, fromJS(payload));
               newState = newState.set(constants.LOADING_KEY, false);
               newState = newState.set(constants.MESSAGE_KEY, "");
               break;
          case constants.GET_REPOSITORIES_ERROR:
               newState = state.set(constants.MESSAGE_KEY, fromJS(payload));
               newState = newState.set(constants.LOADING_KEY, false);
               break;
          case constants.SET_SORT_BY:
               localStorage.setItem(constants.SORT_BY_KEY, payload);
               newState = state.set(constants.SORT_BY_KEY, fromJS(payload));
               break;
          case constants.SET_SEARCH_BY:
               localStorage.setItem(constants.SEARCH_BY_KEY, payload);
               newState = state.set(constants.SEARCH_BY_KEY, fromJS(payload));
               break;
          default:
               newState = state;
     }

     return newState;
};

export default { reducer, key: constants.HOME_REDUCER_KEY };