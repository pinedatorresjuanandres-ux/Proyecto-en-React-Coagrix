import React, { useState } from 'react';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Login from './components/Login';
import Registro from './components/Registro';
import Pedidos from './components/Pedidos';
import Catalogo from './components/Catalogo';
import logo from './assets/logo.jpeg';
import './App.css';

type Vista = 'usuarios' | 'productos' | 'catalogo' | 'login' | 'registro' | 'pedidos';

const App: React.FC = () => {
  // Estado local: controla qué módulo se muestra en pantalla
  const [vistaActual, setVistaActual] = useState<Vista>('usuarios');
  // Estado local: guarda y visualiza la última acción ejecutada por cualquier módulo
  const [ultimaAccion, setUltimaAccion] = useState<string>('');
  // Estado local: contador global de acciones realizadas en toda la app
  const [totalAcciones, setTotalAcciones] = useState<number>(0);

  const cambiarVista = (vista: Vista): void => {
    setVistaActual(vista);
  };

  const manejarAccion = (modulo: string, accion: string): void => {
    const registro = `[${modulo}] ${accion}`;
    console.log(registro);
    setUltimaAccion(registro);
    setTotalAcciones((valorPrevio: number) => valorPrevio + 1);
  };

  const renderVista = (): React.ReactNode => {
    switch (vistaActual) {
      case 'usuarios':
        return <Usuarios onAccionRealizada={manejarAccion} />;
      case 'productos':
        return <Productos onAccionRealizada={manejarAccion} />;
      case 'catalogo':
        return <Catalogo onAccionRealizada={manejarAccion} />;
      case 'login':
        return <Login onAccionRealizada={manejarAccion} />;
      case 'registro':
        return <Registro onAccionRealizada={manejarAccion} />;
      case 'pedidos':
        return <Pedidos onAccionRealizada={manejarAccion} />;
      default:
        return null;
    }
  };

  const opcionesMenu: { clave: Vista; etiqueta: string }[] = [
    { clave: 'usuarios', etiqueta: 'Usuarios' },
    { clave: 'productos', etiqueta: 'Productos' },
    { clave: 'catalogo', etiqueta: 'Catálogo' },
    { clave: 'login', etiqueta: 'Login' },
    { clave: 'registro', etiqueta: 'Registro' },
    { clave: 'pedidos', etiqueta: 'Pedidos' },
  ];

  return (
    <div className="contenedor">
      <header className="marca-header">
        <img src={logo} alt="Logo CoAgrix" className="marca-logo" />
        <div className="marca-texto">
          <h1>CoAgrix</h1>
          <p className="marca-subtitulo">Proyecto Formativo — Del campo a tu mesa</p>
        </div>
      </header>

      <nav className="nav-modulos">
        {opcionesMenu.map((opcion) => (
          <button
            key={opcion.clave}
            className={vistaActual === opcion.clave ? 'activo' : ''}
            onClick={() => cambiarVista(opcion.clave)}
          >
            {opcion.etiqueta}
          </button>
        ))}
      </nav>

      <hr />

      {renderVista()}

      {ultimaAccion && (
        <div className="panel-estado">
          <p><strong>Última acción registrada:</strong> {ultimaAccion}</p>
          <p className="contador-acciones">Total de acciones en la sesión: {totalAcciones}</p>
        </div>
      )}

      <footer className="footer-autor">
        Desarrollado por <span>Juan Andres Pineda</span> — SENA
      </footer>
    </div>
  );
};

export default App;
