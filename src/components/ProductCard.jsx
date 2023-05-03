import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/productReducer/action";

export const ProductCard = ({
  id,
  image,
  name,
  brandName,
  totalPrice,
  discount,
  shipping,
  color,
  size,
  fabric,
  length,
}) => {
  let dispatch = useDispatch();

  let handleDelete = () => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getProducts({}));
    });
  };

  return (
    <DIV>
      <div>
        <img src={image} alt={brandName} />
      </div>
      <h3>{brandName}</h3>
      <p>{name}</p>
      <h2>₹{totalPrice}</h2>
      <button>
        <Link
          to={`/edit/${id}`}
          style={{ color: "white", textDecoration: "none" }}
        >
          Edit
        </Link>
      </button>
      <button>
        <Link
          to={`/products/${id}`}
          style={{ color: "white", textDecoration: "none" }}
        >
          View More Details
        </Link>
      </button>
      <button onClick={handleDelete}>Delete</button>
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
  box-shadow: none;
  div > :first-child {
    width: 100%;
    height: 200px;
  }
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
