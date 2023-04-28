import React, { FC } from "react";

import { NavLink } from "react-router-dom";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import Logo from "../Logo/Logo";

import { TiShoppingCart } from "react-icons/ti";

import s from "./HeaderMenu.module.css";

const { PIZZA_PAGE, CART_PAGE } = ROUTES_PATHS;

const setLinkStatus = ({ isActive }: { isActive: boolean }) =>
  isActive ? s.linkActive : s.link;

const HeaderMenu: FC = () => (
  <ul className={s.list}>
    <li className={s.listItemLogo}>
      <Logo />
    </li>

    <li className={s.listItemPizza}>
      <NavLink className={setLinkStatus} to={PIZZA_PAGE}>
        Pizza
      </NavLink>
    </li>

    <li>
      <NavLink className={setLinkStatus} to={CART_PAGE}>
        <TiShoppingCart />
        <span className={s.cartCount}>111</span>
      </NavLink>
    </li>
  </ul>
);

export default HeaderMenu;
