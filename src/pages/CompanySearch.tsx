import { useState } from 'react';
import { AppFrame } from '../components/PageFrame';
import { SearchBar } from '../components/Utilities';

const suppliers = [
  { name: 'Finca El Porvenir', initials: 'FP', location: 'Huila · Pitalito', specialty: 'Café especial, aguacate', score: '4.9', orders: 42, color: '#68945a' },
  { name: 'Cooperativa Arroz Vivo', initials: 'AV', location: 'Tolima · Espinal', specialty: 'Arroz integral, granos', score: '4.8', orders: 31, color: '#b8994c' },
  { name: 'Asopapa Andina', initials: 'AA', location: 'Boyacá · Tunja', specialty: 'Papa criolla, tubérculos', score: '4.7', orders: 26, color: '#ab7c55' },
  { name: 'Lácteos La Montaña', initials: 'LM', location: 'Cundinamarca · Ubaté', specialty: 'Leche, derivados lácteos', score: '4.9', orders: 18, color: '#81b1b4' }
];

export default function CompanySearch() {
  const [query, setQuery] = useState('');
  const visible = suppliers.filter((supplier) => `${supplier.name} ${supplier.specialty} ${supplier.location}`.toLowerCase().includes(query.toLowerCase()));
  return <AppFrame active="Catálogo" role="empresa" footer><main className="page-container"><div className="container"><div className="content-heading"><div><span className="eyebrow">Red de abastecimiento</span><h1>Buscar proveedores</h1><p>Encuentra productores confiables para fortalecer tu operación.</p></div><a className="btn-soft" href="/inbox">Ver solicitudes</a></div><div className="surface supplier-search"><SearchBar placeholder="Busca por nombre, producto o ubicación..." value={query} onChange={setQuery} /><div className="supplier-filters"><select className="input-control"><option>Todas las categorías</option><option>Café</option><option>Frutas</option><option>Granos</option></select><select className="input-control"><option>Todas las ubicaciones</option><option>Huila</option><option>Antioquia</option><option>Boyacá</option></select><select className="input-control"><option>Mejor calificados</option><option>Más cercanos</option><option>Más activos</option></select></div></div><div className="results-heading"><strong>{visible.length} proveedores encontrados</strong><span className="muted">Actualizado hace 10 minutos</span></div><div className="supplier-grid">{visible.map((supplier) => <article className="supplier-card" key={supplier.name}><div className="supplier-cover" style={{ background: `linear-gradient(135deg, ${supplier.color}, #e6f1df)` }}><span>{supplier.initials}</span><small>✓ Verificado</small></div><div className="supplier-body"><div className="supplier-title"><div><h3>{supplier.name}</h3><p>⌖ {supplier.location}</p></div><span className="rating">★ {supplier.score}</span></div><p className="specialty">{supplier.specialty}</p><div className="supplier-meta"><span>{supplier.orders} órdenes completadas</span><span>Respuesta rápida</span></div><div className="supplier-actions"><a href="/conversation" className="btn-primary btn-sm">Contactar</a><button className="btn-outline btn-sm">♡ Guardar</button></div></div></article>)}</div></div></main></AppFrame>;
}
