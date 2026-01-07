import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Download, FileText, CheckCircle2, ShieldCheck, Mail, Phone, Globe, Landmark } from 'lucide-react';
import './TaxGuideGenerator.css';
import logo from '../assets/logo.jpg';


const TaxGuideGenerator = () => {
    const guideRef = useRef(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const downloadPDF = async () => {
        setIsGenerating(true);
        const element = guideRef.current;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pages = element.querySelectorAll('.guide-page');

        for (let i = 0; i < pages.length; i++) {
            const canvas = await html2canvas(pages[i], {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        }

        pdf.save('Guide_Fiscale_Amat_Consulting_2025.pdf');
        setIsGenerating(false);
    };

    return (
        <section className="guide-download-section">
            <div className="container">
                <div className="guide-cta-card glass-effect">
                    <div className="cta-info">
                        <FileText size={48} className="text-secondary mb-4" />
                        <h2>Guide Gratuit : "L'Optimisation Fiscale en Afrique"</h2>
                        <p>Téléchargez notre guide de référence 2025 pour structurer votre croissance et sécuriser votre patrimoine.</p>
                        <ul className="cta-features">
                            <li><CheckCircle2 size={18} /> Comparatif détaillé des régimes (Cameroun/CEMAC)</li>
                            <li><CheckCircle2 size={18} /> 5 leviers d'optimisation légale et stratégique</li>
                            <li><CheckCircle2 size={18} /> Checklist de conformité OHADA et digitalisation</li>
                        </ul>
                        <button
                            onClick={downloadPDF}
                            className="btn-download-guide"
                            disabled={isGenerating}
                        >
                            {isGenerating ? 'Génération du PDF...' : 'Télécharger le Guide Mastery (PDF)'}
                            <Download size={20} />
                        </button>
                    </div>
                    <div className="guide-preview-visual">
                        <div className="preview-stack">
                            <div className="preview-page p1"></div>
                            <div className="preview-page p2"></div>
                            <div className="preview-page p3"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden Guide Content (used for PDF generation) */}
            <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
                <div ref={guideRef} className="pdf-source">

                    {/* PAGE 1: COVER */}
                    <div className="guide-page page-1 cover">
                        <div className="cover-brand-top">
                            <img src={logo} alt="Amat Consulting" className="pdf-logo" />
                            <div className="brand-text">
                                <h2 className="brand-name">AMAT CONSULTING</h2>
                                <p className="brand-tagline">Expertise • Croissance • Sérénité</p>
                            </div>
                        </div>
                        <div className="cover-main">
                            <span className="edition-badge">ÉDITION MASTERY 2025</span>
                            <h1>GUIDE STRATÉGIQUE DE L'OPTIMISATION FISCALE</h1>
                            <div className="cover-line"></div>
                            <p className="cover-subtitle">Le manuel complet pour réduire vos charges, sécuriser vos actifs et propulser votre croissance dans l'espace OHADA.</p>
                        </div>
                        <div className="cover-features">
                            <div className="feat-item">Ingénierie Fiscale</div>
                            <div className="feat-item">Gestion de Patrimoine</div>
                            <div className="feat-item">Audit & Conformité</div>
                        </div>
                        <div className="page-footer">www.amatconsulting.com | Le partenaire de votre réussite</div>
                    </div>

                    {/* PAGE 2: INTRODUCTION & VISION */}
                    <div className="guide-page page-content">
                        <div className="page-header">
                            <span>PAGE 02 // VISION STRATÉGIQUE</span>
                        </div>
                        <h2>Le Nouveau Paradigme Fiscal en Afrique</h2>
                        <p className="intro-text">
                            En 2025, la fiscalité n'est plus une simple obligation légale ou une contrainte administrative. Elle s'est métamorphosée en un véritable levier de compétitivité commerciale et financière.
                            Dans un environnement OHADA en constante mutation technologique et législative, l'agilité fiscale devient l'atout majeur des gérants visionnaires.
                        </p>
                        <div className="content-grid">
                            <div className="info-block">
                                <h3>La Philosophie Amat</h3>
                                <p>Chez Amat Consulting, nous croyons qu'une entreprise pérenne est une entreprise qui anticipe. Nous transformons les contraintes réglementaires en opportunités de développement de trésorerie.</p>
                                <p>Ce guide n'est pas un texte de loi, c'est une boussole stratégique pour naviguer dans la complexité.</p>
                            </div>
                            <div className="info-block highlight">
                                <h3>Pourquoi ce Guide ?</h3>
                                <p>Nous avons synthétisé des milliers d'heures de conseil pour vous offrir un condensé actionnable. Vous y trouverez les clés pour :</p>
                                <ul className="content-bullet-list">
                                    <li>Maîtriser vos flux de trésorerie</li>
                                    <li>Éviter les erreurs de déclaration coûteuses</li>
                                    <li>Structurer légalement votre rentabilité</li>
                                </ul>
                            </div>
                        </div>
                        <div className="visual-diagram-container">
                            <div className="visual-diagram">
                                <div className="dia-box">Conformité</div>
                                <div className="dia-arrow">→</div>
                                <div className="dia-box gold">Optimisation</div>
                                <div className="dia-arrow">→</div>
                                <div className="dia-box">Croissance</div>
                            </div>
                            <p className="diagram-caption">Le cycle de création de valeur par la maîtrise fiscale.</p>
                        </div>
                    </div>

                    {/* PAGE 3: RÉGIMES FISCAUX EN DÉTAIL */}
                    <div className="guide-page page-content">
                        <div className="page-header">
                            <span>PAGE 03 // ANALYSE DES RÉGIMES</span>
                        </div>
                        <h2>Tableau Comparatif des Régimes (Cameroun/CEMAC)</h2>
                        <p className="section-intro">Le choix de votre régime détermine non seulement votre taux d'imposition, mais aussi votre capacité à lever des fonds et à commercer avec des grands groupes.</p>
                        <div className="comparison-table">
                            <div className="table-row head">
                                <div className="col">Régime</div>
                                <div className="col">Cible & Chiffre d'Affaires</div>
                                <div className="col">Implications Stratégiques</div>
                            </div>
                            <div className="table-row">
                                <div className="col"><strong>Libératoire</strong></div>
                                <div className="col">&lt; 10M FCFA / an</div>
                                <div className="col">Simplicité maximale. Idéal pour les activités individuelles d'auto-subsistance. Pas de récupération de TVA.</div>
                            </div>
                            <div className="table-row highlighted">
                                <div className="col"><strong>Simplifié</strong></div>
                                <div className="col">10M - 50M FCFA / an</div>
                                <div className="col">Comptabilité selon le système SMT. Offre des opportunités de déduction réelles mais reste limité pour les investissements lourds.</div>
                            </div>
                            <div className="table-row">
                                <div className="col"><strong>Réel</strong></div>
                                <div className="col">&gt; 50M FCFA / an</div>
                                <div className="col">Le régime "Pro". Déduction intégrale des charges, récupération de la TVA, accès total aux marchés publics et financements bancaires.</div>
                            </div>
                        </div>
                        <div className="expert-tip">
                            <ShieldCheck size={28} />
                            <div>
                                <strong>L'avis Stratégique :</strong> Le passage au Réel est souvent perçu comme un risque. Pourtant, dès que vos marges brutes sont impactées par des achats taxés à la TVA ou des investissements amortissables, c'est le seul régime qui protège votre rentabilité réelle.
                            </div>
                        </div>
                    </div>

                    {/* PAGE 4: LES 5 LEVIERS D'EXCEPTION */}
                    <div className="guide-page page-content">
                        <div className="page-header">
                            <span>PAGE 04 // INGIÉNIERIE FISCALE</span>
                        </div>
                        <h2>Maximiser votre Trésorerie légalement</h2>
                        <div className="levier-list">
                            <div className="levier-item">
                                <h4>01. Optimisation des Amortissements</h4>
                                <p>Ne vous contentez pas d'amortir vos actifs sur 5 ans. Utilisez les amortissements dégressifs ou accélérés pour réduire massivement votre bénéfice imposable dès les premières années d'investissement.</p>
                            </div>
                            <div className="levier-item">
                                <h4>02. Ingénierie de la Masse Salariale</h4>
                                <p>Saviez-vous que certaines primes (transport, logement, panier) sont exonérées d'impôts et de charges sociales sous conditions ? Une structure de paie optimisée peut réduire vos coûts de 15% sans réduire le net à payer.</p>
                            </div>
                            <div className="levier-item">
                                <h4>03. Maîtrise de la TVA et Crédit d'Impôt</h4>
                                <p>La TVA n'est pas une charge. C'est un flux de trésorerie qui doit être neutre. Nous vous montrons comment mettre en place une procédure de suivi stricte pour récupérer 100% de la TVA sur vos intrants.</p>
                            </div>
                            <div className="levier-item">
                                <h4>04. Provisionnement pour Risques & Charges</h4>
                                <p>Le code général des impôts permet de provisionner des charges futures (litiges, créances douteuses). C'est un outil puissant pour lisser votre résultat et protéger votre cash-flow contre les impondérables.</p>
                            </div>
                            <div className="levier-item">
                                <h4>05. Avantages liés à l'Investissement (Loi 2013)</h4>
                                <p>Profitez des mesures d'incitation à l'investissement privé au Cameroun. Exonérations de droits de douane, de patente et d'IS pendant les phases d'installation et de production.</p>
                            </div>
                        </div>
                    </div>

                    {/* PAGE 5: DIGITALISATION & SÉCURITÉ */}
                    <div className="guide-page page-content">
                        <div className="page-header">
                            <span>PAGE 05 // LA RÉVOLUTION DIGITALE</span>
                        </div>
                        <h2>L'Entreprise du Futur est Digitale</h2>
                        <div className="digital-content">
                            <p>L'administration fiscale se modernise rapidement. Le contrôle fiscal de demain se fera par algorithme. Votre comptabilité doit non seulement être exacte, mais surtout être disponible en temps réel.</p>
                            <div className="modern-features-grid">
                                <div className="modern-feat">
                                    <h4 className="text-secondary">E-Déclarations & Suivi</h4>
                                    <p>Évitez les retards et les pénalités grâce à l'automatisation des flux déclaratifs via les portails officiels de la DGI.</p>
                                </div>
                                <div className="modern-feat">
                                    <h4 className="text-secondary">Cloud Accounting</h4>
                                    <p>Accès 24/7 à vos tableaux de bord financiers. Prenez des décisions basées sur des faits, pas sur des suppositions.</p>
                                </div>
                                <div className="modern-feat">
                                    <h4 className="text-secondary">Sécurité des Données</h4>
                                    <p>Le stockage sécurisé et l'archivage légal numérique sont vos meilleures protections lors d'un contrôle inopiné.</p>
                                </div>
                            </div>
                        </div>
                        <div className="detailed-info-box">
                            <h3>Le Conseil Amat :</h3>
                            <p>Ne voyez pas l'investissement dans un logiciel comptable performant comme un coût, mais comme une police d'assurance contre les erreurs humaines qui coûtent des millions en redressements.</p>
                        </div>
                        <div className="quote-box">
                            "La donnée est le nouvel or gris de l'entreprise. Bien gérée, elle devient un bouclier fiscal impénétrable face aux administrations."
                        </div>
                    </div>

                    {/* PAGE 6: PLAN D'ACTION & CONTACT */}
                    <div className="guide-page page-6 contact-page">
                        <div className="page-header white">
                            <span>PAGE 06 // PLAN D'ACTION</span>
                        </div>
                        <div className="final-checklist">
                            <h2>Vos 3 Étapes Prioritaires pour 2025</h2>
                            <div className="check-step">
                                <div className="step-num">1</div>
                                <div><strong>Audit de Santé Fiscale :</strong> Faites analyser vos 3 dernières DSF pour identifier les trop-perçus et les risques latents.</div>
                            </div>
                            <div className="check-step">
                                <div className="step-num">2</div>
                                <div><strong>Simulation de Structure :</strong> Votre forme juridique (SARL, SA, SAS) est-elle toujours adaptée à votre volume d'activité ?</div>
                            </div>
                            <div className="check-step">
                                <div className="step-num">3</div>
                                <div><strong>Mise en place d'une Veille :</strong> Soyez informés en priorité des changements de la Loi de Finances.</div>
                            </div>
                        </div>

                        <div className="final-contact-card">
                            <img src={logo} alt="Amat Consulting Logo" className="pdf-logo-final" />
                            <h3>Amat Consulting</h3>
                            <p>Expertise comptable & Conseil stratégique</p>
                            <div className="contact-methods-pdf">
                                <div className="c-item"><Mail size={16} /> consultingamat@gmail.com</div>
                                <div className="c-item"><Phone size={16} /> +237 656 065 176</div>
                                <div className="c-item"><Globe size={16} /> www.amatconsulting.com</div>
                            </div>
                            <div className="footer-message">
                                <Landmark size={30} className="mb-2" />
                                <p>Nous sommes à vos côtés pour transformer vos ambitions en réalités financières pérennes.</p>
                            </div>
                        </div>
                        <div className="back-cover-footer">
                            <p>© 2025 Amat Consulting. Tous droits réservés. Ce guide est fourni à titre informatif et ne remplace pas une consultation personnalisée.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TaxGuideGenerator;

