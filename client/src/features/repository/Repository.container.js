import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from './Repository.constants';

import "./Repository.scss";

class Repository extends Component {
    state = {
        openUrlDisabled: false
    };
    handleOnBack = (event) => {
        event.preventDefault();
        this.props.history.goBack();
    };
    render() {
        const { repository } = this.props;
        const { openUrlDisabled } = this.state;
        return (
            <div className="repository__container">
                <h4>{repository.get(constants.REPO_FULL_NAME_KEY)}</h4>
                <div className="repository__actions">
                    <button className="open_repo" disabled={openUrlDisabled}>
                        {openUrlDisabled ?
                            <span>Open on GitHub</span>
                            :
                            <a target="_blank" onClick={() => this.setState({ openUrlDisabled: true })} rel="noopener noreferrer" href={repository.get(constants.REPO_URL_KEY)}>Open on GitHub</a>
                        }
                    </button>
                    <button className="back" onClick={this.handleOnBack}>Back</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repository: state.get(constants.REPOSITORY_REDUCER_KEY)
    };
};

export default connect(mapStateToProps)(Repository);