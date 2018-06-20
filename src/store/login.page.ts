import { State, Action, StateContext } from '@ngxs/store';
import { LoginModel } from '../models/login';
import { AuthService } from '../services/auth';

interface LoginPageModel {
  isAuthenticating: boolean;
  errorMessage: string;
}

@State<LoginPageModel>({
  name: 'loginPage',
  defaults: {
    isAuthenticating: false,
    errorMessage: null
  }
})
export class LoginPageStore {
  constructor(private auth: AuthService) {}

  @Action(LoginAction)
  login(stateContext: StateContext<LoginPageModel>, action: LoginAction) {
    const state = stateContext.getState();

    stateContext.setState({ ...state, isAuthenticating: true, errorMessage: null });

    // await this.auth.signInWithEmail(action.loginModel).then(
    //   result => {
    //     stateContext.dispatch(new LoginSuccessfullAction());
    //   },
    //   rejected => stateContext.dispatch(new LoginOnErrorAction('login has failed'))
    // );
  }

  @Action(LoginSuccessfullAction)
  loginSuccessfull(stateContext: StateContext<LoginPageModel>) {
    const state = stateContext.getState();

    stateContext.setState({ ...state, isAuthenticating: false });
  }

  @Action(LoginOnErrorAction)
  loginOnError(stateContext: StateContext<LoginPageModel>, action: LoginOnErrorAction) {
    const state = stateContext.getState();

    stateContext.setState({ ...state, isAuthenticating: false, errorMessage: action.errorMessage });
  }
}

export class LoginAction {
  static readonly type = '[login page] login init';

  constructor(public loginModel: LoginModel) {}
}

export class LoginSuccessfullAction {
  static readonly type = '[login page] login successfull';

  constructor() {}
}

export class LoginOnErrorAction {
  static readonly type = '[login page] login onError';

  constructor(public errorMessage: string) {}
}
