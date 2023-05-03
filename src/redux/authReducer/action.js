import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
import axios from "axios";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await axios.post(`https://reqres.in/api/login`, userData);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    return res;
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};
