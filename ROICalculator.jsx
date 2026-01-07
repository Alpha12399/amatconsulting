import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wallet, Users, BarChart3, TrendingUp, Clock, Landmark } from 'lucide-react';
import './ROICalculator.css';

const ROICalculator = () => {
    const [formData, setFormData] = useState({
        profile: 'business', // 'business' or 'individual'
        currency: 'XAF',
        revenue: '', // or income for individual
        expenses: '', // or savings for individual
        employees: '', // or wealth for individual
        type: 'pme' // pme, startup, grande or salaried, freelancer, investor
    });

    const [result, setResult] = useState(null);

    const currencies = {
        XAF: { symbol: 'FCFA', label: 'Franc CFA (BEAC/BCEAO)' },
        EUR: { symbol: '€', label: 'Euro' },
        USD: { symbol: '$', label: 'Dollar US' },
        NGN: { symbol: '₦', label: 'Naira Nigérian' },
        GHS: { symbol: 'GH₵', label: 'Cedi Ghanéen' },
        ZAR: { symbol: 'R', label: 'Rand Sud-Africain' }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateROI = (e) => {
        e.preventDefault();

        const currencySymbol = currencies[formData.currency].symbol;
        let fiscalSavings = 0;
        let processSavings = 0;
        let timeSavings = 0;
        let totalSavings = 0;
        let roi = 0;
        let timeGained = 0;

        if (formData.profile === 'business') {
            const revenue = parseFloat(formData.revenue) || 0;
            const expenses = parseFloat(formData.expenses) || 0;
            const employees = parseInt(formData.employees) || 0;

            fiscalSavings = expenses * 0.15; // 15% optimization
            processSavings = expenses * 0.10; // 10% process optimization
            timeGained = employees * 6; // 6h/month per employee
            timeSavings = timeGained * (revenue / 2000 > 50 ? revenue / 2000 : 50); // Valorization

            totalSavings = fiscalSavings + processSavings + timeSavings;
            roi = (totalSavings / (revenue * 0.05 + 1)) * 100; // Based on 5% investment of revenue
        } else {
            const income = parseFloat(formData.revenue) || 0;
            const savings = parseFloat(formData.expenses) || 0;
            const currentWealth = parseFloat(formData.employees) || 0;

            fiscalSavings = income * 0.20; // 20% tax optimization
            processSavings = currentWealth * 0.08; // 8% gain
            timeGained = 12; // 12h/month saved
            timeSavings = timeGained * (income / 160 > 25 ? income / 160 : 25); // Hourly rate

            totalSavings = fiscalSavings + processSavings + timeSavings;
            roi = (totalSavings / (income * 0.10 + 1)) * 100; // Based on 10% investment
        }

        setResult({
            fiscalSavings: Math.round(fiscalSavings),
            processSavings: Math.round(processSavings),
            timeSavings: Math.round(timeSavings),
            totalSavings: Math.round(totalSavings),
            roi: Math.round(roi),
            timeGained: Math.round(timeGained),
            currency: currencySymbol
        });
    };

    const resetCalculator = () => {
        setFormData({
            profile: 'business',
            currency: 'XAF',
            revenue: '',
            expenses: '',
            employees: '',
            type: 'pme'
        });
        setResult(null);
    };

    return (
        <section className="roi-calculator-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="roi-header"
                >
                    <span className="roi-badge">Estimateur de Valeur</span>
                    <h2 className="section-title">Anticipez vos <span className="text-gradient">Gains Annuels</span></h2>
                    <p className="section-subtitle">
                        Découvrez comment Amat Consulting optimise vos finances, que vous soyez un particulier ou une entreprise.
                    </p>
                </motion.div>

                <div className="roi-calculator-wrapper">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="roi-form-container glass-card"
                    >
                        <div className="form-type-selector">
                            <button
                                type="button"
                                className={`type-btn ${formData.profile === 'business' ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, profile: 'business' })}
                            >
                                <Users size={18} /> Business
                            </button>
                            <button
                                type="button"
                                className={`type-btn ${formData.profile === 'individual' ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, profile: 'individual' })}
                            >
                                <Landmark size={18} /> Particulier
                            </button>
                        </div>

                        <form onSubmit={calculateROI} className="roi-form-modern">
                            <div className="form-group">
                                <label>Devise d'affichage</label>
                                <select name="currency" value={formData.currency} onChange={handleChange} className="modern-select">
                                    {Object.entries(currencies).map(([code, { label, symbol }]) => (
                                        <option key={code} value={code}>{symbol} - {label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>
                                    {formData.profile === 'business' ? "Chiffre d'Affaires Annuel" : "Revenu Brut Annuel"}
                                </label>
                                <div className="input-group-modern">
                                    <input
                                        type="number"
                                        name="revenue"
                                        value={formData.revenue}
                                        onChange={handleChange}
                                        placeholder="0"
                                        required
                                    />
                                    <span className="unit-label">{currencies[formData.currency].symbol}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>
                                    {formData.profile === 'business' ? "Charges d'Exploitation" : "Capacité d'Épargne Annuelle"}
                                </label>
                                <div className="input-group-modern">
                                    <input
                                        type="number"
                                        name="expenses"
                                        value={formData.expenses}
                                        onChange={handleChange}
                                        placeholder="0"
                                        required
                                    />
                                    <span className="unit-label">{currencies[formData.currency].symbol}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>
                                    {formData.profile === 'business' ? "Nombre de Collaborateurs" : "Patrimoine Financier"}
                                </label>
                                <div className="input-group-modern">
                                    <input
                                        type="number"
                                        name="employees"
                                        value={formData.employees}
                                        onChange={handleChange}
                                        placeholder="0"
                                        required
                                    />
                                    <span className="unit-label">
                                        {formData.profile === 'business' ? <Users size={16} /> : currencies[formData.currency].symbol}
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="roi-submit-btn">
                                Lancer le Calcul <BarChart3 size={20} />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="roi-results-panel"
                    >
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div
                                    key="results"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="results-active"
                                >
                                    <div className="roi-score-box">
                                        <div className="roi-main-val">
                                            <h4>{result.roi}%</h4>
                                            <p>ROI Estimé</p>
                                        </div>
                                        <div className="roi-total-val">
                                            <h3>{result.totalSavings.toLocaleString()} {result.currency}</h3>
                                            <p>Économies annuelles potentielles</p>
                                        </div>
                                    </div>

                                    <div className="results-breakdown">
                                        <div className="breakdown-card">
                                            <div className="icon-wrap bg-gold"><Landmark size={18} /></div>
                                            <div className="bw-info">
                                                <span>Optimisation Fiscale</span>
                                                <strong>{result.fiscalSavings.toLocaleString()} {result.currency}</strong>
                                            </div>
                                        </div>
                                        <div className="breakdown-card">
                                            <div className="icon-wrap bg-green"><TrendingUp size={18} /></div>
                                            <div className="bw-info">
                                                <span>Efficacité Gestion</span>
                                                <strong>{result.processSavings.toLocaleString()} {result.currency}</strong>
                                            </div>
                                        </div>
                                        <div className="breakdown-card">
                                            <div className="icon-wrap bg-blue"><Clock size={18} /></div>
                                            <div className="bw-info">
                                                <span>Temps Récupéré</span>
                                                <strong>{result.timeGained}h / mois</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="results-footer">
                                        <button onClick={resetCalculator} className="btn-secondary-outline">Recalculer</button>
                                        <Link to="/contact" className="btn btn-primary">Réserver un Audit</Link>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="results-empty">
                                    <div className="empty-state-icon">
                                        <Wallet size={48} />
                                    </div>
                                    <h3>Analyse en attente</h3>
                                    <p>Complétez les informations à gauche pour projeter vos économies avec Amat Consulting.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
