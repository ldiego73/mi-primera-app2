import React from "react";

/**
 * TIPO DE COMPONENTE
 * - Presentacion
 * - Stateless
 */
export const Comment = ({ title, description }) => (
  <p>
    <span>{title}</span>
    <span>{description}</span>
  </p>
);
