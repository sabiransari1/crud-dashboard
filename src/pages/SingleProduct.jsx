import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { deleteProduct } from "../redux/productReducer/action";

export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const products = useSelector((store) => store.productReducer.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find((item) => item.id === +id);
    setProduct(data);
  }, []);

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <DIV>
      <div>
        <img src={product.image} alt={product.brandName} />
      </div>
      <h3>{product.brandName}</h3>
      <p>{product.name}</p>
      <h2>₹{product.totalPrice}</h2>
      <p>{product.size && product.size}</p>
      <p>{product.color && product.color}</p>
      <p>{product.fabric && product.fabric}</p>
      <button>
        <Link
          to={`/edit/${id}`}
          style={{ color: "white", textDecoration: "none" }}
        >
          Edit
        </Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
      <button>
        <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
          Go To Home
        </Link>
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 50%;
  margin: auto;
  div > :first-child {
    margin-top: 100px;
    width: 50%;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
  h3,
  h2 {
    text-align: center;
    margin-top: 5px;
  }
  h2 {
    cursor: pointer;
  }
  p {
    text-align: center;
    margin-top: 5px;
  }
  button {
    width: 100%;
    color: white;
    background-color: black;
    border-radius: 5px;
    margin-top: 5px;
    padding: 10px;
    cursor: pointer;
  }
`;
