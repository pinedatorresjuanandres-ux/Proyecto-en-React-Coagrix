import { ReactNode, useState } from 'react';

type SearchBarProps = { placeholder?: string; value?: string; onChange?: (value: string) => void; onSubmit?: () => void };
export function SearchBar({ placeholder = 'Buscar...', value = '', onChange, onSubmit }: SearchBarProps) {
  return <form className="search-bar" onSubmit={(event) => { event.preventDefault(); onSubmit?.(); }}><span>⌕</span><input value={value} onChange={(event) => onChange?.(event.target.value)} placeholder={placeholder} /><button type="submit">Buscar</button></form>;
}

export function Modal({ title, children, open, onClose }: { title: string; children: ReactNode; open: boolean; onClose: () => void }) {
  if (!open) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal-card" onClick={(event) => event.stopPropagation()}><div className="modal-header"><h2>{title}</h2><button onClick={onClose} aria-label="Cerrar">×</button></div>{children}</div></div>;
}

export function TermsCheckbox({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return <label className="terms-checkbox"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><span>Acepto los <a href="#">términos y condiciones</a> y la política de privacidad.</span></label>;
}

export function TogglePassword({ value, onChange, placeholder = 'Contraseña' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  const [visible, setVisible] = useState(false);
  return <div className="password-field"><input type={visible ? 'text' : 'password'} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} /><button type="button" onClick={() => setVisible((current) => !current)}>{visible ? 'Ocultar' : 'Mostrar'}</button></div>;
}

export function DashboardStats({ stats }: { stats: { label: string; value: string; icon: string; trend: string }[] }) {
  return <div className="stats-grid">{stats.map((stat) => <div className="stat-card" key={stat.label}><span className="stat-icon">{stat.icon}</span><div><span className="stat-label">{stat.label}</span><strong>{stat.value}</strong><small>{stat.trend}</small></div></div>)}</div>;
}

export function PageNotice({ children, tone = 'success' }: { children: ReactNode; tone?: 'success' | 'warning' | 'info' }) {
  return <div className={`page-notice ${tone}`}>{children}</div>;
}

export function FormField({ label, type = 'text', placeholder, defaultValue, required = false }: { label: string; type?: string; placeholder?: string; defaultValue?: string; required?: boolean }) {
  return <label className="form-field"><span>{label}{required && ' *'}</span><input type={type} placeholder={placeholder} defaultValue={defaultValue} required={required} /></label>;
}
