import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Send, Globe, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Email invalide';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Utilisation de Formspree pour rendre le formulaire réellement fonctionnel
            const response = await fetch("https://formspree.io/f/mojvgjlw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page-modern">
            {/* Minimalist Professional Header */}
            <section className="contact-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="contact-hero-content"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Partenariat & Expertise</span>
                        <h1>Parlons de votre <span className="text-gradient-gold">prochaine étape</span>.</h1>
                        <p className="lead">Nous transformons vos défis en opportunités de croissance avec une expertise panafricaine de classe mondiale.</p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-card-wrapper">
                        {/* Info Panel - Left side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="contact-info-panel"
                        >
                            <div className="info-panel-content">
                                <h3>Contact Direct</h3>
                                <p className="mb-10 text-gray-400">Prêt à démarrer ? Choisissez le canal qui vous convient le mieux.</p>

                                <div className="contact-method-links">
                                    <div className="method-item">
                                        <div className="method-icon"><Phone size={22} /></div>
                                        <div className="method-detail">
                                            <span>Appelez-nous</span>
                                            <a href="tel:+237656065176">+237 656 065 176</a>
                                        </div>
                                    </div>
                                    <div className="method-item">
                                        <div className="method-icon"><Mail size={22} /></div>
                                        <div className="method-detail">
                                            <span>Écrivez-nous</span>
                                            <a href="mailto:consultingamat@gmail.com">consultingamat@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="method-item">
                                        <div className="method-icon"><MapPin size={22} /></div>
                                        <div className="method-detail">
                                            <span>Visitez-nous</span>
                                            <address>Derrière le Supermarché Mahima (Immeuble Foyer Bantou), Elig-Essono, Yaoundé, Cameroun</address>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-proof-badge">
                                    <Globe size={18} className="text-secondary" />
                                    <span>Accompagnement international & local</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Panel - Right side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="contact-form-panel"
                        >
                            <div className="form-header">
                                <MessageSquare size={24} className="text-secondary mb-4" />
                                <h2>Demande de Consultation</h2>
                                <p>Remplissez ce formulaire et un consultant expert vous contactera sous 24h.</p>
                            </div>

                            <AnimatePresence mode="wait">
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="modern-form-alert success"
                                    >
                                        <div className="alert-icon"><CheckCircle size={24} /></div>
                                        <div>
                                            <h4>Message Envoyé</h4>
                                            <p>Merci pour votre confiance. Notre équipe analyse déjà votre demande.</p>
                                        </div>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="modern-form-alert error"
                                    >
                                        <div className="alert-icon"><AlertCircle size={24} /></div>
                                        <div>
                                            <h4>Une erreur s'est produite</h4>
                                            <p>Veuillez réessayer ou nous contacter via WhatsApp.</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form className="modern-form" onSubmit={handleSubmit} noValidate>
                                <div className="form-row">
                                    <div className="form-group flex-1">
                                        <label>Nom complet</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Amat Consulting"
                                            className={errors.name ? 'input-error' : ''}
                                        />
                                        {errors.name && <span className="error-hint">{errors.name}</span>}
                                    </div>
                                    <div className="form-group flex-1">
                                        <label>Email professionnel</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="consultingamat@gmail.com"
                                            className={errors.email ? 'input-error' : ''}
                                        />
                                        {errors.email && <span className="error-hint">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group flex-1">
                                        <label>Téléphone</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+237..."
                                        />
                                    </div>
                                    <div className="form-group flex-1">
                                        <label>Service d'intérêt</label>
                                        <select name="service" value={formData.service} onChange={handleChange}>
                                            <option value="">Sélectionnez une expertise</option>
                                            <option value="financement">Financement</option>
                                            <option value="fiscalite">Fiscalité</option>
                                            <option value="gestion">Gestion & Pilotage</option>
                                            <option value="digitalisation">Digitalisation</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Votre projet ou problématique</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Décrivez brièvement vos besoins..."
                                        className={errors.message ? 'input-error' : ''}
                                    ></textarea>
                                    {errors.message && <span className="error-hint">{errors.message}</span>}
                                </div>

                                <button
                                    type="submit"
                                    className="btn-modern-submit"
                                    disabled={isSubmitting}
                                >
                                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}</span>
                                    {!isSubmitting && <Send size={18} />}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="contact-map-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="map-container shadow-xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.332304907297!2d11.5173715!3d3.8741364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf772322303b%3A0x6c6c6c6c6c6c6c6c!2sFoyer%20Bantou%2C%20Elig-Essono!5e0!3m2!1sfr!2scm!4v1704634200000!5m2!1sfr!2scm"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '20px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localisation Amat Consulting"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
