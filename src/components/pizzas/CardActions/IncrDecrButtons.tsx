import React, { FC } from "react";

import {
  decremeantPizza,
  incremeantPizza,
} from "../../../redux/pizzas/pizzasSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/redux-hooks";

import { getStateSelector } from "../../../redux/selectors/pizzasSelectors";

import { THEME_COLORS } from "../../../helpers/constants/theme-constants";

import Button from "../../common/Button/Button";

import s from "./IncrDecrButtons.module.css";

const IncrDecrButtons: FC<{ id: number }> = ({ id }) => {
  const { cart } = useAppSelector(getStateSelector);

  const dispatch = useAppDispatch();

  return (
    <div className={s.wrapper}>
      <Button
        onClick={() => dispatch(incremeantPizza(id))}
        text="+"
        inlineStyles={{ color: THEME_COLORS.GREEN }}
      />

      <p className={s.countText}>
        {cart.find((pizza) => pizza.id === id)?.quantity}
      </p>

      <Button
        onClick={() => dispatch(decremeantPizza(id))}
        text="-"
        inlineStyles={{ color: THEME_COLORS.RED }}
      />
    </div>
  );
};

export default IncrDecrButtons;
