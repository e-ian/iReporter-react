import {
  IS_REGISTERING,
  REGISTRATION_ERROR,
  RIGISTRATION_SUCCESS
} from "./types";
import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = userData => async dispatch => {
  toast.dismiss();
  dispatch({
    type: IS_REGISTERING
  });
  await axios
    .post("https://eian-ireporter.herokuapp.com/api/v1/auth/signup", userData)
    .then(response => {
      dispatch({
        type: RIGISTRATION_SUCCESS,
        payload: response.data
      });
      toast.success(`Successfully registered, login to continue`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false
      });
    })
    .catch(error => {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: error.response.data.message
      });
      const errorMessage = error.response.data.message;
      toast.error(`Sorry ${errorMessage}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
        hideProgressBar: false
      });
    });
};
