import React from "react";
import { string } from "prop-types";

export const Image = ({ url, description }) => (
  <img src={url} alt={description} loading="lazy" />
);

Image.propTypes = {
  url: string,
  description: string,
};
