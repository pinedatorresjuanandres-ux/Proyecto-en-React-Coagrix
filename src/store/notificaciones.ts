// Realizado por JUAN ANDRES PINEDA
import { createStore } from 'redux';

export type Notificacion = {
  id: number;
  mensaje: string;
};

type EstadoNotificaciones = {
  lista: Notificacion[];
  cargando: boolean;
  error: string;
};

type AccionNotificaciones = {
  type: string;
  payload?: Notificacion[] | string;
};

const estadoInicial: EstadoNotificaciones = {
  lista: [],
  cargando: false,
  error: '',
};

function reducerNotificaciones(
  estado = estadoInicial,
  accion: AccionNotificaciones,
): EstadoNotificaciones {
  if (accion.type === 'CARGAR_NOTIFICACIONES') {
    return { ...estado, cargando: true, error: '' };
  }

  if (accion.type === 'GUARDAR_NOTIFICACIONES') {
    return { ...estado, cargando: false, lista: accion.payload as Notificacion[] };
  }

  if (accion.type === 'ERROR_NOTIFICACIONES') {
    return { ...estado, cargando: false, error: accion.payload as string };
  }

  return estado;
}

export const store = createStore(reducerNotificaciones);
export type EstadoGlobal = ReturnType<typeof store.getState>;
