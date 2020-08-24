import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './listReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
    form: formReducer,
    query: listReducer,
    data: recipeReducer
});