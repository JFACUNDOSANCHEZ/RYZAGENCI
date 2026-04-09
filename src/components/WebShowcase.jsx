import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import styles from './WebShowcase.module.css';

const projects = [
    {
        title: 'Nova Architecture',
        category: 'Digital Studio',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        title: 'Zenith Watches',
        category: 'E-commerce Luxury',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
        link: '#'
    },
    {
        title: 'Aether Platform',
        category: 'SaaS / Fintech',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        link: '#'
    },
    {
        title: 'Eon Logistics',
        category: 'Supply Chain',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    }
];

const WebShowcase = () => {
    return (
        <section className={styles.showcase} id="portfolio">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.badge}
                    >
                        Nuestras Creaciones
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        Sistemas que <span className={styles.gradient}>Inspiran.</span>
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.projectCard}
                        >
                            <div className={styles.imageOverlay}>
                                <img src={project.image} alt={project.title} className={styles.image} />
                                <div className={styles.hoverContent}>
                                    <div className={styles.projectInfo}>
                                        <p className={styles.projectCategory}>{project.category}</p>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                    </div>
                                    <a href={project.link} className={styles.viewBtn}>
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebShowcase;
