import { ReactNode } from "react";

export interface IContainerProps {
  children: ReactNode;
}

export interface ISectionProps {
  children: ReactNode;
}

export interface IButtonProps {
  text: string;
  onClick?: () => void;
  inlineStyles?: { [key: string]: string };
}
