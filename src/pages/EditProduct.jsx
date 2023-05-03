import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../redux/productReducer/action";
import styled from "styled-components";

export const EditProduct = () => {
  const [price, setPrice] = useState("");
  const { id } = useParams();

  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find((item) => item.id === +id);
    setPrice(data.totalPrice);
  }, []);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleEdit = () => {
    const data = { totalPrice: +price };
    dispatch(editProduct(id, data));
  };

  return (
    <DIV>
      <div>
        <h1>{id}</h1>
        <input type="number" value={price} onChange={handleChange} />
        <button onClick={handleEdit}>Update Price</button>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  margin-top: -10px;
  div {
    margin-top: 100px;
    width: 25%;
    margin: auto;
  }
  input,
  button {
    width: 100%;
  }
`;
