import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Quels sont vos domaines d'expertise ?",
            answer: "Nous intervenons dans quatre domaines clés : le Financement (recherche de fonds et optimisation de trésorerie), la Fiscalité (assistance fiscale et optimisation), la Gestion (pilotage de performance et support administratif), et la Digitalisation (transformation numérique de vos processus)."
        },
        {
            question: "Travaillez-vous avec des startups et PME ?",
            answer: "Absolument ! Nous accompagnons aussi bien les startups en phase de lancement que les PME établies et les grandes entreprises. Nos solutions sont adaptées à la taille et aux besoins spécifiques de chaque structure."
        },
        {
            question: "Combien de temps dure un audit initial ?",
            answer: "Un audit initial dure généralement entre 2 et 5 jours ouvrables, selon la complexité de votre structure. Nous vous fournissons ensuite un rapport détaillé avec nos recommandations sous 48h."
        },
        {
            question: "Proposez-vous des consultations à distance ?",
            answer: "Oui, nous proposons des consultations en présentiel et à distance via visioconférence. Nous travaillons avec des clients partout en Afrique et adaptons nos méthodes à vos contraintes géographiques."
        },
        {
            question: "Quels sont vos tarifs ?",
            answer: "Nos tarifs varient selon la nature et l'ampleur de la mission. Nous proposons systématiquement un devis personnalisé après un premier échange gratuit pour comprendre vos besoins. Contactez-nous pour une estimation précise."
        },
        {
            question: "Combien de temps faut-il pour voir des résultats ?",
            answer: "Les premiers résultats sont généralement visibles dès le premier mois pour l'optimisation fiscale et la gestion. Pour le financement et la digitalisation, comptez 2 à 6 mois selon la complexité du projet."
        },
        {
            question: "Offrez-vous un accompagnement continu ?",
            answer: "Oui, nous proposons des formules d'accompagnement mensuel ou annuel pour un suivi régulier de votre activité. Cela inclut des points mensuels, un support prioritaire et des ajustements stratégiques."
        },
        {
            question: "Comment se déroule la première prise de contact ?",
            answer: "Contactez-nous via le formulaire, WhatsApp ou par téléphone. Nous organisons un premier échange gratuit de 30 minutes pour comprendre vos besoins, puis nous vous proposons un plan d'action personnalisé sous 48h."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="faq-header"
                >
                    <h2 className="section-title">Questions Fréquentes</h2>
                    <p className="section-subtitle">
                        Tout ce que vous devez savoir sur nos services et notre accompagnement
                    </p>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <motion.div
                                    className="faq-icon"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {openIndex === index ? (
                                        <Minus size={20} strokeWidth={2.5} />
                                    ) : (
                                        <Plus size={20} strokeWidth={2.5} />
                                    )}
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="faq-answer-content">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="faq-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p>Vous avez d'autres questions ?</p>
                    <a href="/contact" className="btn btn-primary">
                        Contactez-nous
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
