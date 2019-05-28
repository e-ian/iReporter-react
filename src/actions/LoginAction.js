import axios from "axios";

import { toast } from "react-toastify";
import { LOGIN_STARTED, LOGIN_FAIL, SUCCESSFUL } from "./types";

export const successLogin = data => {
  return {
    type: SUCCESSFUL,
    payload: data.access_token
  };
};

export const userLoginRequest = userData => async dispatch => {
  toast.dismiss();
  dispatch({
    type: LOGIN_STARTED
  });
  try {
    const response = await axios.post(
      "https://eian-ireporter.herokuapp.com/api/v1/auth/login",
      userData
    );

    sessionStorage.setItem("access_token", response.data.access_token);

    dispatch(successLogin(response));

    toast.success(`Welcome! Login Successful`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: false
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });

    toast.error(`Username or password incorrect`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
      hideProgressBar: false
    });
  }
};
