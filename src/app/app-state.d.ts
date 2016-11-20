interface IUserState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  displayName?: string;
  email?: string;
  photoURL?: string;
}

interface IAppState {
  user: IUserState;
}
