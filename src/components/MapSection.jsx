import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import styles from './MapSection.module.css';

const MapSection = () => {
    return (
        <section className={styles.mapSection}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <span className={styles.badge}>Global Presence</span>
                    <h2 className={styles.title}>Connecting Businesses Worldwide</h2>
                    <p className={styles.description}>
                        Our specialized web solutions reach clients across more than 20 countries, empowering digital transformation at a global scale.
                    </p>
                </motion.div>

                <div className={styles.mapContainer}>
                    <div className={styles.mapGlow}></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className={styles.visual}
                    >
                        <Globe className={styles.globeIcon} size={400} strokeWidth={0.5} />

                        {/* Glowing Points */}
                        <div className={styles.point} style={{ top: '30%', left: '25%' }}><div className={styles.pulse}></div></div>
                        <div className={styles.point} style={{ top: '45%', left: '35%' }}><div className={styles.pulse}></div></div>
                        <div className={styles.point} style={{ top: '55%', left: '60%' }}><div className={styles.pulse}></div></div>
                        <div className={styles.point} style={{ top: '40%', left: '80%' }}><div className={styles.pulse}></div></div>
                        <div className={styles.point} style={{ top: '65%', left: '20%' }}><div className={styles.pulse}></div></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
