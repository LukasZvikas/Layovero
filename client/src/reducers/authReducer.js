import {
  SIGN_UP,
  SHOW_SIGNUP,
  SHOW_SIGNIN,
  HIDE_MODAL,
  SHOW_FORGOT_PASS,
  SHOW_RESET,
  SEND_FORGOT,
  RESET_PASS,
  SIGN_IN,
  SEND_US_EMAIL
} from "./types";

const initialState = {
  signIn: false,
  signUp: false,
  forgotPass: false,
  emailVerification: false,
  resetPass: false,
  forgetPassSuccess: false,
  showResetSuccess: false,
  sendUsEmail: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return action.payload, { emailVerification: true, signUp: false };
    case SIGN_IN:
      return { authenticated: true };
    case SHOW_SIGNUP:
      return { signUp: true };
    case SHOW_SIGNIN:
      return { signIn: true, emailVerification: false, signUp: false };
    case SHOW_FORGOT_PASS:
      return { forgotPass: true, signIn: false };
    case SEND_FORGOT:
      return { forgetPassSuccess: true };
    case SHOW_RESET:
      return action.payload;
    case RESET_PASS:
      return initialState, { showResetSuccess: true };
    case SEND_US_EMAIL:
      return { sendUsEmail: true };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
