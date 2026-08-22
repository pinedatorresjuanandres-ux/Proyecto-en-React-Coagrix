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

function NotFound() {
  return <AppFrame footer><main className="page-container"><div className="container"><div className="surface empty-state"><span>🌾</span><h1>Página no encontrada</h1><p>La vista que buscas no existe en esta demo frontend.</p><a className="btn-primary" href="/">Volver al inicio</a></div></div></main></AppFrame>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  // El catálogo es la experiencia de entrada de la aplicación.
  if (path === '/' || path === '/catalog') return <Catalog />;
  if (path === '/home') return <Home />;
  if (path === '/login') return <Login />;
  if (path === '/login-agricultor') return <LoginAgricultor />;
  if (path === '/login-comerciante') return <LoginComerciante />;
  if (path === '/login-empresa') return <LoginEmpresa />;
  if (path === '/register') return <Registro />;
  if (path === '/register-agricultor') return <RegistroAgricultor />;
  if (path === '/register-comerciante') return <RegistroComerciante />;
  if (path === '/register-empresa') return <RegistroEmpresa />;
  if (path === '/catalog') return <Catalog />;
  if (path.startsWith('/product/')) return <ProductDetail />;
  if (path === '/favorites') return <Favorites />;
  if (path === '/publications') return <Publicaciones />;
  if (path === '/create-publication') return <CrearPublicacion />;
  if (path.startsWith('/edit-publication/')) return <EditarPublicacion />;
  if (path === '/inbox') return <Inbox />;
  if (path === '/conversation') return <Conversation />;
  if (path === '/cart') return <Cart />;
  if (path === '/orders') return <Orders />;
  if (path === '/admin-dashboard') return <AdminDashboard />;
  if (path === '/admin-users') return <AdminUsers />;
  if (path.startsWith('/admin-user-detail')) return <AdminUserDetail />;
  if (path === '/admin-publications') return <AdminPublications />;
  if (path === '/farmer-dashboard') return <FarmerDashboard />;
  if (path === '/farmer-profile') return <FarmerProfile />;
  if (path === '/farmer-orders') return <FarmerOrders />;
  if (path === '/farmer-publications') return <FarmerPublications />;
  if (path === '/company-dashboard') return <CompanyDashboard />;
  if (path === '/company-profile') return <CompanyProfile />;
  if (path === '/company-search') return <CompanySearch />;
  if (path === '/merchant-dashboard') return <MerchantDashboard />;
  if (path === '/merchant-compare') return <MerchantCompare />;
  return <NotFound />;
}
