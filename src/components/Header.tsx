import { useState } from 'react';

type HeaderProps = {
  active?: string;
  role?: 'admin' | 'agricultor' | 'empresa' | 'comerciante';
};

export default function Header({ active, role = 'agricultor' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userLabel = role === 'admin' ? 'Admin' : role === 'empresa' ? 'AgroExport' : role === 'comerciante' ? 'Julián' : 'Carlos';
  const initials = userLabel.slice(0, 2).toUpperCase();

  const links = [
    { label: 'Catálogo', href: '/' },
    { label: 'Publicaciones', href: '/publications' },
    { label: 'Mensajes', href: '/inbox' }
  ];

  return (
    <header className="cx-header">
      <div className="cx-header-inner">
        <a className="cx-brand" href="/" aria-label="Ir al catálogo de CoAgrix">
          <span className="cx-brand-mark" aria-hidden="true">🌾</span>
          <span className="cx-brand-text">CoAgrix</span>
        </a>
        <nav className={`cx-nav ${menuOpen ? 'open' : ''}`} aria-label="Navegación principal">
          {links.map((link) => <a key={link.href} className={active === link.label ? 'active' : ''} href={link.href}>{link.label}</a>)}
          <a href="/favorites" className={active === 'Favoritos' ? 'active' : ''}>Favoritos</a>
        </nav>
        <div className="cx-actions">
          <a className="cx-icon-btn" href="/cart" aria-label="Carrito">🛒<span className="cx-badge">3</span></a>
          <div className="cx-user-menu">
            <button className="cx-user-btn" onClick={() => setUserOpen((value) => !value)} aria-expanded={userOpen}>
              <span className="cx-avatar">{initials}</span><span>{userLabel}</span><span className="chevron">⌄</span>
            </button>
            <div className={`cx-dropdown ${userOpen ? 'open' : ''}`}>
              <a href={role === 'agricultor' ? '/farmer-profile' : role === 'empresa' ? '/company-profile' : '/home'}>Mi perfil</a>
              <a href={role === 'agricultor' ? '/farmer-dashboard' : role === 'empresa' ? '/company-dashboard' : '/merchant-dashboard'}>Mi dashboard</a>
              <hr />
              <a href="/login">Cerrar sesión</a>
            </div>
          </div>
        </div>
        <button className="cx-menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Abrir menú">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
