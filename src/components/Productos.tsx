import React, { useState } from 'react';
import CardAccion from './CardAccion';

interface ProductosProps {
  onAccionRealizada: (modulo: string, accion: string) => void;
}

const Productos: React.FC<ProductosProps> = ({ onAccionRealizada }) => {

  const [accionesModulo, setAccionesModulo] = useState<number>(0);
 
  const [mostrarPanel, setMostrarPanel] = useState<boolean>(true);

  const manejarAccionLocal = (modulo: string, accion: string): void => {
    setAccionesModulo((valorPrevio: number) => valorPrevio + 1);
    onAccionRealizada(modulo, accion);
  };

  return (
    <div>
      <div className="cabecera-modulo">
        <h2>Módulo de Productos</h2>
        <button className="boton-switch" onClick={() => setMostrarPanel((valor: boolean) => !valor)}>
          {mostrarPanel ? 'Ocultar panel' : 'Mostrar panel'}
        </button>
      </div>

      {mostrarPanel && (
        <p className="contador-acciones">Acciones ejecutadas en este módulo: {accionesModulo}</p>
      )}

      <CardAccion
        titulo="Publicaciones activas"
        descripcion="Productos que los campesinos tienen a la venta"
        modulo="Productos"
        onAccion={manejarAccionLocal}
      />
    </div>
  );
};

export default Productos;
