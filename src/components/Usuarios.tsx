import React, { useState } from 'react';
import CardAccion from './CardAccion';

interface UsuariosProps {
  onAccionRealizada: (modulo: string, accion: string) => void;
}

const Usuarios: React.FC<UsuariosProps> = ({ onAccionRealizada }) => {

  const [accionesModulo, setAccionesModulo] = useState<number>(0);

  const [mostrarPanel, setMostrarPanel] = useState<boolean>(true);

  const manejarAccionLocal = (modulo: string, accion: string): void => {
    setAccionesModulo((valorPrevio: number) => valorPrevio + 1);
    onAccionRealizada(modulo, accion);
  };

  return (
    <div>
      <div className="cabecera-modulo">
        <h2>Módulo de Usuarios</h2>
        <button className="boton-switch" onClick={() => setMostrarPanel((valor: boolean) => !valor)}>
          {mostrarPanel ? 'Ocultar panel' : 'Mostrar panel'}
        </button>
      </div>

      {mostrarPanel && (
        <p className="contador-acciones">Acciones ejecutadas en este módulo: {accionesModulo}</p>
      )}

      <CardAccion
        titulo="Campesinos"
        descripcion="Usuarios que publican productos del campo"
        modulo="Usuarios-Campesinos"
        onAccion={manejarAccionLocal}
      />
      <CardAccion
        titulo="Empresas"
        descripcion="Usuarios que compran al por mayor"
        modulo="Usuarios-Empresas"
        onAccion={manejarAccionLocal}
      />
      <CardAccion
        titulo="Comerciantes"
        descripcion="Usuarios que revenden los productos"
        modulo="Usuarios-Comerciantes"
        onAccion={manejarAccionLocal}
      />
    </div>
  );
};

export default Usuarios;
