import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import TechBackground from '../components/TechBackground';
import KeyMetrics from '../sections/KeyMetrics';
import FAQ from '../sections/FAQ';
import ROICalculator from '../components/ROICalculator';
import TaxGuideGenerator from '../components/TaxGuideGenerator';
import './Home.css';



// Assets
import heroBg from '../assets/hero_consultants.png';
import pillarConseiller from '../assets/pillar-conseiller.png';
import pillarFinanceur from '../assets/pillar-financeur.png';
import pillarGerant from '../assets/pillar-gerant.png';
import pillarGarant from '../assets/pillar-garant.png';

const pillars = [
    {
        id: 1,
        title: "Financement",
        description: "Accompagnement dans la recherche de financement et l'optimisation de trésorerie. Transformez vos ambitions en réalités chiffrées.",
        image: pillarFinanceur,
        color: "var(--primary)"
    },
    {
        id: 2,
        title: "Fiscalité",
        description: "Assistance fiscale complète pour sécuriser vos opérations et optimiser vos charges dans le respect de la légalité.",
        image: pillarGarant,
        color: "var(--secondary)"
    },
    {
        id: 3,
        title: "Gestion",
        description: "Pilotage de la performance et support administratif. Nous vous libérons du temps pour vous concentrer sur votre cœur de métier.",
        image: pillarGerant,
        color: "var(--primary)"
    },
    {
        id: 4,
        title: "Digitalisation",
        description: "Transformation numérique de vos processus pour gagner en efficacité, sécuriser vos données et moderniser votre structure.",
        image: pillarConseiller,
        color: "var(--secondary)"
    }
];

