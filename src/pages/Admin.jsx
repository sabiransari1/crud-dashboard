import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productReducer/action";
import styled from "styled-components";

let initialState = {
  image: "",
  brandName: "",
  name: "",
  totalPrice: "",
  size: "",
};

export const Admin = () => {
  let [product, setproduct] = useState(initialState);
  let dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setproduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setproduct(initialState);
  };

  return (
    <DIV>
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Product Image"
        />
        <br />
        <input
          type="text"
          name="brandName"
          value={product.brandName}
          onChange={handleChange}
          placeholder="Product Brand Name"
        />
        <br />
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <br />
        <input
          type="number"
          name="totalPrice"
          value={product.totalPrice}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <br />
        <select name="size" value={product.size} onChange={handleChange}>
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
          <option value="XXL">Extra Extra Large</option>
        </select>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  margin-top: -10px;
  form {
    border: 1px solid red;
    width: 25%;
    margin: auto;
  }
  input,
  select,
  button {
    width: 100%;
  }
`;
