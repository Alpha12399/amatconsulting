import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "237656065176";
    const message = "Bonjour Amat Consulting, je souhaite obtenir plus d'informations sur vos services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-btn"
            aria-label="Contacter sur WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="whatsapp-pulse"></div>
            <MessageCircle size={32} strokeWidth={2.5} />
            <span className="whatsapp-tooltip">Discuter avec nous</span>
        </motion.a>
    );
};

export default WhatsAppButton;

