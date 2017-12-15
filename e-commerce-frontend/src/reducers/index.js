/* eslint-disable */
import animes from './animes';
import titleFilter from './titleFilter';
import sortAnimes from './sortAnimes';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    animes,
    titleFilter,
    sortAnimes,
    form: formReducer
});
export default rootReducer;
