import { FormEvent, useState } from 'react';
import { AuthFrame } from '../components/PageFrame';
import { TermsCheckbox, TogglePassword } from '../components/Utilities';

const roleMeta = {
  agricultor: { label: 'Agricultor', emoji: '🌱', login: '/login-agricultor', register: '/register-agricultor' },
  comerciante: { label: 'Comerciante', emoji: '🛒', login: '/login-comerciante', register: '/register-comerciante' },
  empresa: { label: 'Empresa', emoji: '🏢', login: '/login-empresa', register: '/register-empresa' }
};

type Role = keyof typeof roleMeta;

export function LoginView({ role }: { role?: Role }) {
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');
  const selected = role ? roleMeta[role] : undefined;
  const submit = (event: FormEvent) => { event.preventDefault(); setNotice('Vista demostrativa: el formulario se validó correctamente.'); };
  return <AuthFrame title={role ? `Bienvenido de nuevo, ${selected?.label.toLowerCase()}.` : 'La agricultura del futuro empieza aquí.'}><div className="auth-form"><span className="eyebrow">Acceso a CoAgrix</span><h2>Iniciar sesión</h2><p>{selected ? `Ingresa a tu espacio como ${selected.label.toLowerCase()}.` : 'Accede a tu cuenta para continuar.'}</p>{notice && <div className="page-notice success">{notice}</div>}<form onSubmit={submit}><label className="form-field"><span>Correo electrónico</span><input type="email" placeholder="tu@correo.com" required /></label><label className="form-field"><span>Contraseña</span><TogglePassword value={password} onChange={setPassword} /></label><div className="auth-row"><label className="checkbox-line"><input type="checkbox" /> Recordarme</label><a className="text-link" href="#">¿Olvidaste tu contraseña?</a></div><button className="btn-primary btn-lg" type="submit">Ingresar a mi cuenta →</button></form><div className="auth-divider">o continúa como</div><div className="role-grid">{(Object.keys(roleMeta) as Role[]).map((key) => <a className="role-card" href={roleMeta[key].login} key={key}><span>{roleMeta[key].emoji}</span><small>{roleMeta[key].label}</small></a>)}</div><p className="auth-switch">¿Aún no tienes cuenta? <a className="text-link" href={selected ? selected.register : '/register'}>Regístrate gratis</a></p></div></AuthFrame>;
}

export function RegisterView({ role }: { role?: Role }) {
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [notice, setNotice] = useState('');
  const selected = role ? roleMeta[role] : undefined;
  const submit = (event: FormEvent) => { event.preventDefault(); setNotice(terms ? 'Cuenta de demostración creada. Ya puedes explorar CoAgrix.' : 'Marca los términos y condiciones para continuar.'); };
  return <AuthFrame title="Haz crecer tu negocio con conexiones reales."><div className="auth-form"><span className="eyebrow">Únete a la comunidad</span><h2>Crear una cuenta</h2><p>{selected ? `Registro de ${selected.label.toLowerCase()}.` : 'Elige cómo quieres usar CoAgrix.'}</p>{notice && <div className={`page-notice ${terms ? 'success' : 'warning'}`}>{notice}</div>}<form onSubmit={submit}><div className="form-grid"><label className="form-field"><span>Nombre</span><input placeholder="Tu nombre" required /></label><label className="form-field"><span>Apellido</span><input placeholder="Tu apellido" required /></label><label className="form-field full"><span>Correo electrónico</span><input type="email" placeholder="tu@correo.com" required /></label><label className="form-field full"><span>Contraseña</span><TogglePassword value={password} onChange={setPassword} placeholder="Crea una contraseña segura" /></label></div><TermsCheckbox checked={terms} onChange={setTerms} /><button className="btn-primary btn-lg" type="submit">Crear cuenta gratis →</button></form>{!selected && <><div className="auth-divider">elige un perfil para comenzar</div><div className="role-grid">{(Object.keys(roleMeta) as Role[]).map((key) => <a className="role-card" href={roleMeta[key].register} key={key}><span>{roleMeta[key].emoji}</span><small>{roleMeta[key].label}</small></a>)}</div></>}<p className="auth-switch">¿Ya tienes cuenta? <a className="text-link" href={selected ? selected.login : '/login'}>Inicia sesión</a></p></div></AuthFrame>;
}
