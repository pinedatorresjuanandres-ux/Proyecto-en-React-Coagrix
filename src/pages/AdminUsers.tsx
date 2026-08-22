import { useMemo, useState } from 'react';
import { DashboardFrame } from '../components/PageFrame';
import { SearchBar } from '../components/Utilities';
import { users } from '../data';

export default function AdminUsers() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('Todos');
  const visible = useMemo(() => users.filter((user) => (!query || `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase())) && (role === 'Todos' || user.role === role)), [query, role]);
  return <DashboardFrame role="admin" active="Usuarios"><div className="content-heading"><div><span className="eyebrow">Administración</span><h1>Usuarios</h1><p>Gestiona los perfiles y permisos de la comunidad CoAgrix.</p></div><button className="btn-primary">+ Invitar usuario</button></div><div className="surface"><div className="table-toolbar"><SearchBar placeholder="Buscar por nombre o correo" value={query} onChange={setQuery} /><select className="input-control compact-select" value={role} onChange={(event) => setRole(event.target.value)}><option>Todos</option><option>Agricultor</option><option>Empresa</option><option>Comerciante</option></select><select className="input-control compact-select"><option>Todos los estados</option><option>Activo</option><option>Pendiente</option></select></div><div className="table-wrap"><table className="data-table"><thead><tr><th>Usuario</th><th>Rol</th><th>Ubicación</th><th>Registro</th><th>Estado</th><th /></tr></thead><tbody>{visible.map((user) => <tr key={user.id}><td><div className="table-user"><span className="avatar">{user.initials}</span><div><strong>{user.name}</strong><small>{user.email}</small></div></div></td><td>{user.role}</td><td>{user.location}</td><td>{user.joined}</td><td><span className={`status-pill ${user.status === 'Activo' ? 'success' : user.status === 'Pendiente' ? 'warning' : 'neutral'}`}>{user.status}</span></td><td><a className="icon-action" href={`/admin-user-detail/${user.id}`}>→</a></td></tr>)}</tbody></table></div></div></DashboardFrame>;
}
