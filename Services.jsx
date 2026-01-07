import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TaxGuideGenerator from '../components/TaxGuideGenerator';
import './Services.css';

// Reusing assets due to generation quota
import imgCompta from '../assets/pillar-financeur.png'; // Fits Finance
import imgFiscal from '../assets/pillar-garant.png'; // Fits Rules/Law
import imgSocial from '../assets/pillar-gerant.png'; // Fits Management/Team
import imgJuridique from '../assets/pillar-conseiller.png'; // Fits Strategy/Agreement
import imgConseil from '../assets/hero-bg.png'; // General Business
import imgAudit from '../assets/hero-bg-light.png'; // Clean/Analysis

const services = [
    {
        id: 1,
        title: "Ingénierie de Financement",
        desc: "Nous transformons vos ambitions en projets bancables. Notre expertise en ingénierie financière vous permet de structurer des dossiers solides pour convaincre les institutions les plus exigeantes et sécuriser les ressources nécessaires à votre expansion.",
        image: imgCompta,
        features: [
            "Élaboration de Business Plans stratégiques et prévisionnels financiers",
            "Négociation de lignes de crédit, leasing et facilités de caisse",
            "Accompagnement en levée de fonds et recherche d'investisseurs (Equity)",
            "Optimisation de la structure du capital et du coût de la dette",
            "Gestion des relations bancaires et reporting financier premium"
        ],
        expertTip: "Le financement n'est pas qu'une question de chiffres, c'est une question de confiance. Un dossier bien structuré réduit votre taux d'intérêt de 1.5% en moyenne."
    },
    {
        id: 2,
        title: "Optimisation & Sécurité Fiscale",
        desc: "Naviguez en toute sérénité dans la complexité législative de l'espace OHADA. Nous mettons en œuvre des stratégies d'optimisation légale pour minimiser votre pression fiscale tout en garantissant une conformité totale face aux administrations.",
        image: imgFiscal,
        features: [
            "Audit fiscal préventif et cartographie des risques",
            "Déclarations fiscales mensuelles et annuelles (DSF) avec contrôle de cohérence",
            "Optimisation de la TVA et gestion des crédits d'impôts",
            "Assistance et défense stratégique lors de contrôles fiscaux inopinés",
            "Veille fiscale personnalisée et application de la Loi de Finances"
        ],
        expertTip: "L'optimisation commence par la maîtrise des flux. Une gestion rigoureuse de la TVA peut améliorer votre trésorerie immédiate de 10 à 15%."
    },
    {
        id: 3,
        title: "Gestion & Pilotage de Performance",
        desc: "Pilotez votre entreprise avec une précision chirurgicale. Nous mettons en place les indicateurs de performance (KPI) et les processus de contrôle indispensables pour garantir votre rentabilité et votre pérennité opérationnelle.",
        image: imgSocial,
        features: [
            "Conception de Tableaux de Bord dynamiques et reportings mensuels",
            "Analyse des coûts de revient et comptabilité analytique",
            "Suivi de trésorerie prévisionnel et gestion du BFR",
            "Audit organisationnel et optimisation des processus administratifs",
            "Externalisation de la fonction financière (CFO on-demand)"
        ],
        expertTip: "On ne gère bien que ce que l'on mesure. Les entreprises pilotées par les KPIs ont une rentabilité supérieure de 25% aux autres."
    },
    {
        id: 4,
        title: "Transformation Digitale & IA",
        desc: "Propulsez votre structure dans l'ère de l'efficacité numérique. Nous auditons vos processus pour implémenter des solutions logicielles intelligentes qui automatisent vos tâches répétitives et sécurisent votre patrimoine informationnel.",
        image: imgConseil,
        features: [
            "Audit de maturité digitale et schéma directeur informatique",
            "Déploiement et paramétrage d'ERP et CRM (Cloud ou Local)",
            "Automatisation des flux comptables et paie (IA intégrée)",
            "Sécurisation des données et archivage légal numérique",
            "Formation des équipes aux nouveaux outils collaboratifs"
        ],
        expertTip: "La digitalisation n'est pas un coût, c'est un gain de temps. Gagnez jusqu'à 2 jours de travail par semaine grâce à l'automatisation."
    }
];


const Services = () => {
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nos Expertises
                    </motion.h1>
                    <p>Des solutions sur mesure pour chaque étape de votre développement.</p>
                </div>
            </section>

            <section className="section services-list">
                <div className="container">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            id={`service-${service.id}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`service-item ${index % 2 !== 0 ? 'reversed' : ''}`}
                        >
                            <div className="service-content">
                                <span className="service-number">0{index + 1}</span>
                                <h2>{service.title}</h2>
                                <p>{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <ArrowRight size={14} className="feature-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {service.expertTip && (
                                    <div className="service-expert-block">
                                        <div className="expert-content">
                                            <span>Conseil Expert :</span>
                                            <p>{service.expertTip}</p>
                                        </div>
                                    </div>
                                )}
                                <Link to="/contact" className="btn btn-primary service-btn">
                                    Réserver une consultation <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="service-visual">
                                <img src={service.image} alt={service.title} />
                                <div className="visual-overlay"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tax Guide Section */}
            <TaxGuideGenerator />

            {/* CTA Section */}
            <section className="section cta-section text-center">
                <div className="container">
                    <h2>Un projet spécifique ?</h2>
                    <p>Discutons de vos besoins autour d'un café ou en visio.</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Contactez-nous</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
