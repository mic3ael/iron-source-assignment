import { combineReducers } from 'redux-immutable';
import homeReducer from '../features/home/Home.reducer';
import repositotyReducer from '../features/repository/Repository.reducer';

export const createReducers = () => {
    return combineReducers({
        [homeReducer.key]: homeReducer.reducer,
        [repositotyReducer.key]: repositotyReducer.reducer
    });
};