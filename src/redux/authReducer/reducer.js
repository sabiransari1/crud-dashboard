import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initialeState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  errMessage: "",
  token: "",
};

export const reducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: payload,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    }
    default: {
      return state;
    }
  }
};
