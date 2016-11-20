import { combineReducers } from 'redux';
import { USER_SET } from '../action-types';

const USER_INITIAL_STATE = {
  isAuthenticated: false,
  isAuthenticating: false,
};
function user(state: IUserState = USER_INITIAL_STATE, action): IUserState {
  if (action.type === USER_SET) {
    return action.value;
  }
  return state;
}

export const rootReducer = combineReducers<IAppState>({
  user,
});
