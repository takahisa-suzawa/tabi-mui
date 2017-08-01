import { combineReducers } from 'redux';
import todos from './todos';
import plan from './plan';

const rootReducer = combineReducers({
    plan,
    todos
});

export default rootReducer;