import React, { useState } from 'react';
import CardAccion from './CardAccion';

interface PedidosProps {
  onAccionRealizada: (modulo: string, accion: string) => void;
}

const Pedidos: React.FC<PedidosProps> = ({ onAccionRealizada }) => {

  const [accionesModulo, setAccionesModulo] = useState<number>(0);

  const [mostrarPanel, setMostrarPanel] = useState<boolean>(true);

  const manejarAccionLocal = (modulo: string, accion: string): void => {
    setAccionesModulo((valorPrevio: number) => valorPrevio + 1);
    onAccionRealizada(modulo, accion);
  };

  return (
    <div>
      <div className="cabecera-modulo">
        <h2>Módulo de Pedidos</h2>
        <button className="boton-switch" onClick={() => setMostrarPanel((valor: boolean) => !valor)}>
          {mostrarPanel ? 'Ocultar panel' : 'Mostrar panel'}
        </button>
      </div>

      {mostrarPanel && (
        <p className="contador-acciones">Acciones ejecutadas en este módulo: {accionesModulo}</p>
      )}

      <CardAccion
        titulo="Pedidos pendientes"
        descripcion="Pedidos realizados por empresas y comerciantes"
        modulo="Pedidos"
        onAccion={manejarAccionLocal}
      />
    </div>
  );
};

export default Pedidos;
