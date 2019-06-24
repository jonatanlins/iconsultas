import { combineReducers } from 'redux';

import auth from './auth';
import session from './session';

export default combineReducers({ auth, session });
