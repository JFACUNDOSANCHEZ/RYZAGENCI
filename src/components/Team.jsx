import React from 'react';
import { motion } from 'framer-motion';
import styles from './Team.module.css';

const Team = () => {
    return (
        <section id="team" className={styles.team}>
            <div className={styles.container}>
                {/* Encabezado de la Sección */}
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.subTitle}
                    >
                        Filosofía RYZ
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.sectionTitle}
                    >
                        Creamos <span className={styles.titleSpan}>Gravedad Digital</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.contentParams}
                >
                    <p className={styles.description}>
                        En <span className={styles.highlight}>RYZ</span>, ayudamos a empresas a profesionalizar su imagen en la web desde
                        <span className={styles.highlight}> Córdoba</span>.
                        No solo construimos sitios; diseñamos experiencias a medida que fusionan
                        <span className={styles.highlight}> estética</span> y
                        <span className={styles.highlight}> rendimiento</span> para que tu marca destaque con una fuerza única.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;