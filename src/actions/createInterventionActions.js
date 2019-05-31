import axios from "axios";

import { CREATE_INTERVENTIONS, CREATE_ERROR } from "./types";

export const createActions = data => async dispatch => {
  return await axios
    .post(`https://eian-ireporter.herokuapp.com/api/v1/interventions`, data, {
      headers: {
        Authorization: "Bearer " + sessionStorage.access_token
      }
    })
    .then(response => {
      dispatch({
        type: CREATE_INTERVENTIONS,
        payload: response.data.data.message
      });
    })
    .catch(errors => {
      dispatch({
        type: CREATE_ERROR,
        payload: response.data.error
      });
    });
};
