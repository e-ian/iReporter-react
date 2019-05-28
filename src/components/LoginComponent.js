import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../styles/login.scss";

const styles = themes => ({
  floatingLabelFocusStyle: {
    color: "black",
    fontFamily: "Quantico",
    fontSize: "15px",
    fontWeight: "bold"
  }
});
const Login = props => {
  const {
    classes,
    password,
    username,
    handleChange,
    handleSubmit,
    isProcessing
  } = props;

  let Loader = require("react-loader");

  return (
    <div>
      <Grid container spacing={10}>
        <Grid item lg={2} md={2} />
        <Grid item lg={8} md={8}>
          <Paper className="Paper">
            <h2>Login</h2>

            <Grid container spacing={10}>
              <Grid
                item
                lg={6}
                md={6}
                className="grid-register"
                id="login-form"
              >
                <form onSubmit={handleSubmit}>
                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="username"
                    label="username"
                    name="username"
                    type="text"
                    required
                    className="textField"
                    value={username}
                    onChange={handleChange}
                  />

                  <TextField
                    InputLabelProps={{
                      className: classes.floatingLabelFocusStyle
                    }}
                    id="password"
                    label="password"
                    name="password"
                    required
                    minLength={6}
                    maxLength={16}
                    type="password"
                    className="textField"
                    value={password}
                    onChange={handleChange}
                  />
                  <Loader loaded={!isProcessing} />
                  <Button type="submit" className="button-success">
                    Login
                  </Button>
                </form>
              </Grid>
            </Grid>
            <p>
              Don't have an account yet?{" "}
              <a href="/register" id="link">
                create one now
              </a>
            </p>
          </Paper>
        </Grid>
        <Grid item lg={2} md={2} />
      </Grid>
    </div>
  );
};
export default withStyles(styles)(Login);
