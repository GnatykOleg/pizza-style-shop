import React, { FC } from "react";

import { NavLink } from "react-router-dom";

import { ROUTES_PATHS } from "../../../helpers/constants/routes-constants";

import logoImage from "../../../assets/images/logo-pizza.webp";

import s from "./Logo.module.css";

const Logo: FC = () => (
  <NavLink className={s.logoLink} to={ROUTES_PATHS.PIZZA_PAGE}>
    <img className={s.logoIcon} src={logoImage} alt="logo-icon" />
    <span className={s.logoPizzaText}>Pizza</span>
    <span className={s.logoStyleText}>Style</span>
  </NavLink>
);

export default Logo;
