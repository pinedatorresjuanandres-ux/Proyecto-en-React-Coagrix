
// Realizado por JUAN ANDRES PINEDA
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { EstadoGlobal, Notificacion } from '../store/notificaciones';

type PublicacionApi = {
  id: number;
  title: string;
};

export default function PanelNotificaciones() {
  const dispatch = useDispatch();
  const { lista, cargando, error } = useSelector(
    (estado: EstadoGlobal) => estado,
  );

  useEffect(() => {
    async function traerNotificaciones() {
      dispatch({ type: 'CARGAR_NOTIFICACIONES' });
      
      try {
        const respuesta = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=4',
        );

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar las notificaciones.');
        }

        const datos: PublicacionApi[] = await respuesta.json();

        const notificaciones: Notificacion[] = datos.map((publicacion) => ({
          id: publicacion.id,
          mensaje: `Nueva publicación agrícola disponible. Referencia: ${publicacion.id}.`,
        }));

        dispatch({
          type: 'GUARDAR_NOTIFICACIONES',
          payload: notificaciones,
        });
      } catch (error) {
        dispatch({
          type: 'ERROR_NOTIFICACIONES',
          payload:
            error instanceof Error
              ? error.message
              : 'Ocurrió un error de conexión.',
        });
      }
    }

    traerNotificaciones();
  }, [dispatch]);

  return (
    <aside className="panel-notificaciones" aria-label="Notificaciones">
      <div className="panel-notificaciones-titulo">
        <span>🔔</span>
        <div>
          <strong>Notificaciones</strong>
          <small>Información desde la API</small>
        </div>
      </div>

      {cargando && (
        <p className="panel-notificaciones-estado">
          Cargando notificaciones...
        </p>
      )}

      {error && <p className="panel-notificaciones-error">{error}</p>}

      {!cargando && !error && (
        <ul className="panel-notificaciones-lista">
          {lista.map((notificacion) => (
            <li key={notificacion.id}>{notificacion.mensaje}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}
