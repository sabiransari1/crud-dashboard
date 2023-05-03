import {
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "../actionTypes";

const initialeState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  products: new Array(),
};

export const reducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: payload,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case POST_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case PATCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
