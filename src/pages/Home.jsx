import React from "react";
import { ProductList } from "../components/ProductList";
import { Sidebar } from "../components/Sidebar";
import styled from "styled-components";

export const Home = () => {
  return (
    <DIV>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="productlist">
        <ProductList />
      </div>
    </DIV>
  );
};

let DIV = styled.div`
  display: flex;
  padding: 100px 50px 0 50px;
  .sidebar {
    width: 15%;
    margin-right: 20px;
  }
  .productlist {
    width: 85%;
  }
`;
