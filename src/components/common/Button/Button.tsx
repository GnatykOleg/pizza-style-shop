import React, { FC } from "react";

import { IButtonProps } from "../../../types/components/components-types";

import s from "./Button.module.css";

const Button: FC<IButtonProps> = ({ text, onClick, inlineStyles }) => (
  <button
    className={s.button}
    onClick={onClick}
    type="button"
    style={inlineStyles}
  >
    {text}
  </button>
);

export default Button;
