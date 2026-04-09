import React from 'react';
import { motion } from 'framer-motion';
import styles from './Team.module.css';

const testimonials = [
    {
        name: 'Carlos Rodriguez',
        role: 'Director, LegalCorp',
        text: 'La web institucional que desarrollaron para nuestro estudio superó todas las expectativas. El diseño premium y la atención al detalle son excepcionales.',
        verified: true,
    },
    {
        name: 'Elena Mendez',
        role: 'Founder, EcoShop',
        text: 'Nuestras ventas online aumentaron un 60% tras el rediseño de nuestro E-commerce. Ryz entendió perfectamente nuestra visión desde el primer día.',
        verified: true,
    },
    {
        name: 'Marcos Galperín',
        role: 'Consultor IT',
        text: 'Buscábamos algo tecnológico y elegante para nuestra marca personal. La velocidad del sitio y la fluidez de la interfaz son de otro nivel.',
        verified: true,
    }
];

const Team = () => {
    return (
        <section id="team" className={styles.team}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.sectionBadge}
                    >
                        Testimonios
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Qué dicen nuestros <br />
                        <span className={styles.titleSpan}>Clientes?</span>
                    </motion.h2>
                </div>

                <div className={styles.testimonialGrid}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.testimonialCard}
                        >
                            <div className={styles.userHeader}>
                                <div className={styles.avatar}>
                                    {t.name.charAt(0)}
                                </div>
                                <div className={styles.userInfo}>
                                    <div className={styles.userName}>
                                        {t.name} {t.verified && <span className={styles.verified}>●</span>}
                                    </div>
                                    <div className={styles.userRole}>{t.role}</div>
                                </div>
                            </div>
                            <p className={styles.testimonialText}>{t.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;