import React, { useState, ChangeEvent } from 'react';
import './Catalogo.css';

interface CatalogoProps {
  onAccionRealizada: (modulo: string, accion: string) => void;
}

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  unidad: string;
  emoji: string;
}

const productos: Producto[] = [
  { id: 1, nombre: 'Tomate chonto', categoria: 'Verduras', precio: 2500, unidad: 'kg', emoji: '🍅' },
  { id: 2, nombre: 'Aguacate Hass', categoria: 'Frutas', precio: 6000, unidad: 'kg', emoji: '🥑' },
  { id: 3, nombre: 'Café pergamino', categoria: 'Granos', precio: 14000, unidad: 'kg', emoji: '☕' },
  { id: 4, nombre: 'Papa criolla', categoria: 'Tubérculos', precio: 3200, unidad: 'kg', emoji: '🥔' },
  { id: 5, nombre: 'Plátano hartón', categoria: 'Frutas', precio: 1800, unidad: 'unidad', emoji: '🍌' },
  { id: 6, nombre: 'Cacao en grano', categoria: 'Granos', precio: 11000, unidad: 'kg', emoji: '🍫' },
  { id: 7, nombre: 'Zanahoria', categoria: 'Verduras', precio: 2000, unidad: 'kg', emoji: '🥕' },
  { id: 8, nombre: 'Maíz amarillo', categoria: 'Granos', precio: 2800, unidad: 'kg', emoji: '🌽' },
];

const categorias: string[] = ['Todas', ...Array.from(new Set(productos.map((p) => p.categoria)))];

const Catalogo: React.FC<CatalogoProps> = ({ onAccionRealizada }) => {
  // Estado local: texto de búsqueda
  const [busqueda, setBusqueda] = useState<string>('');
  // Estado local: categoría seleccionada en los chips de filtro
  const [categoriaActiva, setCategoriaActiva] = useState<string>('Todas');
  // Estado local: cantidad total de productos agregados al carrito
  const [carrito, setCarrito] = useState<number>(0);
  // Estado local: id del último producto agregado (para animación/confirmación visual)
  const [ultimoAgregado, setUltimoAgregado] = useState<number | null>(null);

  const manejarBusqueda = (e: ChangeEvent<HTMLInputElement>): void => {
    setBusqueda(e.target.value);
  };

  const productosFiltrados: Producto[] = productos.filter((p: Producto) => {
    const coincideCategoria = categoriaActiva === 'Todas' || p.categoria === categoriaActiva;
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const agregarAlCarrito = (producto: Producto): void => {
    setCarrito((valorPrevio: number) => valorPrevio + 1);
    setUltimoAgregado(producto.id);
    onAccionRealizada('Catalogo', `Se agregó "${producto.nombre}" al carrito`);
  };

  return (
    <div>
      <div className="cabecera-modulo">
        <h2>Catálogo de Productos</h2>
        <span className="badge-carrito">🛒 {carrito}</span>
      </div>

      <div className="catalogo-filtros">
        <input
          type="text"
          className="catalogo-buscador"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={manejarBusqueda}
        />
        <div className="chips-categoria">
          {categorias.map((categoria: string) => (
            <button
              key={categoria}
              className={categoria === categoriaActiva ? 'chip activo' : 'chip'}
              onClick={() => setCategoriaActiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-catalogo">
        {productosFiltrados.map((producto: Producto) => (
          <div className="producto-card" key={producto.id}>
            <div className="producto-emoji">{producto.emoji}</div>
            <h4>{producto.nombre}</h4>
            <p className="producto-categoria">{producto.categoria}</p>
            <p className="producto-precio">
              ${producto.precio.toLocaleString('es-CO')} / {producto.unidad}
            </p>
            <button onClick={() => agregarAlCarrito(producto)}>
              {ultimoAgregado === producto.id ? 'Agregado ✓' : 'Agregar'}
            </button>
          </div>
        ))}

        {productosFiltrados.length === 0 && (
          <p className="sin-resultados">No se encontraron productos con ese criterio.</p>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
