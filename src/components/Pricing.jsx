import React from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const plans = [
    {
        name: 'Landing Page',
        price: 'Desde $299',
        features: ['Diseño de una sola página', 'Optimización para móviles', 'Formulario de contacto', 'Google Analytics'],
        button: 'Elegir Landing',
        featured: false,
    },
    {
        name: 'E-commerce',
        price: 'Desde $899',
        features: ['Tienda online autogestionable', 'Pasarela de pagos', 'Gestión de stock', 'Soporte prioritario'],
        button: 'Empieza Ahora',
        featured: true,
    },
    {
        name: 'Desarrollo a Medida',
        price: 'Consultar',
        features: ['Sistemas web complejos', 'Integraciones vía API', 'Panel de control avanzado', 'Infraestructura cloud'],
        button: 'Consultar Presupuesto',
        featured: false,
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.sectionBadge}
                    >
                        Planes & Precios
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Elige el plan ideal <br />
                        <span className={styles.titleSpan}>para tu Negocio</span>
                    </motion.h2>
                </div>

                <div className={styles.pricingGrid}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}
                        >
                            <div className={styles.planHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.planPrice}>{plan.price}<span className={styles.period}>/mo</span></div>
                            </div>
                            <ul className={styles.featureList}>
                                {plan.features.map((f, j) => (
                                    <li key={j} className={styles.featureItem}>
                                        <span className={styles.check}>✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={plan.featured ? styles.btnPrimary : styles.btnSecondary}>
                                {plan.button}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
