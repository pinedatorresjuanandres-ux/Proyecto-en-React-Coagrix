import Home from './pages/Home';
import Login from './pages/Login';
import LoginAgricultor from './pages/LoginAgricultor';
import LoginComerciante from './pages/LoginComerciante';
import LoginEmpresa from './pages/LoginEmpresa';
import Registro from './pages/Registro';
import RegistroAgricultor from './pages/RegistroAgricultor';
import RegistroComerciante from './pages/RegistroComerciante';
import RegistroEmpresa from './pages/RegistroEmpresa';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Favorites from './pages/Favorites';
import Publicaciones from './pages/Publicaciones';
import CrearPublicacion from './pages/CrearPublicacion';
import EditarPublicacion from './pages/EditarPublicacion';
import Inbox from './pages/Inbox';
import Conversation from './pages/Conversation';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminUserDetail from './pages/AdminUserDetail';
import AdminPublications from './pages/AdminPublications';
import FarmerDashboard from './pages/FarmerDashboard';
import FarmerProfile from './pages/FarmerProfile';
import FarmerOrders from './pages/FarmerOrders';
import FarmerPublications from './pages/FarmerPublications';
import CompanyDashboard from './pages/CompanyDashboard';
import CompanyProfile from './pages/CompanyProfile';
import CompanySearch from './pages/CompanySearch';
import MerchantDashboard from './pages/MerchantDashboard';
import MerchantCompare from './pages/MerchantCompare';
import { AppFrame } from './components/PageFrame';
import PanelNotificaciones from './components/PanelNotificaciones';

function NotFound() {
  return <AppFrame footer><main className="page-container"><div className="container"><div className="surface empty-state"><span>🌾</span><h1>Página no encontrada</h1><p>La vista que buscas no existe en esta demo frontend.</p><a className="btn-primary" href="/">Volver al inicio</a></div></div></main></AppFrame>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  let pagina;

  // El catálogo es la experiencia de entrada de la aplicación.
  if (path === '/' || path === '/catalog') pagina = <Catalog />;
  else if (path === '/home') pagina = <Home />;
  else if (path === '/login') pagina = <Login />;
  else if (path === '/login-agricultor') pagina = <LoginAgricultor />;
  else if (path === '/login-comerciante') pagina = <LoginComerciante />;
  else if (path === '/login-empresa') pagina = <LoginEmpresa />;
  else if (path === '/register') pagina = <Registro />;
  else if (path === '/register-agricultor') pagina = <RegistroAgricultor />;
  else if (path === '/register-comerciante') pagina = <RegistroComerciante />;
  else if (path === '/register-empresa') pagina = <RegistroEmpresa />;
  else if (path.startsWith('/product/')) pagina = <ProductDetail />;
  else if (path === '/favorites') pagina = <Favorites />;
  else if (path === '/publications') pagina = <Publicaciones />;
  else if (path === '/create-publication') pagina = <CrearPublicacion />;
  else if (path.startsWith('/edit-publication/')) pagina = <EditarPublicacion />;
  else if (path === '/inbox') pagina = <Inbox />;
  else if (path === '/conversation') pagina = <Conversation />;
  else if (path === '/cart') pagina = <Cart />;
  else if (path === '/orders') pagina = <Orders />;
  else if (path === '/admin-dashboard') pagina = <AdminDashboard />;
  else if (path === '/admin-users') pagina = <AdminUsers />;
  else if (path.startsWith('/admin-user-detail')) pagina = <AdminUserDetail />;
  else if (path === '/admin-publications') pagina = <AdminPublications />;
  else if (path === '/farmer-dashboard') pagina = <FarmerDashboard />;
  else if (path === '/farmer-profile') pagina = <FarmerProfile />;
  else if (path === '/farmer-orders') pagina = <FarmerOrders />;
  else if (path === '/farmer-publications') pagina = <FarmerPublications />;
  else if (path === '/company-dashboard') pagina = <CompanyDashboard />;
  else if (path === '/company-profile') pagina = <CompanyProfile />;
  else if (path === '/company-search') pagina = <CompanySearch />;
  else if (path === '/merchant-dashboard') pagina = <MerchantDashboard />;
  else if (path === '/merchant-compare') pagina = <MerchantCompare />;
  else pagina = <NotFound />;

  return (
    <>
      {pagina}
      {/* Realizado por JUAN ANDRES PINEDA */}
      <PanelNotificaciones />
    </>
  );
}
