import React from "react";
import error from "../assets/error.jpg";
import styled from "styled-components";

export const PageNotFound = () => {
  return (
    <DIV>
      <img src={error} alt="Page Not Found" />
    </DIV>
  );
};

const DIV = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
