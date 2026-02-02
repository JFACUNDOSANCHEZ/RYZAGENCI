import React from 'react';
import { motion } from 'framer-motion';
import styles from './Marquee.module.css';

const Marquee = () => {
    // Array of words to repeat
    const words = [
        "DIGITAL STRATEGY",
        "•",
        "WEB DEVELOPMENT",
        "•",
        "UI/UX DESIGN",
        "•",
        "BRAND IDENTITY",
        "•",
        "E-COMMERCE",
        "•",
        "GROWTH PARTNER",
        "•",
        "FULL STACK",
        "•",
        "INNOVATION",
        "•",
        "SEO OPTIMIZATION",
        "•"
    ];

    // Duplicate list to ensure seamless loop
    const marqueeContent = [...words, ...words, ...words, ...words];

    return (
        <div className={styles.marqueeSection}>
            <div className={styles.track}>
                <motion.div
                    className={styles.content}
                    animate={{ x: [0, -1000] }} // Adjust value based on content width
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {marqueeContent.map((word, index) => (
                        <span key={index} className={styles.word}>
                            {word}
                        </span>
                    ))}
                </motion.div>

                {/* Second copy for seamless loop (if needed by CSS tech, but Framer Motion handles the translate) */}
                <motion.div
                    className={styles.content}
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {marqueeContent.map((word, index) => (
                        <span key={`dup-${index}`} className={styles.word}>
                            {word}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
