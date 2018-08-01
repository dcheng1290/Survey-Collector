import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveyReducer from './surveyReudcer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
  survey: surveyReducer,
});

export default rootReducer;
