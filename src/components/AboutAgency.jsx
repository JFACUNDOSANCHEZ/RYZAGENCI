import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Zap } from 'lucide-react';
import styles from './AboutAgency.module.css';

const AboutAgency = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.sectionBadge}
                    >
                        Quiénes Somos
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.mainTitle}
                    >
                        Nuestras unidades de negocios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.subtitle}
                    >
                        Potenciamos el éxito de las empresas de manera integral
                    </motion.p>
                </div>

                <div className={styles.contentGrid}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.card}
                    >
                        <div className={styles.iconWrapper}>
                            <Layout size={32} />
                        </div>
                        <h3>Diseño y Estrategia</h3>
                        <p>Creamos experiencias digitales únicas que conectan marcas con su audiencia global.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.card}
                    >
                        <div className={styles.iconWrapper}>
                            <Zap size={32} />
                        </div>
                        <h3>Innovación Tecnológica</h3>
                        <p>Implementamos soluciones de vanguardia para escalar tu negocio al siguiente nivel.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.card}
                    >
                        <div className={styles.iconWrapper}>
                            <Palette size={32} />
                        </div>
                        <h3>Identidad de Marca</h3>
                        <p>Desarrollamos lenguajes visuales que proyectan autoridad y confianza en el mercado.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutAgency;
