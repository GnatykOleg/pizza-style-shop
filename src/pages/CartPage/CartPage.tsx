import React, { FC } from "react";

import { Link } from "react-router-dom";

import { getStateSelector } from "../../redux/selectors/pizzasSelectors";

import { clearCart } from "../../redux/pizzas/pizzasSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "../../helpers/hooks/redux-hooks";

import { ROUTES_PATHS } from "../../helpers/constants/routes-constants";

import { Button, Container, PizzaCards, Section } from "../../components";

import { toast } from "react-toastify";

import s from "./CartPage.module.css";

const CartPage: FC = () => {
  const { cart, pizzas } = useAppSelector(getStateSelector);

  const dispatch = useAppDispatch();

  const total = cart.reduce((acc, { id, quantity }) => {
    const { price } = pizzas.find((pizza) => pizza.id === id)!!;
    return price * quantity + acc;
  }, 0);

  const onClick = (text: string) => {
    dispatch(clearCart());
    toast.success(text);
  };

  return (
    <Section>
      <h2 className="visually-hidden ">Cart page</h2>
      <Container>
        {cart.length === 0 && (
          <p className={s.choosePizzaText}>
            Please, choose pizza
            <Link className={s.choosePizzaLink} to={ROUTES_PATHS.PIZZA_PAGE}>
              here
            </Link>
          </p>
        )}

        {cart.length > 0 && (
          <>
            <PizzaCards isCart />

            <p className={s.totalText}>Total: {total}UAH</p>

            <Button
              onClick={() => onClick("Your order has been received!")}
              text="Make an order"
              inlineStyles={{ margin: "0 auto" }}
            />

            <Button
              onClick={() => onClick("Your cart has been cleared!")}
              text="Clear cart"
              inlineStyles={{ margin: "0 auto", marginTop: "15px" }}
            />
          </>
        )}
      </Container>
    </Section>
  );
};

export default CartPage;
