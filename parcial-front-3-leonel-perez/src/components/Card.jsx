import React from 'react'

const Card = ({ nombre, personaje, villano }) => {
  
  return (
    <div>
      <h2>Hola {nombre} ! 👋</h2>
      <h2>Diviertete con tu personaje: {personaje}</h2>
      <h2>Acábalos a todos, especialmente a {villano}</h2>
    </div>
  );
}

export default Card