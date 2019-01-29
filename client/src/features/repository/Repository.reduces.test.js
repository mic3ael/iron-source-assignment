import reducer from './Repository.reducer'
import constants from './Repository.constants';

describe('repository reducer', () => {
    it('should return the initial state', () => {
        const newState = reducer.reducer(undefined, {});
        expect(newState.toJS()).toEqual({});
    });

    it('should handle GET_REPOSITORIES', () => {
        const repository = {
            name: "mic3ael/superRero",
            id: 21323,
            url: "https://mic3ael.com/superRepo"
        };

        const newState = reducer.reducer({}, {
            type: constants.SET_REPOSITORY,
            payload: repository
        });

        expect(newState.toJS()).toEqual(repository);
    });
});