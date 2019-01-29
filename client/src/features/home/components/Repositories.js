import React from 'react';
import PropTypes from 'prop-types';
import Repository from './Repository';


const Repositories = (props) => {
    const { repos, onSetRepository } = props;
    return (
        <div className="repos__container">
            {repos.map((repo, index) => <Repository key={index} repo={repo} onSetRepository={onSetRepository} />)}
        </div>
    );
};

Repositories.propTypes = {
    onSetRepository: PropTypes.func.isRequired,
    repos: PropTypes.object.isRequired
};

export default Repositories;
