  type SidebarProps = { role: 'admin' | 'agricultor' | 'empresa' | 'comerciante'; active?: string };

const menuByRole = {
  admin: [
    ['Resumen', '/admin-dashboard', '📊'], ['Usuarios', '/admin-users', '👥'], ['Publicaciones', '/admin-publications', '📦'], ['Reportes', '/admin-dashboard#reportes', '📈']
  ],
  agricultor: [
    ['Resumen', '/farmer-dashboard', '📊'], ['Mis publicaciones', '/farmer-publications', '🌱'], ['Pedidos', '/farmer-orders', '🧾'], ['Mi perfil', '/farmer-profile', '👤']
  ],
  empresa: [
    ['Resumen', '/company-dashboard', '📊'], ['Buscar proveedores', '/company-search', '🔎'], ['Pedidos', '/orders', '🧾'], ['Mi perfil', '/company-profile', '🏢']
  ],
  comerciante: [
    ['Resumen', '/merchant-dashboard', '📊'], ['Comparador', '/merchant-compare', '⚖️'], ['Favoritos', '/favorites', '⭐'], ['Mensajes', '/inbox', '💬']
  ]
} as const;

export default function Sidebar({ role, active = 'Resumen' }: SidebarProps) {
  return (
    <aside className="cx-sidebar">
      <p className="cx-sidebar-title">Menú principal</p>
      {menuByRole[role].map(([label, href, icon]) => <a className={active === label ? 'active' : ''} href={href} key={href}><span>{icon}</span>{label}</a>)}
      <p className="cx-sidebar-title sidebar-subtitle">Cuenta</p>
      <a href="/login"><span>↪</span>Cerrar sesión</a>
    </aside>
  );
}
