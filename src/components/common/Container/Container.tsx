import React, { FC } from "react";

import { IContainerProps } from "../../../types/components/components-types";

import s from "./Container.module.css";

const Container: FC<IContainerProps> = ({ children }: IContainerProps) => (
  <div className={s.container}>{children}</div>
);

export default Container;
