import React from "react";

export interface Props {
  name: string;
}

export const App: React.FC<Props> = ({ name }) => `Hello, ${name}!`;
