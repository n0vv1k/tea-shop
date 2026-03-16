import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['Все', 'Зеленый', 'Улун', 'Пуэр', 'Белый'];

const PRODUCTS = [
    // 2. Используем ИМЕНА ИМПОРТОВ, а не строки с путями
    { id: 1, name: 'Те Гуань Инь Ван', category: 'Улун', price: 2400, img: '/images/ulun.png' },
    { id: 2, name: 'Лунцзин', category: 'Зеленый', price: 1850, img: '/images/green_tea.png' },
    { id: 3, name: 'Шу Пуэр', category: 'Пуэр', price: 3200, img: '/images/puer.png' },
    { id: 4, name: 'Бай Хао Инь Чжэнь', category: 'Белый', price: 4100, img: '/images/white_tea.png' },

    // Внешние ссылки работают через строки, их не трогаем
    { id: 5, name: 'Да Хун Пао', category: 'Улун', price: 5600, img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=400' },
    { id: 6, name: 'Сенча Премиум', category: 'Зеленый', price: 1200, img: 'https://images.unsplash.com/photo-1582793988951-9aed55099991?q=80&w=400' },
];

const Catalog = () => {
    const [activeCategory, setActiveCategory] = useState('Все');

    const filteredProducts = activeCategory === 'Все'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '40px 5%' }}
        >
            {/* Заголовок и фильтры */}
            <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--font-h1)', fontWeight: '800', marginBottom: '1rem' }}>Коллекция</h1>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px',
                                    borderRadius: '20px',
                                    border: '1px solid var(--glass-border)',
                                    backgroundColor: activeCategory === cat ? 'var(--accent-color)' : 'transparent',
                                    color: activeCategory === cat ? '#000' : '#fff',
                                    cursor: 'pointer',
                                    fontSize: 'var(--font-sm)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ position: 'relative', width: '300px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                    <input
                        type="text"
                        placeholder="Поиск сорта..."
                        style={{
                            width: '100%', padding: '12px 12px 12px 40px',
                            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                            borderRadius: '12px', color: '#fff', outline: 'none'
                        }}
                    />
                </div>
            </div>

            {/* Сетка товаров */}
            <motion.div
                layout
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}
            >
                <AnimatePresence>
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -10 }}
                            className="glass-panel"
                            style={{ overflow: 'hidden', cursor: 'pointer' }}
                        >
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        position: 'absolute', top: '15px', right: '15px',
                                        padding: '4px 12px', background: 'rgba(0,0,0,0.6)',
                                        backdropFilter: 'blur(4px)', borderRadius: '20px', fontSize: '12px'
                                    }}>
                                        {product.category}
                                    </div>
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: '600' }}>{product.name}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                                            ₽ {product.price.toLocaleString()}
                                        </span>
                                        <button style={{
                                            background: 'none', border: '1px solid var(--accent-color)',
                                            color: 'var(--accent-color)', padding: '5px 15px', borderRadius: '8px',
                                            fontSize: '14px', cursor: 'pointer'
                                        }}>
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default Catalog;