import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    // Настройки анимации
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        },
        exit: { opacity: 0, y: -20, transition: { ease: 'easeInOut' } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ padding: '0 5%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '10vh' }}
        >
            <motion.h1 variants={itemVariants} style={{ fontSize: 'var(--font-h1)', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                Искусство чайной <br />
                <span style={{ color: 'var(--accent-color)' }}>церемонии</span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{ fontSize: 'var(--font-lg)', color: '#a3a3a3', maxWidth: '600px', marginBottom: '3rem' }}>
                Откройте для себя коллекцию премиальных сортов, собранных вручную на лучших плантациях мира.
            </motion.p>

            <motion.div variants={itemVariants}>
                <Link to="/catalog" className="glass-panel" style={{
                    display: 'inline-block',
                    padding: '16px 40px',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: 'var(--font-base)',
                    fontWeight: '600',
                    transition: 'background 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
                >
                    Перейти в каталог
                </Link>
            </motion.div>

            {/* Пример карточки товара на главной */}
            <motion.div variants={itemVariants} style={{ marginTop: '15vh', width: '100%', maxWidth: '1200px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                                <img src="/images/bg.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: 'var(--font-lg)', marginBottom: '0.5rem' }}>Матча Церемониальная</h3>
                            <p style={{ color: '#a3a3a3', marginBottom: '1.5rem' }}>Удзи, Япония</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: 'var(--font-base)', fontWeight: 'bold' }}>₽ 3,400</span>
                                <Link to={`/product/${item}`} style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>Подробнее</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Home;