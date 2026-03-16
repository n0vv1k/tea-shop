import { motion } from 'framer-motion';
import { CreditCard, Truck, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [isOrdered, setIsOrdered] = useState(false);

    const inputStyle = {
        width: '100%',
        padding: '14px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid var(--glass-border)',
        borderRadius: '10px',
        color: '#fff',
        marginTop: '8px',
        outline: 'none'
    };

    const sectionStyle = {
        marginBottom: '30px'
    };

    if (isOrdered) {
        return (
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
                <CheckCircle size={80} color="var(--accent-color)" style={{ marginBottom: '20px' }} />
                <h1 style={{ fontSize: 'var(--font-h1)' }}>Заказ принят!</h1>
                <p style={{ color: '#a3a3a3', marginTop: '10px' }}>Номер вашего заказа #9013. Мы свяжемся с вами в ближайшее время.</p>
                <button className="glass-panel" style={{ marginTop: '30px', padding: '12px 30px', color: '#fff', cursor: 'pointer' }} onClick={() => window.location.href = '/'}>
                    На главную
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '40px 5%', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Оформление заказа</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '50px' }}>
                <div>
                    {/* Контактные данные */}
                    <div style={sectionStyle}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                            <Truck size={20} /> Информация о доставке
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <div>
                                <label style={{ fontSize: '14px', color: '#666' }}>Имя</label>
                                <input type="text" placeholder="Алексей" style={inputStyle} />
                            </div>
                            <div>
                                <label style={{ fontSize: '14px', color: '#666' }}>Телефон</label>
                                <input type="text" placeholder="+7 (999) 000-00-00" style={inputStyle} />
                            </div>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <label style={{ fontSize: '14px', color: '#666' }}>Адрес доставки</label>
                            <input type="text" placeholder="Город, улица, дом, квартира" style={inputStyle} />
                        </div>
                    </div>

                    {/* Способ оплаты */}
                    <div style={sectionStyle}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                            <CreditCard size={20} /> Способ оплаты
                        </h3>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {['card', 'cash'].map(method => (
                                <div
                                    key={method}
                                    onClick={() => setPaymentMethod(method)}
                                    className="glass-panel"
                                    style={{
                                        flex: 1, padding: '20px', cursor: 'pointer', textAlign: 'center',
                                        border: paymentMethod === method ? '1px solid var(--accent-color)' : '1px solid var(--glass-border)',
                                        transition: '0.3s'
                                    }}
                                >
                                    {method === 'card' ? 'Картой онлайн' : 'При получении'}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Сводка заказа */}
                <div className="glass-panel" style={{ padding: '30px', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '20px' }}>Ваш заказ</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                            <span>Те Гуань Инь Ван (100г)</span>
                            <span>₽ 4,800</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                            <span>Лунцзин (50г)</span>
                            <span>₽ 1,850</span>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span>Доставка</span>
                            <span style={{ color: 'var(--accent-color)' }}>Бесплатно</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 'bold' }}>
                            <span>Итого</span>
                            <span>₽ 6,650</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOrdered(true)}
                        style={{
                            width: '100%', padding: '18px', backgroundColor: 'var(--accent-color)',
                            color: '#000', border: 'none', borderRadius: '12px', marginTop: '30px',
                            fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
                        }}
                    >
                        Подтвердить заказ
                    </button>
                </div>
            </div>
        </motion.div >
    );
};

export default Checkout;