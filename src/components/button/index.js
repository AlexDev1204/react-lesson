import React, { useState } from "react";

import "./style.css";

export const Button = ({ name }) => {
  const [active, setActive] = useState(false);
  return (
    <button
      onClick={() => {
        setActive(!active);
      }}
      className={active ? "btn-active" : "btn"}
    >
      {name}
    </button>
  );
};
