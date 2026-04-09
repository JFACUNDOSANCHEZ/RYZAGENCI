import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import styles from './AntiGravityPortfolio.module.css';
import e1 from '../image/e1.jpeg';
import e2 from '../image/e2.jpeg';
import e3 from '../image/e3.jpeg';

const projects = [
    {
        id: 1,
        title: 'Somos Zap',
        category: 'E-Commerce',
        description: 'Plataforma de comercio electrónico con experiencia de usuario fluida, integración de pagos y gestión de inventario en tiempo real.',
        image: e1,
        link: 'https://somoszap.com',
    },
    {
        id: 2,
        title: 'Panicafé',
        category: 'Branding',
        description: 'Identidad visual completa y sitio web para cadena de cafeterías premium. Diseño que refleja calidad y experiencia.',
        image: e2,
        link: 'https://panicafe.us',
    },
    {
        id: 3,
        title: 'H-Ferreyra',
        category: 'Corporate',
        description: 'Portal corporativo moderno para empresa constructora, con galerías de proyectos interactivas y sistema de contacto.',
        image: e3,
        link: 'https://h-ferreyra.vercel.app',
    }
];

const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Mapping sizes to projects for Bento Grid
    const projectSizes = [styles.large, styles.tall, styles.wide];

    return (
        <section className={styles.mainSection} id="portfolio">
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={styles.subTitle}
                    >
                        Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={styles.sectionTitle}
                    >
                        Proyectos que <span className={styles.titleSpan}>marcan la diferencia.</span>
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => {
                        const isHovered = hoveredIndex === index;
                        const isSomethingHovered = hoveredIndex !== null;

                        return (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.projectCard} ${projectSizes[index] || styles.normal}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{
                                    opacity: isSomethingHovered && !isHovered ? 0.4 : 1,
                                    scale: isHovered ? 1.02 : (isSomethingHovered ? 0.98 : 1),
                                    zIndex: isHovered ? 10 : 1
                                }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                    // Stagger initial entrance but keep interactions fast
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.projectImage}
                                    />
                                </div>

                                <div className={styles.overlay}>
                                    <div className={styles.cardTop}>
                                        <span className={styles.category}>{project.category}</span>
                                        <div className={styles.iconBtn}>
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDesc}>{project.description}</p>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
