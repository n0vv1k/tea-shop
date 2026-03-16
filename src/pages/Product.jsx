import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, ShoppingCart, Leaf, Clock, Thermometer } from 'lucide-react';

const Product = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState(50);

    // Имитация получения данных (в реальном проекте здесь будет fetch)
    const product = {
        name: 'Те Гуань Инь Ван',
        category: 'Улун',
        pricePer50g: 2400,
        description: 'Один из самых знаменитых китайских улунов. Собран в уезде Аньси. Обладает глубоким цветочным ароматом с нотками орхидеи и освежающим послевкусием.',
        specs: {
            temp: '85-90°C',
            time: '2-3 мин',
            origin: 'Фуцзянь, Китай'
        },
        img: '/images/tea.png'
    };

    const totalPrice = (product.pricePer50g * (selectedWeight / 50)) * quantity;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '40px 5%', maxWidth: '1400px', margin: '0 auto' }}
        >
            <Link to="/catalog" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a3a3a3', textDecoration: 'none', marginBottom: '2rem' }}>
                <ChevronLeft size={20} /> Назад в каталог
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                {/* Галерея/Изображение */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="glass-panel"
                    style={{ height: '600px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <img
                        src={product.img}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                    />
                </motion.div>

                {/* Контентная часть */}
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span style={{ color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', fontSize: '14px' }}>
                        {product.category}
                    </span>
                    <h1 style={{ fontSize: 'var(--font-h1)', margin: '10px 0 20px', lineHeight: 1.1 }}>{product.name}</h1>

                    <p style={{ color: '#a3a3a3', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                        {product.description}
                    </p>

                    {/* Характеристики */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '3rem' }}>
                        <div className="glass-panel" style={{ padding: '15px', flex: 1, textAlign: 'center' }}>
                            <Thermometer size={20} style={{ color: 'var(--accent-color)', marginBottom: '8px' }} />
                            <div style={{ fontSize: '12px', color: '#666' }}>Температура</div>
                            <div style={{ fontWeight: 'bold' }}>{product.specs.temp}</div>
                        </div>
                        <div className="glass-panel" style={{ padding: '15px', flex: 1, textAlign: 'center' }}>
                            <Clock size={20} style={{ color: 'var(--accent-color)', marginBottom: '8px' }} />
                            <div style={{ fontSize: '12px', color: '#666' }}>Время</div>
                            <div style={{ fontWeight: 'bold' }}>{product.specs.time}</div>
                        </div>
                        <div className="glass-panel" style={{ padding: '15px', flex: 1, textAlign: 'center' }}>
                            <Leaf size={20} style={{ color: 'var(--accent-color)', marginBottom: '8px' }} />
                            <div style={{ fontSize: '12px', color: '#666' }}>Происхождение</div>
                            <div style={{ fontWeight: 'bold' }}>{product.specs.origin}</div>
                        </div>
                    </div>

                    {/* Выбор веса */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ marginBottom: '12px', color: '#a3a3a3' }}>Выберите вес (грамм):</div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {[50, 100, 250].map(weight => (
                                <button
                                    key={weight}
                                    onClick={() => setSelectedWeight(weight)}
                                    style={{
                                        padding: '10px 25px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--glass-border)',
                                        backgroundColor: selectedWeight === weight ? 'var(--text-primary)' : 'transparent',
                                        color: selectedWeight === weight ? 'var(--bg-primary)' : '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {weight}г
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Управление количеством и Цена */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'var(--glass-bg)', padding: '8px 15px', borderRadius: '12px' }}>
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><Minus size={18} /></button>
                            <span style={{ fontSize: '1.2rem', minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><Plus size={18} /></button>
                        </div>
                        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            ₽ {totalPrice.toLocaleString()}
                        </div>
                    </div>

                    <button style={{
                        width: '100%',
                        padding: '20px',
                        backgroundColor: 'var(--accent-color)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <ShoppingCart size={22} /> Добавить в корзину
                    </button>
                </motion.div>
            </div >
        </motion.div >
    );
};

export default Product;