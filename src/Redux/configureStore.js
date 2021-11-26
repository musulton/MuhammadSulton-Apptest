import {createStore, combineReducers} from 'redux';
import contactReducers from './Reducers/Contact';

const rootReducer = combineReducers({
  contactReducers,
});

const configureStore = createStore(rootReducer);

export default configureStore;
