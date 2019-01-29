import reducer, { initialState } from './Home.reducer'
import constants from './Home.constants';

describe('home reducer', () => {
    it('should return the initial state', () => {
        const newState = reducer.reducer(undefined, {});
        expect(newState.toJS()).toEqual(initialState.toJS());
    });

    it('should handle GET_REPOSITORIES', () => {

        const newState = reducer.reducer(undefined, {
            type: constants.GET_REPOSITORIES
        }).toJS();

        expect(newState[constants.LOADING_KEY]).toEqual(true);
        expect(newState[constants.MESSAGE_KEY]).toEqual("");
    });

    it('should handle GET_REPOSITORIES_SUCCESS', () => {
        const repositories = [{
            name: "mic3ael/superRero",
            id: 1,
            url: "https://mic3ael.com/superRepo"
        }, {
            name: "mic3ael/superRero",
            id: 2,
            url: "https://mic3ael.com/superRepo"
        }, {
            name: "mic3ael/superRero",
            id: 3,
            url: "https://mic3ael.com/superRepo"
        }];

        const newState = reducer.reducer(undefined, {
            type: constants.GET_REPOSITORIES_SUCCESS,
            payload: repositories
        }).toJS();

        expect(newState[constants.REPOSITORIES_KEY]).toEqual(repositories);
        expect(newState[constants.LOADING_KEY]).toEqual(false);
        expect(newState[constants.MESSAGE_KEY]).toEqual("");
    });

    it('should handle GET_REPOSITORIES_ERROR', () => {
        const message = "errorMassage";
        const newState = reducer.reducer(undefined, {
            type: constants.GET_REPOSITORIES_ERROR,
            payload: message
        }).toJS();

        expect(newState[constants.MESSAGE_KEY]).toEqual(message);
    });

    it('should handle SET_SORT_BY', () => {
        const sortBy = "stars";
        const newState = reducer.reducer(undefined, {
            type: constants.SET_SORT_BY,
            payload: sortBy
        }).toJS();
        const sortByStorage = localStorage.getItem(constants.SORT_BY_KEY);

        expect(newState[constants.SORT_BY_KEY]).toEqual(sortBy);
        expect(sortByStorage).toEqual(sortBy);

    });

    it('should handle SET_SEARCH_BY', () => {
        const searchBy = "tetris123";
        const newState = reducer.reducer(undefined, {
            type: constants.SET_SEARCH_BY,
            payload: searchBy
        }).toJS();

        const searchByStorage = localStorage.getItem(constants.SEARCH_BY_KEY);

        expect(newState[constants.SEARCH_BY_KEY]).toEqual(searchBy);
        expect(searchByStorage).toEqual(searchBy);
    });
});