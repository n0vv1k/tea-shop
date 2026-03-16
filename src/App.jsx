import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Menu } from 'lucide-react';

// Ленивая загрузка страниц
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Product = lazy(() => import('./pages/Product'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Auth = lazy(() => import('./pages/Auth'));
const Profile = lazy(() => import('./pages/Profile'));

// Компонент навигации (Layout можно вынести отдельно)
const Header = () => (
  <header style={{ padding: '20px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--glass-border)' }}>
    <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>
      TÉA<span style={{ color: 'var(--accent-color)' }}>.</span>
    </Link>
    <nav style={{ display: 'flex', gap: '2rem' }}>
      <Link to="/catalog" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Каталог</Link>
      <Link to="/auth" style={{ color: 'var(--text-primary)' }}><User size={20} /></Link>
      <Link to="/cart" style={{ color: 'var(--text-primary)' }}><ShoppingBag size={20} /></Link>
    </nav>
  </header>
);

const FallbackLoader = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    Загрузка...
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        <AnimatePresence mode="wait">
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
    </Router>
  );
}

export default App;