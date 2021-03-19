import React from "react";
import { string, func } from "prop-types";

/**
 * TIPO DE COMPONENTE
 * - Presentacion
 * - Statefull
 */
export function Button({ value, onClicked }) {
  const handleClick = () => {
    if (typeof onClicked === "function") {
      onClicked();
    }
  };

  return <button onClick={handleClick}>{value}</button>;
}

Button.propTypes = {
  value: string,
  onClicked: func,
};

Button.defaultProps = {
  onClicked: () => {},
};
