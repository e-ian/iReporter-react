import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterComponent from "../components/registerComponent";
import { registerUser } from "../actions/registerActions";
import { passwordValidate, validEmailRegex } from "../utils/regex";
import { validateForm } from "../utils/validateforms";

export class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      role: "",
      email: "",
      password: "",
      errors: {
        username: "",
        email: "",
        password: ""
      },
      isLoading: false
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoginSuccess === true) {
      const { history } = this.props;
      history.push("/login");
    }
  };
  handleOnchange = event => {
    // console.log(this.state);

    event.preventDefault();
    let errors = this.state.errors;
    const { name, value } = event.target;
    switch (name) {
      case "username":
        errors.username =
          value.length < 4 ? " username must be atleast 4 characters" : "";
        break;
      case "firstname":
        errors.firstname =
          value.length < 4 ? " firstname must be atleast 4 characters" : "";
        break;
      case "lastname":
        errors.lastname =
          value.length < 4 ? " lastname must be atleast 4 characters" : "";
        break;
      case "role":
        errors.role =
          value.length < 4 ? " role must be either admin or user" : "";
        break;
      case "email":
        errors.email = !validEmailRegex.test(value) ? " Invalid email" : "";
        break;
      case "password":
        errors.password = !passwordValidate.test(value)
          ? "Password must have least a number, lowercase char, special char and min of 8 chars"
          : "";
        break;
      default:
        return null;
    }
    this.setState({ errors, [name]: value });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      const {
        username,
        password,
        email,
        firstname,
        lastname,
        role
      } = this.state;
      const { registerUser, history } = this.props;
      const data = {
        username: username,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        role: "admin"
      };

      registerUser(data, history);
    } else {
      return false;
    }
  };

  render() {
    const {
      username,
      password,
      email,
      errors,
      firstname,
      lastname,
      role
    } = this.state;
    return (
      <div>
        <RegisterComponent
          username={username}
          firstname={firstname}
          lastname={lastname}
          role={role}
          isRegistering={this.props.isRegistering}
          password={password}
          email={email}
          errors={errors}
          handleOnChange={this.handleOnchange}
          handleOnSubmit={this.handleOnSubmit}
          error_message={this.props.error}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  success: state.auth.success,
  error: state.auth.error,
  isRegistering: state.auth.isRegistering,
  isLoginSuccess: state.auth.isLoginSuccess
});
RegisterContainer.propTypes = {
  success: PropTypes.object,
  error: PropTypes.object,
  registerUser: PropTypes.func
};
export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterContainer);
