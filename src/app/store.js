import {createStore, applyMiddleware} from 'redux';

import reducer from './reducer';
import reporter from './middleware/reporter'
import thunk from './middleware/thunk'
import filter from './middleware/filter'

export default () => createStore(reducer, applyMiddleware(thunk,reporter,filter));
