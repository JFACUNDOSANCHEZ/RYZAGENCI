import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const [message, setMessage] = useState('Hola RYZ, me gustaría hablar sobre mi proyecto...');

    const handleWhatsAppSend = (e) => {
        e.preventDefault();
        const phoneNumber = "5492945416727";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.bgGlow}></div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.sectionBadge}
                    >
                        Contact
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.bigTitle}
                    >
                        Listo para destacar?
                    </motion.h2>
                </div>

                {/* Primary Contact Action */}
                <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '600px', margin: '0 auto' }}
                    >
                        <form onSubmit={handleWhatsAppSend} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ flex: 1, background: 'transparent', border: 'none', padding: '0 1.5rem', color: 'white', outline: 'none' }}
                            />
                            <button type="submit" style={{ background: 'white', color: 'black', padding: '1rem 2rem', borderRadius: '100px', border: 'none', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Enviar <ArrowUpRight size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className={styles.contactGrid}>
                    <div className={styles.brandInfo}>
                        <div className={styles.footerLogo}>Ryz<span className={styles.logoDot}>.agencia</span></div>
                        <p className={styles.brandDesc}>
                            Potenciamos el crecimiento de tu negocio con desarrollo web premium y diseño institucional de primer nivel.
                        </p>
                    </div>

                    <div className={styles.linksWrapper}>
                        <div className={styles.linkGroup}>
                            <span className={styles.groupTitle}>Navegación</span>
                            <a href="#home" className={styles.linkItem}>Inicio</a>
                            <a href="#services" className={styles.linkItem}>Servicios</a>
                            <a href="#portfolio" className={styles.linkItem}>Portafolio</a>
                        </div>
                        <div className={styles.linkGroup}>
                            <span className={styles.groupTitle}>Contacto</span>
                            <a href="mailto:hola@ryzagencia.com" className={styles.linkItem}>hola@ryzagencia.com</a>
                            <a href="#" className={styles.linkItem}>Córdoba, Argentina</a>
                        </div>
                        <div className={styles.linkGroup}>
                            <span className={styles.groupTitle}>Social</span>
                            <a href="#" className={styles.linkItem}>Instagram</a>
                            <a href="#" className={styles.linkItem}>LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} RYZ Agencia Digital. Todos los derechos reservados.</p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;