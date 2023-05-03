import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/productReducer/action";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const ProductList = () => {
  let [searchParams] = useSearchParams();
  let dispatch = useDispatch();
  let { isLoading, products, isError, errMessage } = useSelector((store) => {
    return {
      isLoading: store.productReducer.isLoading,
      products: store.productReducer.products,
      isError: store.productReducer.isError,
      errMessage: store.productReducer.errMessage,
    };
  }, shallowEqual);
  let loaction = useLocation();

  let paramObj = {
    params: {
      size: searchParams.getAll("size"),
      _sort: searchParams.get("order") && "totalPrice",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [loaction.search]);

  return (
    <DIV>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>{errMessage}</h1>}
      {products.length > 0 &&
        products?.map((item) => <ProductCard key={item.id} {...item} />)}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
