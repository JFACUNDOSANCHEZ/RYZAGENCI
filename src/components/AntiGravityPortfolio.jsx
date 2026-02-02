import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import styles from './AntiGravityPortfolio.module.css';
import e1 from '../image/e1.jpeg';
import e2 from '../image/e2.jpeg';
import e3 from '../image/e3.jpeg';

const projects = [
    {
        id: 1,
        title: 'Somos Zap',
        category: 'E-Commerce',
        description: 'Una experiencia de compra inmersiva con integración de pagos en tiempo real.',
        image: e1,
        link: 'https://somoszap.com',
    },
    {
        id: 2,
        title: 'Panicafé',
        category: 'Branding & Web',
        description: 'Rediseño digital completo para una cadena de cafeterías premium.',
        image: e2,
        link: 'https://panicafe.us',
    },
    {
        id: 3,
        title: 'H-Ferreyra',
        category: 'Corporate',
        description: 'Portal corporativo para constructora líder con galerías interactivas.',
        image: e3,
        link: 'https://h-ferreyra.vercel.app',
    }
];

const Card = ({ project, index, range, targetScale, progress }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.div
                style={{ scale, top: `calc(10vh + ${index * 25}px)` }}
                className={styles.card}
            >
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardInner}
                >
                    {/* Full Background Image */}
                    <div className={styles.imageBackground}>
                        <div className={styles.overlayGradient}></div>
                        <img src={project.image} alt={project.title} className={styles.image} />
                    </div>

                    {/* Floating Content */}
                    <div className={styles.cardContent}>
                        <div className={styles.headerRow}>
                            <span className={styles.category}>{project.category}</span>
                            <span className={styles.number}>0{index + 1}</span>
                        </div>
                        <div className={styles.bottomRow}>
                            <div>
                                <h2 className={styles.title}>{project.title}</h2>
                                <p className={styles.description}>{project.description}</p>
                            </div>
                            <span className={styles.viewBtn}>
                                Explore <ArrowRight size={20} />
                            </span>
                        </div>
                    </div>
                </a>
            </motion.div>
        </div>
    );
};

const AntiGravityPortfolio = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className={styles.mainSection} id="portfolio">
            <div className={styles.header}>
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.subTitle}
                >
                    PORTAFOLIO
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.sectionTitle}
                >
                    Últimos <span className={styles.titleSpan}>Proyectos</span>
                </motion.h2>
            </div>

            <div className={styles.projectsWrapper}>
                {projects.map((project, index) => {
                    const targetScale = 1 - ((projects.length - index) * 0.05);
                    return (
                        <Card
                            key={project.id}
                            project={project}
                            index={index}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                            progress={scrollYProgress}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default AntiGravityPortfolio;
