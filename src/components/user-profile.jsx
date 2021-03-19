import React from "react";
import { string, shape, number } from "prop-types";
import { Image } from "./image";

const calculateAge = (birthday) => {
  const parts = birthday.split("/");
  const fechaNacimiento = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
  const fechaActual = new Date();

  return fechaActual.getFullYear() - fechaNacimiento.getFullYear();
};

export function UserProfile({ user }) {
  const { name, lastName, birthday, email, image } = user;

  return (
    <div>
      {image && (
        <>
          <Image url={image} description={`${name} ${lastName}`} />
          <br />
        </>
      )}

      <p>Nombre: {name}</p>
      <p>Apellidos: {lastName}</p>
      <p>Fecha de Cumpleaños: {birthday}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>Edad: {calculateAge(birthday)}</p>
    </div>
  );
}

UserProfile.propTypes = {
  user: shape({
    name: string.isRequired,
    lastName: string.isRequired,
    birthday: string.isRequired,
    email: string.isRequired,
    image: string,
  }),
};
