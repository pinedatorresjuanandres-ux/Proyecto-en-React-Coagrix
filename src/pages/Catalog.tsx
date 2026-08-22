import { useMemo, useState } from 'react';
import { AppFrame } from '../components/PageFrame';
import { ProductCard } from '../components/Cards';
import { Product } from '../data';
import { SearchBar } from '../components/Utilities';
import { categories, locations, products } from '../data';

export default function Catalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [transport, setTransport] = useState(false);
  const filtered = useMemo(() => products.filter((product) => (
    (!query || `${product.name} ${product.farmer} ${product.category}`.toLowerCase().includes(query.toLowerCase()))
    && (!category || product.category === category)
    && (!location || product.location.includes(location))
    && (!minPrice || product.price >= Number(minPrice))
    && (!maxPrice || product.price <= Number(maxPrice))
    && (!transport || product.transport)
  )), [query, category, location, minPrice, maxPrice, transport]);

  const clearFilters = () => {
    setQuery('');
    setCategory('');
    setLocation('');
    setMinPrice('');
    setMaxPrice('');
    setTransport(false);
  };

  return <AppFrame active="Catálogo" footer><main className="page-container"><div className="container"><div className="content-heading"><div><span className="eyebrow">Mercado CoAgrix</span><h1>Catálogo de productos</h1><p>Explora alimentos frescos y productos de origen campesino listos para negociar.</p></div><a className="btn-primary" href="/create-publication">+ Publicar producto</a></div><div className="catalog-layout"><aside className="surface filter-panel"><h3>Filtros</h3><div className="filter-group"><span>Categoría</span><select className="input-control" value={category} onChange={(event) => setCategory(event.target.value)}><option value="">Todas las categorías</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></div><div className="filter-group"><span>Ubicación</span><select className="input-control" value={location} onChange={(event) => setLocation(event.target.value)}><option value="">Todas las ubicaciones</option>{locations.map((item) => <option key={item}>{item}</option>)}</select></div><div className="filter-group"><span>Precio (COP)</span><div className="range-row"><input className="input-control" type="number" min="0" inputMode="numeric" placeholder="Mín" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} /><input className="input-control" type="number" min="0" inputMode="numeric" placeholder="Máx" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} /></div></div><label className="checkbox-line"><input type="checkbox" checked={transport} onChange={(event) => setTransport(event.target.checked)} /> Solo con transporte</label><button className="btn-ghost btn-sm" style={{ marginTop: 20, width: '100%' }} onClick={clearFilters}>Limpiar filtros</button></aside><section><div className="catalog-tools"><SearchBar placeholder="Buscar producto, agricultor o categoría..." value={query} onChange={setQuery} /><span className="catalog-count">{filtered.length} resultados</span></div>{filtered.length > 0 ? <div className="product-grid">{filtered.map((product: Product) => <ProductCard product={product} key={product.id} />)}</div> : <div className="surface"><h3>No encontramos productos</h3><p className="muted">Prueba cambiando los filtros seleccionados.</p></div>}</section></div></div></main></AppFrame>;
}
