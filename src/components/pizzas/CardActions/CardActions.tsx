import React, { FC } from "react";

import { useLocation } from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/redux-hooks";

import { getStateSelector } from "../../../redux/selectors/pizzasSelectors";

import {
  addPizzaToCart,
  removePizzaFromCart,
} from "../../../redux/pizzas/pizzasSlice";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import Button from "../../common/Button/Button";

import IncrDecrButtons from "./IncrDecrButtons";

const CardActions: FC<{ id: number }> = ({ id }) => {
  const { cart } = useAppSelector(getStateSelector);

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  // Render the Add to cart button only if there is no such pizza in the cart.
  const addBtnRenderRule = !cart.some((pizza) => pizza.id === id);

  // Render the Remove button only if we're on the cart page.
  const removeBtnRenderRule = pathname === ROUTES_PATHS.CART_PAGE;

  // Render Plus and Minus buttons only if:
  // - The number of pizzas in the basket is GREATER than 0
  // - And if the ID of the pizza from the cart matches the ID of the pizza from the card
  const incrDecrBtnsRenderRule = cart.some(
    (pizza) => pizza.quantity > 0 && pizza.id === id
  );

  return (
    <>
      {addBtnRenderRule && (
        <Button
          onClick={() => dispatch(addPizzaToCart(id))}
          text="Add to cart"
          inlineStyles={{ margin: "0 auto" }}
        />
      )}

      {incrDecrBtnsRenderRule && <IncrDecrButtons id={id} />}

      {removeBtnRenderRule && (
        <Button
          onClick={() => dispatch(removePizzaFromCart(id))}
          text="Remove"
          inlineStyles={{ margin: "0 auto", marginTop: "15px" }}
        />
      )}
    </>
  );
};

export default CardActions;
