import { AppFrame } from '../components/PageFrame';
import { ProductCard } from '../components/Cards';
import { products } from '../data';

export default function Favorites() {
  return <AppFrame active="Favoritos" footer><main className="page-container"><div className="container"><div className="content-heading"><div><span className="eyebrow">Tu selección</span><h1>Favoritos</h1><p>Guarda productos que quieres revisar o comparar más adelante.</p></div><a className="btn-soft" href="/merchant-compare">Comparar seleccionados</a></div><div className="page-notice info">Tienes <strong>5 productos</strong> guardados. Dos actualizaron su precio recientemente.</div><div className="favorite-grid" style={{ marginTop: 22 }}>{products.slice(0, 6).map((product) => <ProductCard product={product} key={product.id} compact />)}</div></div></main></AppFrame>;
}
