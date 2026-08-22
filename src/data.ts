export type Role = 'admin' | 'agricultor' | 'empresa' | 'comerciante';

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  quantity: number;
  location: string;
  farmer: string;
  emoji: string;
  color: string;
  transport: boolean;
  status?: string;
  description?: string;
};

export type Publication = Product & { published: string; views: number };

export const categories = ['Frutas', 'Verduras', 'Granos', 'Café', 'Lácteos', 'Tubérculos'];
export const locations = ['Huila', 'Antioquia', 'Cundinamarca', 'Boyacá', 'Tolima'];

export const products: Product[] = [
  { id: 1, name: 'Café especial de altura', category: 'Café', price: 28500, unit: 'kg', quantity: 180, location: 'Huila, Pitalito', farmer: 'Carlos Mendoza', emoji: '☕', color: '#7c4a2d', transport: true, description: 'Café de especialidad cultivado a 1.850 msnm, con notas de chocolate y frutos rojos.' },
  { id: 2, name: 'Aguacate Hass premium', category: 'Frutas', price: 9800, unit: 'kg', quantity: 450, location: 'Antioquia, Jardín', farmer: 'Finca El Roble', emoji: '🥑', color: '#5f8c3a', transport: true, description: 'Aguacate Hass seleccionado para distribución nacional, con maduración controlada.' },
  { id: 3, name: 'Tomate chonto', category: 'Verduras', price: 4200, unit: 'kg', quantity: 320, location: 'Cundinamarca, Madrid', farmer: 'Ana Torres', emoji: '🍅', color: '#c95740', transport: false, description: 'Tomate fresco de cultivo protegido, ideal para restaurantes y mercados locales.' },
  { id: 4, name: 'Arroz integral orgánico', category: 'Granos', price: 7600, unit: 'kg', quantity: 620, location: 'Tolima, Espinal', farmer: 'Cooperativa Arroz Vivo', emoji: '🌾', color: '#c8a24a', transport: true, description: 'Arroz integral con trazabilidad de origen y prácticas de producción responsables.' },
  { id: 5, name: 'Mora de Castilla', category: 'Frutas', price: 11200, unit: 'kg', quantity: 95, location: 'Boyacá, Duitama', farmer: 'Lucía Ramírez', emoji: '🫐', color: '#6f3d72', transport: true, description: 'Mora seleccionada, empacada en frío y lista para transformación o venta fresca.' },
  { id: 6, name: 'Papa criolla', category: 'Tubérculos', price: 3800, unit: 'kg', quantity: 780, location: 'Boyacá, Tunja', farmer: 'Asopapa Andina', emoji: '🥔', color: '#c6a16e', transport: false, description: 'Papa criolla de cosecha reciente, calibrada y empacada por bultos.' },
  { id: 7, name: 'Leche campesina', category: 'Lácteos', price: 4600, unit: 'litro', quantity: 210, location: 'Cundinamarca, Ubaté', farmer: 'Lácteos La Montaña', emoji: '🥛', color: '#d8e7e5', transport: true, description: 'Leche fresca de pequeños productores con cadena de frío local.' },
  { id: 8, name: 'Miel de montaña', category: 'Lácteos', price: 18500, unit: 'frasco', quantity: 72, location: 'Antioquia, Támesis', farmer: 'Apiario Colmena', emoji: '🍯', color: '#e3aa39', transport: true, description: 'Miel artesanal multifloral recolectada en ecosistemas de montaña.' }
];

export const publications: Publication[] = products.map((product, index) => ({
  ...product,
  published: `${index + 2} de agosto de 2026`,
  views: 86 + index * 39
}));

export const messages = [
  { id: 1, name: 'María Fernanda López', role: 'AgroExport S.A.S.', initials: 'ML', preview: 'Nos interesa el lote de café de altura.', time: '09:42', unread: 2, online: true },
  { id: 2, name: 'Julián Gómez', role: 'Comerciante', initials: 'JG', preview: '¿Puedes confirmar disponibilidad para el viernes?', time: 'Ayer', unread: 0, online: false },
  { id: 3, name: 'Laura Castaño', role: 'Agricultora', initials: 'LC', preview: 'Te comparto la ficha técnica actualizada.', time: '12 ago', unread: 0, online: true },
  { id: 4, name: 'Mercados del Centro', role: 'Empresa compradora', initials: 'MC', preview: 'Gracias por la cotización.', time: '10 ago', unread: 0, online: false }
];

