import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import { Box, Input } from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

export const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  let ref = useRef();

  let paramObj = {
    params: {
      q: query && query,
    },
  };

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      dispatch(getProducts(paramObj));
    }, 2000);
  }, [query]);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        bgColor={"black"}
        w={"100vw"}
        h={"70px"}
        position={"fixed"}
      >
        <Link
          to={"/"}
          style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
        >
          Home
        </Link>
        <Link
          to={"/admin"}
          style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
        >
          Admin
        </Link>
        <Input
          type="text"
          placeholder="Search here..."
          variant="filled"
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
    </>
  );
};
