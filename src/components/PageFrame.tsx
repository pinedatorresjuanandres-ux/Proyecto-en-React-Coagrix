import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Role } from '../data';

export function AppFrame({ children, active, role = 'agricultor', footer = false }: { children: ReactNode; active?: string; role?: Role; footer?: boolean }) {
  return <><Header active={active} role={role} />{children}{footer && <Footer />}</>;
}

export function DashboardFrame({ children, role, active }: { children: ReactNode; role: Role; active?: string }) {
  return <><Header active={active} role={role} /><div className="admin-layout"><Sidebar role={role} active={active} /><main className="admin-main">{children}</main></div></>;
}

export function AuthFrame({ children, title = 'La agricultura del futuro empieza aquí.' }: { children: ReactNode; title?: string }) {
  return <main className="auth-page"><section className="auth-aside"><div className="auth-aside-content"><a className="cx-brand" href="/"><span className="cx-brand-mark">🌾</span><span className="cx-brand-text">CoAgrix</span></a><h1>{title}</h1><p>Una plataforma sencilla para conectar productores, compradores y comerciantes del sector agrícola.</p><div className="auth-benefits"><div className="auth-benefit"><span>✓</span> Publica tus productos en minutos</div><div className="auth-benefit"><span>✓</span> Encuentra compradores confiables</div><div className="auth-benefit"><span>✓</span> Gestiona tu negocio desde un solo lugar</div></div></div></section><section className="auth-panel">{children}</section></main>;
}
