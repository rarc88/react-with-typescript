import React from "react";
import { Sub } from "../types";

interface Props {
  sub: Sub;
}

export const Item = ({ sub }: Props) => {
  return (
    <li>
      <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
      <h4>
        {sub.nick} (<small>{sub.subMonths}</small>)
      </h4>
      <p>{sub.description?.substring(0, 100)}</p>
    </li>
  );
};
