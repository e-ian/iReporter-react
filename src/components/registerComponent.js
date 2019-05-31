import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "react-loader";
import "../styles/signup.scss";

const styles = themes => ({
  floatingLabelFocusStyle: {
    color: "black",
    fontFamily: "Quantico",
    fontSize: "15px",
    fontWeight: "bold"
  }
});
export const RegisterComponent = props => {
  const {
    classes,
    password,
    firstname,
    lastname,
    role,
    username,
    email,
    handleOnChange,
    errors,
    handleOnSubmit,
    isRegistering
  } = props;
  return (
    <div>
      <div className="container">
        <div className="container">
          <Paper className="Paper">
            <h2>SignUp</h2>
            <div className="signup-container">
              <form onSubmit={handleOnSubmit} id="registerForm">
                <TextField
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle
                  }}
                  id="firstname"
                  label="firstname"
                  name="firstname"
                  required
                  type="text"
                  className="textField"
                  value={firstname}
                  onChange={handleOnChange}
                />
                <p />
                <TextField
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle
                  }}
                  id="lastname"
                  label="lastname"
                  name="lastname"
                  required
                  type="text"
                  className="textField"
                  value={lastname}
                  onChange={handleOnChange}
                />
                <p />
                <TextField
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle
                  }}
                  id="username"
                  label="username"
                  name="username"
                  required
                  type="text"
                  className="textField"
                  value={username}
                  onChange={handleOnChange}
                />
                <p>
                  {errors.username.length > 0 ? (
                    <span className="form-errors">{errors.username}</span>
                  ) : (
                    ""
                  )}
                </p>
                <TextField
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle
                  }}
                  id="email"
                  label=" email"
                  name="email"
                  required
                  type="text"
                  className="textField"
                  value={email}
                  onChange={handleOnChange}
                />
                <p>
                  {errors.email.length > 0 ? (
                    <span className="form-errors">{errors.email}</span>
                  ) : (
                    ""
                  )}
                </p>
                <TextField
                  InputLabelProps={{
                    className: classes.floatingLabelFocusStyle
                  }}
                  id="password"
                  label="password"
                  name="password"
                  required
                  type="password"
                  className="textField"
                  value={password}
                  onChange={handleOnChange}
                />
                <p>
                  {errors.password.length > 0 ? (
                    <span className="form-errors">{errors.password}</span>
                  ) : (
                    ""
                  )}
                </p>

                <Button type="submit" className="button-success">
                  Register
                  {isRegistering ? <Loader color="#FFFF" /> : ""}
                </Button>
              </form>
            </div>
            <p>
              Already have an Account? <Link to="/login"> login</Link>
            </p>
          </Paper>
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(RegisterComponent);
