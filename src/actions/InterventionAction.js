import axios from "axios";

import { IS_FETCHING, FETCHED, FETCH_FAILED } from "./types";

export const getInterventions = () => async dispatch => {
  console.log('actions');
  dispatch({
    type: IS_FETCHING
  });
  return await axios
    .get(`https://eian-ireporter.herokuapp.com/api/v1/interventions`, {
      headers: {
        Authorization: "Bearer " + sessionStorage.access_token
      }
    })
    .then(response => {
      dispatch({
        type: FETCHED,
        payload: response.data.interventions_list
      });
    })
    .catch(errors => {
      dispatch({
        type: FETCH_FAILED,
        payload: {
          errors: "No interventions exist"
        }
      });
    });
};
