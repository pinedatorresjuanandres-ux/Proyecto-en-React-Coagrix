import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Auth.css';

interface LoginProps {
  onAccionRealizada: (modulo: string, accion: string) => void;
}

interface DatosLogin {
  email: string;
  password: string;
  rol: string;
}

const Login: React.FC<LoginProps> = ({ onAccionRealizada }) => {
  // Estado local tipado para cada campo del formulario
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rol, setRol] = useState<string>('Campesino');

  // Estado local para controlar el "loading" al enviar el formulario
  const [enviando, setEnviando] = useState<boolean>(false);

  // Estado local para mostrar en pantalla los datos que ya fueron enviados
  const [datosEnviados, setDatosEnviados] = useState<DatosLogin | null>(null);

  const manejarEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const manejarPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const manejarRol = (e: ChangeEvent<HTMLSelectElement>): void => {
    setRol(e.target.value);
  };

  const manejarEnvio = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setEnviando(true);

    const datos: DatosLogin = { email, password, rol };

    // Simula una validación asíncrona para mostrar el estado de carga
    setTimeout(() => {
      setDatosEnviados(datos);
      setEnviando(false);
      onAccionRealizada('Login', `Inicio de sesión como ${rol} (${email})`);
    }, 500);
  };

  return (
    <div>
      <h2>Módulo de Login</h2>
      <form className="auth-form" onSubmit={manejarEnvio}>
        <div className="campo">
          <label>Rol:</label>
          <select value={rol} onChange={manejarRol}>
            <option value="Campesino">Campesino</option>
            <option value="Empresa">Empresa</option>
            <option value="Comerciante">Comerciante</option>
          </select>
        </div>
        <div className="campo">
          <label>Correo:</label>
          <input type="email" value={email} onChange={manejarEmail} />
        </div>
        <div className="campo">
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={manejarPassword} />
        </div>
        <button type="submit" disabled={enviando}>
          {enviando ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>

      {/* Visualización en vivo de lo que el usuario va escribiendo */}
      {(email !== '' || password !== '') && (
        <div className="vista-previa">
          <strong>Vista previa:</strong> {rol} — {email || '(sin correo)'}
        </div>
      )}

      {/* Visualización de los datos ya enviados por el formulario */}
      {datosEnviados && (
        <div className="resultado-envio">
          <h4>Último inicio de sesión registrado</h4>
          <p>Rol: {datosEnviados.rol}</p>
          <p>Correo: {datosEnviados.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
