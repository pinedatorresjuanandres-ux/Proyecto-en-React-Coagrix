# CoAgrix · Catálogo agrícola en React

CoAgrix es una interfaz de mercado agrícola desarrollada con **React, TypeScript y CSS**. La pantalla inicial (`/`) es el catálogo: permite buscar, filtrar y abrir el detalle de los productos publicados.

## Ejecutar el proyecto

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. También puedes comprobar el proyecto con:

```bash
npm run typecheck
npm run build
```

La compilación se genera en `dist/`.

## Rutas

| Vista | Ruta |
| --- | --- |
| Catálogo principal | `/` o `/catalog` |
| Página informativa anterior | `/home` |
| Detalle de producto | `/product/1` |
| Favoritos | `/favorites` |
| Publicaciones | `/publications`, `/create-publication`, `/edit-publication/1` |
| Mensajes | `/inbox`, `/conversation` |
| Compra | `/cart`, `/orders` |
| Acceso y registro | `/login`, `/register` y variantes por rol |
| Paneles | `/admin-dashboard`, `/farmer-dashboard`, `/company-dashboard`, `/merchant-dashboard` |

El enrutado se gestiona en `src/App.tsx` mediante `window.location.pathname`; no se utiliza React Router.

## Estructura

```text
src/
  components/  Componentes reutilizables: encabezado, tarjetas, utilidades y marcos
  pages/       Vistas de cada ruta, incluido Catalog.tsx
  styles/      Estilos globales y estilos específicos de páginas
  data.ts      Productos, categorías y datos de demostración
  App.tsx      Selección de vista según la URL
```

## Catálogo principal

`src/pages/Catalog.tsx` reúne la experiencia principal. Muestra las tarjetas de `products` y permite filtrar por texto, categoría, ubicación, rango de precio y disponibilidad de transporte. Los datos son locales, definidos en `src/data.ts`, por lo que no hay backend ni persistencia aún.

## Componentes y props

| Componente | Props | Uso |
| --- | --- | --- |
| `AppFrame` | `children`, `active?`, `role?`, `footer?` | Estructura compartida con `Header` y, opcionalmente, `Footer`. |
| `DashboardFrame` | `children`, `role`, `active?` | Marco para paneles con barra lateral. |
| `AuthFrame` | `children`, `title?` | Diseño común de acceso y registro. |
| `Header` | `active?`, `role?` | Navegación, usuario y menú desplegable. `role` puede ser `admin`, `agricultor`, `empresa` o `comerciante`. |
| `ProductCard` | `product`, `compact?` | Tarjeta enlazada al detalle de un producto. |
| `PublicationCard` | `product`, `action?` | Resumen de una publicación con acción configurable. |
| `SearchBar` | `placeholder?`, `value`, `onChange` | Campo controlado de búsqueda. `onChange` recibe el texto actualizado. |
| `Sidebar` | `role`, `active?` | Menú contextual de los paneles. |
| `Modal` | Consultar `src/components/Modal.tsx` | Contenedor reutilizable para diálogos. |

Las props marcadas con `?` son opcionales. `children` representa el contenido interno que React renderiza dentro del componente marco.

### Tipo de datos del catálogo

`Product` en `src/data.ts` define cada tarjeta del catálogo:

```ts
type Product = {
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
  description?: string;
};
```

## Hooks usados

| Hook | Archivo | Finalidad |
| --- | --- | --- |
| `useState` | `Catalog.tsx` | Guarda el texto, filtros, precios y estado del transporte. Al cambiar un valor, React vuelve a renderizar el catálogo. |
| `useMemo` | `Catalog.tsx` | Calcula la lista filtrada solo cuando cambian los productos o filtros, evitando repetir el cálculo en renderizados ajenos. |
| `useState` | `Header.tsx` | Controla la apertura del menú móvil y del menú de usuario. |
| `useState` | Otras páginas | Controla formularios, modales y estados visuales locales. |

Ejemplo de flujo del catálogo:

```tsx
const [query, setQuery] = useState('');
const filtered = useMemo(
  () => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())),
  [query],
);
```

`query` es el estado actual; `setQuery` lo actualiza desde el buscador. `useMemo` recalcula `filtered` cuando cambia `query`.

## Notas

La aplicación es una demo frontend: filtros, botones y formularios realizan interacciones locales y no envían datos a una API. Para conectar un backend, el siguiente paso natural sería reemplazar los datos de `src/data.ts` por consultas HTTP y manejar sus estados de carga y error.
