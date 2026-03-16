import { motion } from 'framer-motion';
import { Package, Settings, LogOut, MapPin } from 'lucide-react';

const Profile = () => {
    const user = { name: 'Алексей Дизайнеров', email: 'alex@example.com', joinDate: 'Март 2026' };

    const orders = [
        { id: '#8922', date: '12.03.2026', status: 'Доставлен', total: 7200 },
        { id: '#9012', date: '15.03.2026', status: 'В пути', total: 2400 },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '40px 5%', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>

                {/* Боковая панель */}
                <div className="glass-panel" style={{ width: '300px', padding: '30px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', margin: '0 auto 15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            АД
                        </div>
                        <h3>{user.name}</h3>
                        <p style={{ color: '#666', fontSize: '14px' }}>{user.email}</p>
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>
                            <Package size={18} /> Заказы
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', color: '#fff', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>
                            <MapPin size={18} /> Адреса
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', color: '#fff', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>
                            <Settings size={18} /> Настройки
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', color: '#ff4d4d', padding: '12px', borderRadius: '8px', cursor: 'pointer', marginTop: '20px' }}>
                            <LogOut size={18} /> Выход
                        </button>
                    </nav>
                </div>

                {/* Контентная часть */}
                <div style={{ flex: 1 }}>
                    <h2 style={{ marginBottom: '20px' }}>История заказов</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {orders.map(order => (
                            <div key={order.id} className="glass-panel" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Заказ {order.id}</div>
                                    <div style={{ color: '#666', fontSize: '14px' }}>{order.date}</div>
                                </div>
                                <div style={{
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    backgroundColor: order.status === 'Доставлен' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 193, 7, 0.1)',
                                    color: order.status === 'Доставлен' ? 'var(--accent-color)' : '#ffc107'
                                }}>
                                    {order.status}
                                </div>
                                <div style={{ fontWeight: 'bold' }}>₽ {order.total}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Profile;