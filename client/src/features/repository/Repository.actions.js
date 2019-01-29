import constants from './Repository.constants';

export const setRepository = (repo) => {
    return {
        type: constants.SET_REPOSITORY,
        payload: repo
    };
};

export default {
    setRepository
};