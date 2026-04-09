import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styles from './Hero.module.css';
import hm from './../image/hm3.mp4'

const Hero = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 0.7, 0.34, 1] }
        }
    };

    return (
        <section className={styles.hero} id="home">
            <div className={styles.videoWrapper}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.bgVideo}
                >
                    <source src={hm} type="video/mp4" />
                </video>
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className={styles.content}
                >
                    <motion.div variants={fadeUp} >
                        {/* Transformamos el Futuro con IA <span className={styles.badgeArrow}>→</span> */}
                    </motion.div>

                    <motion.h1 variants={fadeUp} className={styles.title}>
                        Innovación Digital <br />
                        <span className={styles.gradientText}>Sin Límites.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className={styles.description}>
                        Potenciamos tu negocio con herramientas inteligentes que optimizan procesos y aceleran el crecimiento en la era digital.
                    </motion.p>

                    <motion.div variants={fadeUp} className={styles.actions}>
                        <button className={styles.btnPrimary}>
                            Descubrir Más <span className={styles.btnArrow}>→</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className={styles.scrollIndicator}
            >
                <div className={styles.line}></div>
                <span>Desliza para ver más</span>
            </motion.div> */}
        </section>
    );
};

export default Hero;