import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>Todos los derechos reservados @{year}</footer>;
};
