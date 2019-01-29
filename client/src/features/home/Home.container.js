import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './Home.actions';
import { setRepository } from '../repository/Repository.actions';
import constants from './Home.constants';
import Header from './components/Header';
import Repositories from './components/Repositories';
import Loader from '../../common/components/loader/Loader';

import "./Home.scss";

class Home extends Component {
    handleOnSearch = (searchBy, sortBy) => {
        const { actions } = this.props;
        actions.setSortBy(sortBy);
        actions.setSearchBy(searchBy);
        actions.getRepositories(searchBy, sortBy);
    };
    handleOnSetRepository = (repo) => {
        const { actions, history } = this.props;
        actions.setRepository(repo);
        history.push(`/${repo.id}`);
    };
    get renderContent() {
        const { repositories, loading, message } = this.props;

        if (loading)
            return <Loader />;

        if (message)
            return <div className="message">
                {message}
            </div>

        return <Repositories repos={repositories} onSetRepository={this.handleOnSetRepository} />;
    };
    render() {
        const { sortBy, searchBy } = this.props;

        return (
            <div className="home__container">
                <Header sortBy={sortBy} searchBy={searchBy} onSearch={this.handleOnSearch} />
                <div className="home_content">
                    {this.renderContent}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const homeState = state.get(constants.HOME_REDUCER_KEY);
    return {
        repositories: homeState.get(constants.REPOSITORIES_KEY),
        loading: homeState.get(constants.LOADING_KEY),
        message: homeState.get(constants.MESSAGE_KEY),
        sortBy: homeState.get(constants.SORT_BY_KEY),
        searchBy: homeState.get(constants.SEARCH_BY_KEY)
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...actions, setRepository }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);