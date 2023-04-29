import React, { FC } from "react";

import { THEME_COLORS } from "../../../helpers/constants/theme-constants";

import { InfinitySpin } from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader: FC = () => (
  <div className={s.loaderContainer}>
    <InfinitySpin width="200" color={THEME_COLORS.PRIMARY_COLOR} />
  </div>
);

export default Loader;
