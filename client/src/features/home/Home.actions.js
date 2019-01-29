import constants from './Home.constants';

const getRepositories = (name, sort) => {
    return {
        type: constants.GET_REPOSITORIES,
        name,
        sort
    };
};

const setSortBy = (sortBy) => {
    return {
        type: constants.SET_SORT_BY,
        payload: sortBy
    };
};

const setSearchBy = (searchBy) => {
    return {
        type: constants.SET_SEARCH_BY,
        payload: searchBy
    };
};

export default { getRepositories, setSortBy, setSearchBy };