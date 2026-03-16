import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // В реальном проекте здесь будет состояние из Redux или Context
    const cartItems = [
        { id: 1, name: 'Те Гуань Инь Ван', weight: 100, price: 4800, img: '/images/green_tea.png' },
        { id: 2, name: 'Лунцзин', weight: 50, price: 1850, img: '/images/ulun.png' },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

    if (cartItems.length === 0) {
        return (
            <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <ShoppingBag size={64} style={{ marginBottom: '20px', opacity: 0.3 }} />
                <h2>Корзина пуста</h2>
                <Link to="/catalog" style={{ color: 'var(--accent-color)', marginTop: '1rem' }}>Вернуться к покупкам</Link>
            </div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'var(--font-lg)', fontWeight: '800', marginBottom: '2rem' }}>Ваша корзина</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {cartItems.map(item => (
                        <motion.div key={item.id} className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.name}</h3>
                                <span style={{ color: '#666', fontSize: '14px' }}>Вес: {item.weight}г</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '5px 10px', borderRadius: '8px' }}>
                                <Minus size={16} cursor="pointer" />
                                <span>1</span>
                                <Plus size={16} cursor="pointer" />
                            </div>
                            <div style={{ fontWeight: 'bold', minWidth: '80px', textAlign: 'right' }}>₽ {item.price}</div>
                            <Trash2 size={20} style={{ color: '#ff4d4d', cursor: 'pointer', marginLeft: '10px' }} />
                        </motion.div>
                    ))}
                </div>

                <div className="glass-panel" style={{ padding: '30px', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '20px' }}>Итог заказа</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#a3a3a3' }}>
                        <span>Товары:</span>
                        <span>₽ {subtotal}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#a3a3a3' }}>
                        <span>Доставка:</span>
                        <span>Бесплатно</span>
                    </div>
                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        <span>Всего:</span>
                        <span>₽ {subtotal}</span>
                    </div>
                    <Link to="/checkout" style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
                        backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)',
                        padding: '16px', borderRadius: '12px', marginTop: '30px', textDecoration: 'none', fontWeight: '600'
                    }}>
                        Оформить заказ <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Cart;