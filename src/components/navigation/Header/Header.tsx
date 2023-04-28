import React, { FC } from "react";

import s from "./Header.module.css";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header: FC = () => (
  <header className={s.header}>
    <nav>
      <HeaderMenu />
    </nav>
  </header>
);

export default Header;
