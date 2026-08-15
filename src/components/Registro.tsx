import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Auth.css';

interface RegistroProps {
  onAccionRealizada: (modulo: string, accion: string) => void;
}

interface DatosRegistro {
  nombre: string;
  email: string;
  password: string;
  rol: string;
}

const Registro: React.FC<RegistroProps> = ({ onAccionRealizada }) => {
  
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rol, setRol] = useState<string>('Campesino');

  const [enviando, setEnviando] = useState<boolean>(false);


  const [registros, setRegistros] = useState<DatosRegistro[]>([]);

  const manejarNombre = (e: ChangeEvent<HTMLInputElement>): void => {
    setNombre(e.target.value);
  };

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

    const nuevoRegistro: DatosRegistro = { nombre, email, password, rol };

    setTimeout(() => {
      setRegistros((registrosPrevios: DatosRegistro[]) => [...registrosPrevios, nuevoRegistro]);
      setEnviando(false);
      onAccionRealizada('Registro', `Nuevo registro de ${nombre} como ${rol}`);

      setNombre('');
      setEmail('');
      setPassword('');
    }, 500);
  };

  return (
    <div>
      <h2>Módulo de Registro</h2>
      <form className="auth-form" onSubmit={manejarEnvio}>
        <div className="campo">
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={manejarNombre} />
        </div>
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
          {enviando ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>


      {(nombre !== '' || email !== '') && (
        <div className="vista-previa">
          <strong>Vista previa:</strong> {nombre || '(sin nombre)'} — {rol} — {email || '(sin correo)'}
        </div>
      )}

      {registros.length > 0 && (
        <div className="resultado-envio">
          <h4>Personas registradas en esta sesión ({registros.length})</h4>
          <ul>
            {registros.map((r: DatosRegistro, indice: number) => (
              <li key={indice}>{r.nombre} — {r.rol} — {r.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Registro;
