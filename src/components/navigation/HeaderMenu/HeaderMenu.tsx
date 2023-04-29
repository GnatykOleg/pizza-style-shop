import React, { FC } from "react";

import { NavLink } from "react-router-dom";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import { getStateSelector } from "../../../redux/selectors/pizzasSelectors";
import { useAppSelector } from "../../../helpers/hooks/redux-hooks";

import Logo from "../Logo/Logo";

import { TiShoppingCart } from "react-icons/ti";

import s from "./HeaderMenu.module.css";

const HeaderMenu: FC = () => {
  const { cart } = useAppSelector(getStateSelector);

  const total = cart.reduce((acc, { quantity }) => {
    return (acc += quantity);
  }, 0);

  const setLinkStatus = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.linkActive : s.link;

  return (
    <ul className={s.list}>
      <li className={s.listItemLogo}>
        <Logo />
      </li>

      <li className={s.listItemPizza}>
        <NavLink className={setLinkStatus} to={ROUTES_PATHS.PIZZA_PAGE}>
          Pizza
        </NavLink>
      </li>

      <li>
        <NavLink className={setLinkStatus} to={ROUTES_PATHS.CART_PAGE}>
          <TiShoppingCart />
          {total > 0 && <span className={s.cartCount}>{total}</span>}
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderMenu;
