import React, { Component } from "react";
import classes from "./Auth.module.scss";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authActionCreator from "../../redux/actions/auth";
import { updatedObject, validation } from "../../shared/utility";

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        email: {
          validation: {
            type: "email",
            required: true
          },
          elementType: "input",
          errorMessage: "Incorect email address",
          elementConfig: {
            type: "email",
            placeholder: "Type your email"
          },
          touched: false,
          value: "",
          valid: false
        },
        password: {
          validation: {
            type: "password",
            required: true
          },
          elementType: "input",
          errorMessage: "Incorect password",
          elementConfig: {
            type: "password",
            placeholder: "Type your password"
          },
          touched: false,
          value: "",
          valid: false
        }
      },
      isSignUp: true
    };
  }

  formHandle = (event, inputType) => {
    const value = event.target.value;

    const updatedControls = updatedObject(this.state.controls, {
      [inputType]: {
        ...this.state.controls[inputType],
        touched: true,
        value: value,
        valid: validation(value, this.state.controls[inputType].validation)
      }
    });

    this.setState({
      controls: updatedControls
    });
  };

  loginHandle = e => {
    e.preventDefault();

    this.props.auth(
      "sdsd@gmail.com",
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  switchHandle = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        isSignUp: !prevState.isSignUp
      };
    });
  };

  render() {
    console.log(this.props.loading);
    let controls = [];
    for (let elementType in this.state.controls) {
      controls.push({
        id: elementType,
        controls: this.state.controls[elementType]
      });
    }

    let content = (
      <form className={classes.Form}>
        {controls.map(element => {
          return (
            <Input
              key={element.id}
              changed={event => this.formHandle(event, element.id)}
              configuration={element.controls}
              invalid={!element.controls.valid}
            />
          );
        })}

        <Button type="Success" clicked={this.loginHandle}>
          {this.state.isSignUp ? "Sign up" : "Sign in"}
        </Button>

        <button className={classes.SwitchButton} onClick={this.switchHandle}>
          Switch to {this.state.isSignUp ? "sign in" : "sign up"}
        </button>
      </form>
    );

    if (this.props.loading) {
      content = <Spinner />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = (
        <div className={classes.ErrorContent}>
          <p>{this.props.error.message}</p>
        </div>
      );
    }

    return (
      <div className={classes.Auth}>
        {/* {this.props.isAuth ? <Redirect to="/" /> : null} */}

        {errorMessage}

        <div className={classes.Icon}>
          <h2 className={classes.Title}>
            {this.state.isSignUp ? "Sign up" : "Sign in"}
          </h2>
        </div>
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(authActionCreator())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
