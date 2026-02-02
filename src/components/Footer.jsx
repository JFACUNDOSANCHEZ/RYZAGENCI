import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const [message, setMessage] = useState('');

    const handleWhatsAppSend = (e) => {
        e.preventDefault();
        const phoneNumber = "5492945416727"; // Reemplaza con tu número de Córdoba (sin el +)
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>

                {/* Nueva Sección Superior: CTA + Input de WhatsApp */}
                <div className={styles.topSection}>
                    <div className={styles.ctaContent}>
                        <span className={styles.ctaLabel}>¿Listo para empezar?</span>
                        <h2 className={styles.ctaHeading}>
                            Llevamos tu marca al <br />
                            <span className={styles.highlight}>Siguiente Nivel.</span>
                        </h2>
                    </div>

                    <div className={styles.contactBox}>
                        <p className={styles.boxText}>Escribinos tu idea y charlemos por WhatsApp:</p>
                        <form onSubmit={handleWhatsAppSend} className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Hola RYZ, necesito una web para..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={styles.mainInput}
                                required
                            />
                            <button type="submit" className={styles.sendBtn}>
                                <MessageCircle size={20} />
                                <span>Enviar</span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Main Grid */}
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            RYZ<span className={styles.dot}>.</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Soluciones digitales estratégicas para marcas con visión de futuro.
                            Desde <strong>Córdoba, Argentina</strong>.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Navegación</h4>
                        <ul className={styles.list}>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#portfolio">Proyectos</a></li>
                            <li><a href="#team">Nosotros</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Contacto</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}>
                                <Mail size={16} /> hola@ryz.com
                            </li>
                            <li className={styles.contactItem}>
                                <MapPin size={16} /> Córdoba, AR
                            </li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Redes</h4>
                        <ul className={styles.list}>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p>© {new Date().getFullYear()} RYZ. Hecho con ❤️ en Córdoba.</p>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;