import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Hero.module.css';
import hm from './../image/hm2.mp4'

const Hero = () => {
    // FadeUp variant for staggering text
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.bgGradient}></div>

            <div className={styles.container}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.15 }}
                    className={styles.content}
                >
                    <motion.span variants={fadeUp} className={styles.label}>
                        Digital Agency
                    </motion.span>

                    <motion.h1 variants={fadeUp} className={styles.title}>
                        Diseño web <br />
                        <span className={styles.gradientText}> y soluciones digitales.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className={styles.description}>
                        Creamos sitios web profesionales para pymes y empresas que buscan presencia
                    </motion.p>

                    <motion.div variants={fadeUp} className={styles.actions}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.btnPrimary}
                        >
                            Contactanos
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.btnSecondary}
                        >
                            Ver Servicios
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={styles.visualWrapper}
                >
                    <motion.div
                        animate={{ y: [-10, 10] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className={styles.imageContainer}
                    >
                        <video
                            src={hm}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={styles.heroVideo}
                        ></video>
                        {/* <img
                            src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1200"
                            alt="High Tech Interface"
                            className={styles.heroImage}
                        /> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;