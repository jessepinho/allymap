import { StoreModule } from '@ngrx/store/src/ng2';
import { USER_SET } from '../action-types';

const USER_INITIAL_STATE = {
  isAuthenticated: false,
  isAuthenticating: false,
};
function user(state: IUserState = USER_INITIAL_STATE, action): IUserState {
  if (action.type === USER_SET) {
    return action.payload;
  }
  return state;
}

export const store = StoreModule.provideStore({
  user,
});
