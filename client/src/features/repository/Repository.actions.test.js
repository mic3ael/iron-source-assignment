import actions from './Repository.actions';
import constants from './Repository.constants';

describe('actions', () => {
    it('should create an action to set repository', () => {

        const repository = {
            name: "mic3ael/superRero",
            id: 21323,
            url: "https://mic3ael.com/superRepo"
        };

        const expectedAction = {
            type: constants.SET_REPOSITORY,
            payload: repository
        };

        expect(actions.setRepository(repository)).toEqual(expectedAction)
    });
});