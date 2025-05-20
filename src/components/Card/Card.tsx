import React, { type ReactNode } from "react";
import { cardContainer, cardContent } from "./Card.css.js";

export interface Props {
  children?: ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => (
  <div className={cardContainer}>
    <div className={cardContent} children={children} />
  </div>
);
