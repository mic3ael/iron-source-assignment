import React from 'react';
import moment from 'moment';
import repositoryConstants from '../../repository/Repository.constants';

const Repository = (props) => {
    const { repo, onSetRepository } = props;

    return (
        <div className="repo__container">
            <span>Repo: {repo.get(repositoryConstants.REPO_FULL_NAME_KEY)}</span>
            <span className="description">Description: {repo.get(repositoryConstants.REPO_DESCRIPTION_KEY)}</span>
            <span>Stars: {repo.get(repositoryConstants.REPO_STARS_KEY)}</span>
            <span>Forks: {repo.get(repositoryConstants.REPO_FORKS_KEY)}</span>
            <span>Updated at: {moment(repo.get(repositoryConstants.REPO_UPDATED_AT_KEY)).format('LLLL')}</span>
            <span className="details" onClick={() => onSetRepository(repo.toJS())}>details...</span>
        </div>
    );
};

export default Repository;