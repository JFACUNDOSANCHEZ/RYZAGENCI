import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Share2, ShieldCheck, Rocket } from 'lucide-react';
import styles from './Services.module.css';


const services = [
    {
        title: 'Diseño Web Profesional',
        description: 'Sitios modernos y adaptados a tu empresa. Creamos experiencias de navegación claras, fluidas y visualmente impactantes.',
        icon: <Code2 />,
    },
    {
        title: 'Responsividad Total',
        description: 'Tu web perfecta en cualquier pantalla. Optimizamos cada detalle para garantizar la mejor experiencia en móviles y tablets.',
        icon: <Share2 />,
    },
    {
        title: 'Diseño de Identidad y UX/UI',
        description: 'Diseño estratégico que refleja la esencia de tu marca, generando autoridad y confianza instantánea en tus clientes.',
        icon: <ShieldCheck />,
    },
    {
        title: 'SEO & Rendimiento',
        description: 'Posicionamiento orgánico y carga ultrarrápida. Optimizamos tu sitio para que tus clientes te encuentren.',
        icon: <Rocket />,
    }
];

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.subTitle}
                    >
                        Qué hacemos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={styles.title}
                    >
                        Diseño y desarrollo  <br />
                        <span className={styles.titleSpan}>de sitios web institucionales</span>
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.glowPoint}></div>
                            <div className={styles.iconWrapper}>
                                {React.cloneElement(service.icon, {
                                    size: 28,
                                    color: "currentColor"
                                })}
                            </div>
                            <div className={styles.textWrapper}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
