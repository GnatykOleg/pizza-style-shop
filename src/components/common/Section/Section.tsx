import React, { FC } from "react";

import { ISectionProps } from "../../../types/components/components-types";

import s from "./Section.module.css";

const Section: FC<ISectionProps> = ({ children }: ISectionProps) => (
  <section className={s.section}>{children}</section>
);

export default Section;
