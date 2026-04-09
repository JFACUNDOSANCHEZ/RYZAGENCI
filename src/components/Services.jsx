import React from 'react';
import { motion } from 'framer-motion';
import { Layout, CodeXml, Search, ShieldCheck, Sparkles } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Diseño Web Profesional',
        description:
            'Creamos páginas web modernas, rápidas y adaptadas a tu negocio para generar confianza y atraer nuevos clientes.',
        icon: <Layout size={32} strokeWidth={1.5} />,
        featured: true,
    },
    {
        title: 'Desarrollo Web a Medida',
        description:
            'Sitios web hechos desde cero, sin plantillas genéricas, pensados para escalar con tu empresa.',
        icon: <CodeXml size={28} strokeWidth={1.5} />,
    },
    {
        title: 'Posicionamiento en Google (SEO)',
        description:
            'Optimizamos tu web para que aparezca en Google y te contacten clientes reales.',
        icon: <Search size={28} strokeWidth={1.5} />,
    },
    {
        title: 'Mantenimiento y Soporte',
        description:
            'Actualizaciones, seguridad y soporte continuo para que tu web funcione siempre.',
        icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    },
];

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.header}>
                    <motion.div
                        className={styles.sectionBadge}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles size={14} className={styles.badgeIcon} />
                        <span>Soluciones Digitales</span>
                    </motion.div>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                    >
                        Diseño y<br />
                        <span className={styles.titleSpan}> Desarrollo Web </span>
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Creamos sistemas digitales que no solo funcionan, sino que definen el
                        estándar de tu industria.
                    </motion.p>
                </div>

                {/* GRID */}
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${service.featured ? styles.featured : ''
                                }`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                        >
                            {service.featured && <div className={styles.cardGlow} />}

                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>

                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;