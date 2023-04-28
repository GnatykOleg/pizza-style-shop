import React, { FC, Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import { ROUTES_PATHS } from "../helpers/constants/routes-constants";

import { Loader } from "../components";

const PizzaPage = lazy(() => import("../pages/PizzaPage/PizzaPage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));

const { CART_PAGE, NOT_FOUND_PAGE, PIZZA_PAGE } = ROUTES_PATHS;

const PagesRoutes: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route>
        <Route path={PIZZA_PAGE} element={<PizzaPage />} />
        <Route path={CART_PAGE} element={<CartPage />} />
        <Route path={NOT_FOUND_PAGE} element={<PizzaPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default PagesRoutes;