const Home = () => {
    // Hero Animations
    const titleVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Scroll Storytelling Logic
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Mobile Detection
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 992);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                {/* Tech Background with Circuits */}
                {/* Professional Hero Image */}
                {/* Professional Hero Image */}
                <div className="hero-bg-wrapper">
                    <img src={heroBg} alt="Consultants Amat Consulting au travail" className="hero-bg-img" />
                    {/* Dark gradient for overall readability */}
                    <div className="hero-overlay-base"></div>
                    {/* Geometric Overlay for Text Area - Reference Style */}
                    <div className="hero-overlay-geometric"></div>
                </div>

                <div className="container hero-content relative z-20">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={titleVariant}
                        className="hero-text-wrapper text-left mr-auto"
                        style={{ maxWidth: '650px', marginLeft: '0' }}
                    >
                        <h1 className="hero-title text-white">
                            L'Excellence <br />
                            <span className="text-white">Au Service de l'Afrique</span>
                        </h1>
                        <p className="hero-subtitle text-white mx-0 text-lg mb-8" style={{ borderLeft: '4px solid #F97316', paddingLeft: '1.5rem', opacity: 0.95 }}>
                            Amat Consulting : Expert en Financement, Fiscalité, Gestion et Digitalisation.
                            <br />Accompagner le développement de vos projets avec une expertise de classe mondiale.
                        </p>
                        <div className="hero-buttons justify-start mt-8">
                            <Link
                                to="/contact"
                                className="btn btn-primary btn-lg border-none hover:scale-105 transition-transform cta-primary"
                                style={{ backgroundColor: '#F97316', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                Démarrer Mon Projet Gratuitement
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/services"
                                className="btn btn-outline-white btn-lg hover:bg-white hover:text-primary transition-all ml-4"
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                Découvrir Nos Solutions
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <p className="hero-micro-copy" style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8, color: 'white' }}>
                            ✓ Sans engagement • Réponse sous 24h • Audit gratuit
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="scroll-indicator"
                >
                    <span className="text-gray-400">Explorer</span>
                    <div className="line bg-gray-400"></div>
                </motion.div>
            </section>



            {/* Scroll Storytelling Section */}
            <section ref={targetRef} className="scroll-section">
                <div className="sticky-container">

                    {/* Render separate components to avoid "Rendered fewer hooks" error */}
                    {!isMobile ? (
                        <DesktopScrollStory pillars={pillars} smoothProgress={smoothProgress} />
                    ) : (
                        <MobileScrollStory pillars={pillars} smoothProgress={smoothProgress} />
                    )}

                </div>
            </section>

            {/* Key Metrics Section */}
            <KeyMetrics />

            {/* ROI Calculator Section */}
            <ROICalculator />

            {/* Testimonials Section */}
            <section className="section bg-light">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Ils nous font confiance</h2>
                        <p className="section-subtitle">Découvrez les retours d'expérience de nos clients partenaires.</p>
                    </motion.div>

                    <div className="grid grid-cols-3 gap-8 testimonials-grid">
                        {[
                            {
                                name: "Ibrahim Diallo",
                                role: "Directeur Général, EcoBuild SA",
                                content: "Amat Consulting a transformé notre gestion financière. Leur expertise nous a permis de sécuriser nos investissements et d'optimiser notre fiscalité. Un partenaire indispensable."
                            },
                            {
                                name: "Marie Kotto",
                                role: "Fondatrice, MK Design",
                                content: "Une équipe réactive et à l'écoute. Grâce à leur accompagnement juridique, j'ai pu structurer ma société sereinement. Je recommande vivement leurs services."
                            },
                            {
                                name: "Alain Ngue",
                                role: "Gérant, Transport Express",
                                content: "Le suivi social et paie est impeccable. Amat Consulting nous libère des contraintes administratives pour nous concentrer sur notre cœur de métier."
                            }
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="testimonial-card"
                            >
                                <div className="quote-icon">❝</div>
                                <p className="testimonial-text">{testimonial.content}</p>
                                <div className="testimonial-author">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tax Guide Section */}
            <TaxGuideGenerator />

            {/* FAQ Section */}
            <FAQ />

            {/* Closing Statement */}
            <section className="section text-center">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>
                            Prêt à écrire votre <span className="italic-accent" style={{ color: 'var(--secondary)' }}>histoire</span> ?
                        </h2>
                        <p className="lead mb-8" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
                            Rejoignez les dirigeants qui ont choisi l'excellence et la sérénité pour leur entreprise.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            Commencer Maintenant
                            <ArrowRight size={20} />
                        </Link>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                            Rejoignez plus de 150 entreprises qui nous font confiance
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

/* Sub-components to handle hooks correctly */
const DesktopScrollStory = ({ pillars, smoothProgress }) => {
    return (
        <div className="container grid split-screen desktop-view">
            {/* Left: Text Content */}
            <div className="pillars-text-side">
                {pillars.map((pillar, index) => {
                    const rangeStart = index * 0.25;
                    const rangeEnd = rangeStart + 0.25;
                    const opacity = useTransform(smoothProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0, 1, 1, 0]);
                    const y = useTransform(smoothProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [50, 0, 0, -50]);

                    return (
                        <motion.div
                            key={pillar.id}
                            style={{ opacity, y, display: index === 0 ? 'block' : undefined }}
                            className="pillar-text-card"
                        >
                            <span className="pillar-number">0{pillar.id}</span>
                            <h2 style={{ color: index % 2 !== 0 ? 'var(--primary)' : 'var(--secondary)' }}>{pillar.title}</h2>
                            <p>{pillar.description}</p>
                            <Link to={`/services#service-${pillar.id}`} className="learn-more-link">
                                En savoir plus <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            {/* Right: Images */}
            <div className="pillars-image-side">
                {pillars.map((pillar, index) => {
                    const rangeStart = index * 0.25;
                    const rangeEnd = rangeStart + 0.25;
                    const opacity = useTransform(smoothProgress, [rangeStart, rangeStart + 0.05, rangeEnd - 0.05, rangeEnd], [0, 1, 1, 0]);
                    const scale = useTransform(smoothProgress, [rangeStart, rangeEnd], [1.1, 1]);

                    return (
                        <motion.div
                            key={pillar.id}
                            style={{ opacity, scale }}
                            className="pillar-img-wrapper"
                        >
                            <img src={pillar.image} alt={pillar.title} className="pillar-img" />
                            <div className="glass-card-label">
                                <span>{pillar.title}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const MobileScrollStory = ({ pillars, smoothProgress }) => {
    return (
        <div className="container mobile-view-container">
            <div className="mobile-cards-stack">
                {pillars.map((pillar, index) => {
                    const rangeStart = index * 0.25;
                    const rangeEnd = rangeStart + 0.25;
                    // Simpler mobile transitions
                    const opacity = useTransform(smoothProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [0, 1, 1, 0]);
                    const y = useTransform(smoothProgress, [rangeStart, rangeStart + 0.1, rangeEnd - 0.1, rangeEnd], [50, 0, 0, -50]);

                    return (
                        <motion.div
                            key={pillar.id}
                            style={{ opacity, y, display: 'block' }}
                            className="pillar-text-card mobile-card"
                        >
                            <div className="mobile-pillar-img shadow-lg">
                                <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                            </div>
                            <span className="pillar-number mobile-number">0{pillar.id}</span>
                            <h2 style={{ color: index % 2 !== 0 ? 'var(--primary)' : 'var(--secondary)' }}>{pillar.title}</h2>
                            <p>{pillar.description}</p>
                            <Link to={`/services#service-${pillar.id}`} className="learn-more-link">
                                En savoir plus <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};


export default Home;