export const orders = [
  { id: '#CX-1048', customer: 'AgroExport S.A.S.', product: 'Café especial de altura', quantity: '80 kg', total: 2280000, date: '14 ago 2026', status: 'En preparación' },
  { id: '#CX-1043', customer: 'Mercados del Centro', product: 'Aguacate Hass premium', quantity: '120 kg', total: 1176000, date: '10 ago 2026', status: 'Entregado' },
  { id: '#CX-1039', customer: 'Restaurante La Huerta', product: 'Tomate chonto', quantity: '45 kg', total: 189000, date: '06 ago 2026', status: 'En tránsito' },
  { id: '#CX-1031', customer: 'Comercializadora Verde', product: 'Mora de Castilla', quantity: '30 kg', total: 336000, date: '01 ago 2026', status: 'Pendiente' }
];

export const users = [
  { id: 1, name: 'Carlos Mendoza', email: 'carlos@fincaelporvenir.co', role: 'Agricultor', location: 'Huila', status: 'Activo', joined: '12 ene 2026', initials: 'CM' },
  { id: 2, name: 'AgroExport S.A.S.', email: 'compras@agroexport.co', role: 'Empresa', location: 'Bogotá', status: 'Activo', joined: '24 ene 2026', initials: 'AE' },
  { id: 3, name: 'Julián Gómez', email: 'julian@mercados.co', role: 'Comerciante', location: 'Antioquia', status: 'Pendiente', joined: '08 feb 2026', initials: 'JG' },
  { id: 4, name: 'Lucía Ramírez', email: 'lucia@fincaluz.co', role: 'Agricultor', location: 'Boyacá', status: 'Activo', joined: '19 feb 2026', initials: 'LR' },
  { id: 5, name: 'Restaurante La Huerta', email: 'compras@lahuerta.co', role: 'Empresa', location: 'Cundinamarca', status: 'Inactivo', joined: '04 mar 2026', initials: 'LH' }
];

export const formatCOP = (value: number) => `$${value.toLocaleString('es-CO')}`;

export const getProduct = (id: number) => products.find((product) => product.id === id) ?? products[0];

export const dashboardByRole: Record<Role, { eyebrow: string; title: string; description: string; stats: { label: string; value: string; icon: string; trend: string }[] }> = {
  admin: {
    eyebrow: 'Centro de control', title: 'Dashboard Administrador', description: 'Supervisa la actividad general de la plataforma y mantén la comunidad saludable.',
    stats: [{ label: 'Usuarios registrados', value: '1.248', icon: '👥', trend: '+12% este mes' }, { label: 'Publicaciones activas', value: '386', icon: '📦', trend: '+8% este mes' }, { label: 'Órdenes del mes', value: '174', icon: '🧾', trend: '+18% este mes' }, { label: 'Volumen comercial', value: '$48,6M', icon: '📈', trend: '+23% este mes' }]
  },
  agricultor: {
    eyebrow: 'Mi actividad', title: 'Dashboard Agricultor', description: 'Consulta tu inventario, publicaciones y pedidos desde un solo lugar.',
    stats: [{ label: 'Publicaciones activas', value: '12', icon: '🌱', trend: '+3 este mes' }, { label: 'Ventas del mes', value: '$4,8M', icon: '💰', trend: '+16% vs. anterior' }, { label: 'Pedidos pendientes', value: '8', icon: '🧺', trend: '2 requieren atención' }, { label: 'Visitas al perfil', value: '1.284', icon: '👀', trend: '+24% este mes' }]
  },
  empresa: {
    eyebrow: 'Compras y abastecimiento', title: 'Dashboard Empresa', description: 'Encuentra proveedores confiables, compara ofertas y coordina tus compras agrícolas.',
    stats: [{ label: 'Compras del mes', value: '$12,4M', icon: '🛒', trend: '+11% vs. anterior' }, { label: 'Proveedores guardados', value: '28', icon: '🤝', trend: '+4 este mes' }, { label: 'Órdenes activas', value: '14', icon: '📋', trend: '3 por recibir' }, { label: 'Ahorro estimado', value: '$1,2M', icon: '✨', trend: 'vs. mercado tradicional' }]
  },
  comerciante: {
    eyebrow: 'Herramientas de compra', title: 'Dashboard Comerciante', description: 'Compara precios, guarda productos y gestiona tus solicitudes de abastecimiento.',
    stats: [{ label: 'Productos comparados', value: '46', icon: '⚖️', trend: '+9 esta semana' }, { label: 'Favoritos', value: '18', icon: '⭐', trend: '5 con precio actualizado' }, { label: 'Solicitudes enviadas', value: '7', icon: '📨', trend: '2 respondidas hoy' }, { label: 'Ahorro potencial', value: '$680K', icon: '💡', trend: 'en tus favoritos' }]
  }
};
