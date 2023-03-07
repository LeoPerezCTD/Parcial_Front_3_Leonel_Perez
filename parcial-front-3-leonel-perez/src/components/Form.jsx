import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    personajeMarvel: "",
    villano: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const reset = () => {
    setUser({
      nombre: "",
      personajeMarvel: "",
      villano: "",
    }),
    setShow(false);
    setErr(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.nombre.length >= 3 &&
      user.nombre.charAt(0) != " " &&
      user.personajeMarvel.length >= 6
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Ingresa tu nombre</label>
        <br />
        <input
          type="text"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <br />
        <br />
        <label>Personaje de Marvel favorito</label>
        <br />
        <input
          type="text"
          value={user.personajeMarvel}
          onChange={(e) =>
            setUser({ ...user, personajeMarvel: e.target.value })
          }
        />
        <br />
        <br />
        <label>Villano Favorito</label>
        <br />
        <select
          value={user.villano}
          onChange={(e) => setUser({ ...user, villano: e.target.value })}
        >
          <option value="">Seleccione una opción</option>
          <option value="THANOS 'El titan loco y morado'">
            THANOS 'El titan loco y morado'
          </option>
          <option value="KANG 'El Conquistador también morado'">
            KANG 'El Conquistador' también morado xD
          </option>
          <option value="GRU ???">GRU ???</option>
        </select>

        <br />
        <br />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Enviar
        </button>
        <br />
        <br />
        <button
          onClick={reset}
          style={{ backgroundColor: "crimson", color: "white" }}
        >
          Reset
        </button>
        <br />
        {err && "Por favor chequea que la información sea correcta"}
      </form>
      {show && (
        <Card
          nombre={user.nombre}
          personaje={user.personajeMarvel}
          villano={user.villano}
        />
      )}
    </div>
  );
};

export default Form;
