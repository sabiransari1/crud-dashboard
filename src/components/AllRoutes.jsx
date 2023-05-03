import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";
import { SingleProduct } from "../pages/SingleProduct";
import { EditProduct } from "../pages/EditProduct";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route
        path={"/admin"}
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path={"/products/:id"}
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      />
      <Route
        path={"/edit/:id"}
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route path={"/login"} element={<Login />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
