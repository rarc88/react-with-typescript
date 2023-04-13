import React from "react";

import { Sub } from "../types";
import { Item } from "./Item";

interface Props {
  subs: Array<Sub>;
}

export const List = ({ subs }: Props) => {
  return (
    <ul>
      {subs.map((sub, index) => (
        <Item key={index} sub={sub} />
      ))}
    </ul>
  );
};
