import { useState } from 'react';
import { AppFrame } from '../components/PageFrame';
import { PublicationCard } from '../components/Cards';
import { publications } from '../data';

export default function Publicaciones() {
  const [status, setStatus] = useState('Todas');
  const visible = status === 'Todas' ? publications : publications.filter((_, index) => status === 'Activas' ? index % 3 !== 0 : index % 3 === 0);
  return <AppFrame active="Publicaciones" footer><main className="page-container"><div className="container"><div className="content-heading"><div><span className="eyebrow">Mercado visible</span><h1>Publicaciones</h1><p>Explora las ofertas recientes de nuestra comunidad agrícola.</p></div><a className="btn-primary" href="/create-publication">+ Crear publicación</a></div><div className="toolbar surface"><div className="tabs"><button className={status === 'Todas' ? 'selected' : ''} onClick={() => setStatus('Todas')}>Todas <small>24</small></button><button className={status === 'Activas' ? 'selected' : ''} onClick={() => setStatus('Activas')}>Activas <small>18</small></button><button className={status === 'Pausadas' ? 'selected' : ''} onClick={() => setStatus('Pausadas')}>Pausadas <small>6</small></button></div><select className="input-control compact-select"><option>Más recientes</option><option>Mayor precio</option><option>Más vistas</option></select></div><div className="publication-list" style={{ marginTop: 18 }}>{visible.map((publication) => <PublicationCard product={publication} key={publication.id} />)}</div></div></main></AppFrame>;
}
