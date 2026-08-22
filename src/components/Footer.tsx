export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="cx-brand" href="/"><span className="cx-brand-mark">🌾</span><span className="cx-brand-text">CoAgrix</span></a>
          <p>Conectando el campo con el mercado mediante tecnología e innovación.</p>
        </div>
        <div className="footer-links"><h5>Plataforma</h5><a href="/">Inicio</a><a href="/catalog">Catálogo</a><a href="/#funcionalidades">Funcionalidades</a></div>
        <div className="footer-links"><h5>Cuenta</h5><a href="/register">Registrarse</a><a href="/login">Iniciar sesión</a><a href="/inbox">Mensajes</a></div>
        <div className="footer-links"><h5>Legal</h5><a href="#">Términos y condiciones</a><a href="#">Política de privacidad</a></div>
      </div>
      <div className="footer-bottom"><div className="container"><p>© 2026 CoAgrix · Todos los derechos reservados. Hecho para el campo.</p></div></div>
    </footer>
  );
}
