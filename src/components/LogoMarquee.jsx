import React from 'react';
import { motion } from 'framer-motion';
import styles from './LogoMarquee.module.css';

const logos = [
    'LOGOIPSUM', 'LOGOPRINT', 'LOGOBASE', 'LOGOLINES', 'LOGOCOLOR'
];

const LogoMarquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.container}>
                <p className={styles.trusted}>Inspiring experiences</p>
                <div className={styles.track}>
                    {logos.map((logo, i) => (
                        <div key={i} className={styles.logo}>
                            {logo}
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logos.map((logo, i) => (
                        <div key={`d-${i}`} className={styles.logo}>
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;
