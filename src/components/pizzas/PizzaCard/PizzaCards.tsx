import React, { FC } from "react";

import { useAppSelector } from "../../../helpers/hooks/redux-hooks";
import { getStateSelector } from "../../../redux/selectors/pizzasSelectors";

import CardActions from "../CardActions/CardActions";

import s from "./PizzaCards.module.css";

const PizzaCards: FC<{ isCart?: boolean }> = ({ isCart = false }) => {
  const { pizzas, cart } = useAppSelector(getStateSelector);

  // The PizzaCards component accepts an isCart prop with a boolean value.
  // Since the PizzaCards component is rendered on the PizzaPage and CartPage pages,
  // we are filtering the pizzas by rule.
  const pizzasToRender = isCart
    ? pizzas.filter((pizza) => cart.some(({ id }) => id === pizza.id))
    : pizzas;

  return (
    <ul className={s.list}>
      {pizzasToRender.map(({ id, description, image, price, title }) => (
        <li key={id} className={s.item}>
          <div className={s.itemImageWrapper}>
            <img src={image} alt={title} />
          </div>

          <div className={s.itemContent}>
            <p className={s.itemContentTitle}>{title}</p>
            <p className={s.itemContentDescription}>{description}</p>
            <p className={s.itemContentPrice}>
              Price: <span>{price}UAH</span>
            </p>

            <CardActions id={id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PizzaCards;
