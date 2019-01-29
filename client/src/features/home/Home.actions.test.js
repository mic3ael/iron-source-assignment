import actions from './Home.actions';
import constants from './Home.constants';

describe('actions', () => {
    it('should create an action to get repositories', () => {
        const search = "name";
        const sort = "sort";
        const expectedAction = {
            type: constants.GET_REPOSITORIES,
            name: search,
            sort
        };

        expect(actions.getRepositories(search, sort)).toEqual(expectedAction)
    });

    it('should create an action to set SearchBy param', () => {
        const search = "name";
        const expectedAction = {
            type: constants.SET_SEARCH_BY,
            payload: search
        };

        expect(actions.setSearchBy(search)).toEqual(expectedAction);
    });

    it('should create an action to set SortBy', () => {
        const sort = "sort";
        const expectedAction = {
            type: constants.SET_SEARCH_BY,
            payload: sort
        };

        expect(actions.setSearchBy(sort)).toEqual(expectedAction);
    });
});