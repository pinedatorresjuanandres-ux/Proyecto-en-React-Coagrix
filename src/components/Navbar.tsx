type NavbarProps = { active?: string };

export default function Navbar({ active = 'Inicio' }: NavbarProps) {
  return (
    <nav className="landing-nav" aria-label="Navegación pública">
      <a className={active === 'Inicio' ? 'active' : ''} href="#inicio">Inicio</a>
      <a className={active === 'Funcionalidades' ? 'active' : ''} href="#funcionalidades">Funcionalidades</a>
      <a className={active === 'Testimonios' ? 'active' : ''} href="#testimonios">Testimonios</a>
      <a className={active === 'Contacto' ? 'active' : ''} href="#contacto">Contacto</a>
    </nav>
  );
}
