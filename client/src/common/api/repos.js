import axios from 'axios';
import _ from "lodash";
import errors from './errors';

const getRepositories = (name, sort) => {
    return getBase("repos", { name, sort });
};

const getBase = async (endPoint, params = {}) => {
    try {
        const { data } = await axios.get(`/api/${endPoint}`, { params });
        return Promise.resolve(data);
    } catch (e) {
        const { response } = e;

        if (!response)
            throw e;

        const { status, data } = response;

        let message = data;

        if (_.isObject(message)) {
            message = JSON.stringify(message);
        }

        switch (status) {
            case 400:
                return Promise.reject(new errors.BadRequest(message));
            default:
                throw new Error(message);
        }
    }
}

export default { getRepositories };