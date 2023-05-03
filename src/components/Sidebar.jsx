import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let initialSize = searchParams.getAll("size");
  let [size, setSize] = useState(initialSize || []);
  let initialOrder = searchParams.get("order");
  let [order, setOrder] = useState(initialOrder || "");

  let handleFilter = (e) => {
    let { value } = e.target;
    let newSize = [...size];
    if (newSize.includes(value)) {
      newSize = newSize.filter((item) => item !== value);
    } else {
      newSize.push(value);
    }
    setSize(newSize);
  };

  let handleOrder = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      size,
    };
    order && (params.order = order);

    setSearchParams(params);
  }, [size, order]);

  return (
    <DIV>
      <h2>Filter by Size</h2>
      <div>
        <input
          type="checkbox"
          value={"S"}
          onChange={handleFilter}
          checked={size.includes("S")}
        />
        <label>Small</label>
        <br />
        <input
          type="checkbox"
          value={"M"}
          onChange={handleFilter}
          checked={size.includes("M")}
        />
        <label>Medium</label>
        <br />
        <input
          type="checkbox"
          value={"L"}
          onChange={handleFilter}
          checked={size.includes("L")}
        />
        <label>Large</label>
        <br />
        <input
          type="checkbox"
          value={"XL"}
          onChange={handleFilter}
          checked={size.includes("XL")}
        />
        <label>Extra Large</label>
        <br />
        <input
          type="checkbox"
          value={"XXL"}
          onChange={handleFilter}
          checked={size.includes("XXL")}
        />
        <label>Extra Extra Large</label>
        <br />
      </div>
      <br />

      <h2>Sort By Price</h2>
      <div onChange={handleOrder}>
        <input
          type="radio"
          name="sort"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  position: fixed;
  padding: 0 20px 20px 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
