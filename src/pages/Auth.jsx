import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    // Общие стили для инпутов, чтобы не дублировать код
    const inputWrapperStyle = {
        position: 'relative',
        marginBottom: '1.5rem',
        width: '100%',
    };

    const iconStyle = {
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#a3a3a3',
    };

    const inputStyle = {
        width: '100%',
        padding: '16px 16px 16px 48px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid var(--glass-border)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontSize: 'var(--font-base)',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };

    // Обработка фокуса (имитация hover/focus через CSS-in-JS требует событий, 
    // но в реальном проекте это лучше вынести в index.css. Для простоты оставляем базовую стилизацию).

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика работы с API
        console.log(isLogin ? 'Вход...' : 'Регистрация...');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                padding: '0 5%'
            }}
        >
            <div className="glass-panel" style={{
                width: '100%',
                maxWidth: '440px',
                padding: '3rem 2rem',
                overflow: 'hidden'
            }}>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isLogin ? 'login' : 'register'}
                        initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <h2 style={{
                            fontSize: 'var(--font-h1)',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                            textAlign: 'center'
                        }}>
                            {isLogin ? 'С возвращением' : 'Создать аккаунт'}
                        </h2>
                        <p style={{
                            color: '#a3a3a3',
                            textAlign: 'center',
                            marginBottom: '2.5rem',
                            fontSize: 'var(--font-sm)'
                        }}>
                            {isLogin
                                ? 'Войдите, чтобы получить доступ к вашим заказам'
                                : 'Присоединяйтесь к клубу ценителей чая'
                            }
                        </p>

                        <form onSubmit={handleSubmit}>
                            {/* Поле имени показываем только при регистрации */}
                            {!isLogin && (
                                <div style={inputWrapperStyle}>
                                    <User size={20} style={iconStyle} />
                                    <input
                                        type="text"
                                        placeholder="Ваше имя"
                                        style={inputStyle}
                                        required
                                    />
                                </div>
                            )}

                            <div style={inputWrapperStyle}>
                                <Mail size={20} style={iconStyle} />
                                <input
                                    type="email"
                                    placeholder="Email адрес"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <div style={inputWrapperStyle}>
                                <Lock size={20} style={iconStyle} />
                                <input
                                    type="password"
                                    placeholder="Пароль"
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    backgroundColor: 'var(--text-primary)',
                                    color: 'var(--bg-primary)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: 'var(--font-base)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginTop: '1rem',
                                    transition: 'transform 0.2s ease, opacity 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                {isLogin ? 'Войти' : 'Зарегистрироваться'}
                                <ArrowRight size={20} />
                            </button>
                        </form>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <span style={{ color: '#a3a3a3', fontSize: 'var(--font-sm)' }}>
                                {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
                            </span>
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--accent-color)',
                                    cursor: 'pointer',
                                    fontSize: 'var(--font-sm)',
                                    fontWeight: '600',
                                    padding: 0
                                }}
                            >
                                {isLogin ? 'Создать' : 'Войти'}
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Auth;