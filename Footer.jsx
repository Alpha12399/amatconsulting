import React from 'react';
import logo from '../assets/logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container grid footer-grid">
                <div className="footer-col">
                    <img src={logo} alt="Amat Consulting Logo" className="footer-logo" />
                    <p className="footer-domain">amatconsulting.com</p>
                    <p>Votre partenaire pour une gestion financière saine et prospère.</p>
                </div>
                <div className="footer-col">
                    <h4>Liens Rapides</h4>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/about">À Propos</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>Yaoundé – Cameroun, Elig-Essono</p>
                    <p>Tél: +237 656 065 176 / +237 673 572 527</p>
                    <p>Email: consultingamat@gmail.com</p>
                    <p className="text-sm opacity-70 mt-2">NUI: Po1824379889N</p>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; {new Date().getFullYear()} Amat Consulting. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
