import React, { FC } from "react";

import { Button } from "../../index";

import { THEME_COLORS } from "../../../helpers/constants/theme-constants";

import { products } from "../../../db/products";

import s from "./PizzaCards.module.css";

const { GREEN, RED } = THEME_COLORS;

const PizzaCards: FC = () => {
  return (
    <ul className={s.list}>
      {products.map(({ id, description, image, price, title }) => (
        <li key={id} className={s.item}>
          <div className={s.itemImageWrapper}>
            <img src={image} alt={title} />
          </div>
          <div className={s.itemContent}>
            <p className={s.itemContentTitle}>{title}</p>
            <p className={s.itemContentDescription}>{description}</p>
            <p className={s.itemContentPrice}>Price: {price}₴</p>

            <Button text="Add to cart" inlineStyles={{ margin: "0 auto" }} />
            <div className={s.itemContentPlusMinusBtns}>
              <Button text="+" inlineStyles={{ color: GREEN }} />
              <Button text="-" inlineStyles={{ color: RED }} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PizzaCards;
