import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const navLinks = [
        { name: 'Servicios', href: '#services' },
        { name: 'Proyectos', href: '#portfolio' },
        { name: 'Nosotros', href: '#team' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -50, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            >
                <a href="/" className={styles.brand}>
                    Ryz<span className={styles.brandSpan}>Tech</span>
                </a>

                {/* Desktop Menu */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className={styles.navLink}>{link.name}</a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>

                {/* Mobile Burger Button */}
                <div className={styles.mobileActions}>
                    <button onClick={toggleTheme} className={styles.themeToggleMobile} aria-label="Toggle theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <button
                        className={styles.burger}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={styles.mobileMenu}
                    >
                        <ul className={styles.mobileNavLinks}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={styles.mobileNavLink}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
