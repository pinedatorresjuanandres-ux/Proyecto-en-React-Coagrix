import { formatCOP, Product } from '../data';

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <a className={`product-card ${compact ? 'compact' : ''}`} href={`/product/${product.id}`}>
      <div className="product-image" style={{ background: `linear-gradient(135deg, ${product.color}, #ffffff)` }}><span>{product.emoji}</span>{product.transport && <small>🚚 Transporte</small>}</div>
      <div className="product-body"><span className="category-pill">{product.category}</span><h3>{product.name}</h3><p className="product-price">{formatCOP(product.price)} <small>/ {product.unit}</small></p><p className="product-meta">{product.quantity} {product.unit} disponibles</p><p className="product-location">⌖ {product.location}</p><div className="seller-line"><span className="mini-avatar">{product.farmer.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span>{product.farmer}</div></div>
    </a>
  );
}

export function PublicationCard({ product, action = 'Ver detalle' }: { product: Product; action?: string }) {
  return <article className="publication-card"><div className="publication-thumb" style={{ background: product.color }}><span>{product.emoji}</span></div><div className="publication-content"><div className="publication-top"><span className="category-pill">{product.category}</span><span className="status-pill success">Activa</span></div><h3>{product.name}</h3><p>{product.description}</p><div className="publication-footer"><strong>{formatCOP(product.price)} <small>/ {product.unit}</small></strong><a href={`/product/${product.id}`} className="text-link">{action} →</a></div></div></article>;
}

export function UserCard({ user }: { user: { name: string; role: string; location: string; initials: string; status: string } }) {
  return <article className="user-card"><div className="avatar large">{user.initials}</div><div className="user-card-copy"><h3>{user.name}</h3><p>{user.role} · {user.location}</p><span className={`status-pill ${user.status === 'Activo' ? 'success' : user.status === 'Pendiente' ? 'warning' : 'neutral'}`}>{user.status}</span></div><a className="icon-action" href={`/admin-user-detail/${user.name.toLowerCase().split(' ').join('-')}`}>→</a></article>;
}

export function MessageCard({ message, active = false }: { message: { name: string; role: string; initials: string; preview: string; time: string; unread: number; online: boolean }; active?: boolean }) {
  return <a className={`message-card ${active ? 'active' : ''}`} href="/conversation"><div className="avatar">{message.initials}<span className={message.online ? 'online-dot' : ''} /></div><div className="message-copy"><div className="message-head"><strong>{message.name}</strong><span>{message.time}</span></div><small>{message.role}</small><p>{message.preview}</p></div>{message.unread > 0 && <span className="unread-badge">{message.unread}</span>}</a>;
}

export function OrderCard({ order }: { order: { id: string; customer: string; product: string; quantity: string; total: number; date: string; status: string } }) {
  const statusClass = order.status === 'Entregado' ? 'success' : order.status === 'Pendiente' ? 'warning' : order.status === 'En tránsito' ? 'info' : 'neutral';
  return <article className="order-row"><div><strong>{order.id}</strong><small>{order.date}</small></div><div><strong>{order.product}</strong><small>{order.customer} · {order.quantity}</small></div><strong>{formatCOP(order.total)}</strong><span className={`status-pill ${statusClass}`}>{order.status}</span><a className="icon-action" href="/orders">→</a></article>;
}
