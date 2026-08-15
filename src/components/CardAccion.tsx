import React, { useState } from 'react';
import './CardAccion.css';

interface CardAccionProps {
  titulo: string;
  descripcion: string;
  modulo: string;
  onAccion: (modulo: string, accion: string) => void;
}

const CardAccion: React.FC<CardAccionProps> = ({ titulo, descripcion, modulo, onAccion }) => {
  // Estado local: indica si la acción está "cargando" (simulación de proceso async)
  const [ejecutando, setEjecutando] = useState<boolean>(false);
  // Estado local: cuenta cuántas veces se ha ejecutado la acción de esta tarjeta
  const [vecesEjecutado, setVecesEjecutado] = useState<number>(0);

  const manejarClick = (): void => {
    setEjecutando(true);

    setTimeout(() => {
      setVecesEjecutado((valorPrevio: number) => valorPrevio + 1);
      setEjecutando(false);
      onAccion(modulo, `Acción ejecutada en ${titulo}`);
    }, 400);
  };

  return (
    <div className="card-accion">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <button onClick={manejarClick} disabled={ejecutando}>
        {ejecutando ? 'Ejecutando...' : 'Ejecutar acción'}
      </button>
      {vecesEjecutado > 0 && (
        <p className="contador-tarjeta">Ejecutada {vecesEjecutado} vez(es) ✓</p>
      )}
    </div>
  );
};

export default CardAccion;
