import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { emailField, passwordField } from "./formFields.js";
import { connect } from "react-redux";
import { SignUserUp } from "../../actions/authActions";
import { Modal } from "../Modal";

import layovero from "../../../images/layovero.png";

class SignUp extends Component {
  onFormSubmit({ email, password }) {
    console.log("HERE", { email, password });
    this.props.SignUserUp({ email, password });
  }

  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm }
    } = this.props;

    return (
      <form
        className="auth-form"
        onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
      >
        <div className="auth-form__exit" onClick={this.props.hide}>
          &times;
        </div>
        <div className="auth-form__box">
          <div className="auth-form__logo">
            <img src={layovero} width="65" height="65" />
          </div>
          <div className="auth-form__heading">
            <div className="auth-form__heading-item in">Sign In</div>
            <span className="auth-form__heading-item or">or</span>
            <div className="auth-form__heading-item up"> Sign Up </div>
          </div>
          <div className="auth-form__field-wrapper">
            <div className="auth-form__input-box">
              <Field
                key={"email"}
                type="text"
                label={"Email"}
                name={"email"}
                placehold={"Enter your email"}
                component={emailField}
              />

              <Field
                key={"password"}
                type="text"
                label={"Password"}
                name={"password"}
                placehold={"*******"}
                component={passwordField}
              />

              <Field
                key={"passwordConfirm"}
                type="text"
                label={"Confirm Password"}
                name={"passwordConfirm"}
                placehold={"*******"}
                component={passwordField}
              />
            </div>
            <button className="auth-form__button" type="submit">
              Sign Up
            </button>
            <div className="auth-form__legal">
              By clicking "Sign Up", you agree to Layovero's Terms of Use and
              acknowledge you have read the Privacy Policy.
            </div>
            <div className="auth-form__new">Already a Member?</div>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "signUpForm",
  fields: ["email", "password", "passwordConfirm"]
})(connect(null, { SignUserUp })(SignUp));