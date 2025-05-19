import React from "react";
import { appContainer } from "./App.css.js";

export interface Props {
  name: string;
}

export const App: React.FC<Props> = ({ name }) => <div className={appContainer}>{`Hello, ${name}!`}</div>;
