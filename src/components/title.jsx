import React from "react";
import { number, string } from "prop-types";

/**
 * TIPO DE COMPONENTE
 * - Presentacion
 * - Stateless
 */
export const Title = ({ value }) => <h1>{value}</h1>;

Title.propTypes = {
  value: string,
};

Title.defaultProps = {
  value: "(UNDEFINED)",
};
