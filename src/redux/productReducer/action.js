import axios from "axios";
import {
  GET_PRODUCTS_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "../actionTypes";

export const getProducts = (paramObj) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const res = await axios.get(`http://localhost:8080/menWear`, paramObj);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};

export const addProduct = (newProduct) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const res = await axios.post(`http://localhost:8080/menWear`, newProduct);
    dispatch({ type: POST_PRODUCT_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};

export const editProduct = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const res = axios.patch(`http://localhost:8080/menWear/${id}`, data);
    dispatch({ type: PATCH_PRODUCT_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const res = axios.delete(`http://localhost:8080/menWear/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS });
    return res;
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};
