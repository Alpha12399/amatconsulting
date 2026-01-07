import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SocialProof.css';

const notifications = [
    {
        name: "Jean M.",
        action: "vient de demander un audit gratuit",
        time: "Il y a 5 minutes"
    },
    {
        name: "Marie K.",
        action: "a souscrit à nos services de gestion",
        time: "Il y a 12 minutes"
    },
    {
        name: "Alain N.",
        action: "a téléchargé notre guide fiscal",
        time: "Il y a 18 minutes"
    },
    {
        name: "Sophie D.",
        action: "vient de nous contacter",
        time: "Il y a 23 minutes"
    },
    {
        name: "Thomas B.",
        action: "a demandé un devis personnalisé",
        time: "Il y a 31 minutes"
    },
    {
        name: "Isabelle F.",
        action: "vient de s'inscrire à notre newsletter",
        time: "Il y a 37 minutes"
    }
];

const SocialProof = () => {
    const [currentNotification, setCurrentNotification] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const getRandomNotification = () => {
            const randomIndex = Math.floor(Math.random() * notifications.length);
            return notifications[randomIndex];
        };

        const showNotification = () => {
            if (!isPaused) {
                setCurrentNotification(getRandomNotification());
                setIsVisible(true);

                // Hide after 5 seconds
                setTimeout(() => {
                    setIsVisible(false);
                }, 5000);
            }
        };

        // Show first notification after 8 seconds
        const initialTimeout = setTimeout(showNotification, 8000);

        // Show subsequent notifications every 15 seconds
        const interval = setInterval(() => {
            if (!isVisible && !isPaused) {
                showNotification();
            }
        }, 15000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [isVisible, isPaused]);

    return (
        <AnimatePresence>
            {isVisible && currentNotification && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, x: 50 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="social-proof-notification"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="notification-content">
                        <div className="notification-header">
                            <div className="notification-avatar">
                                {currentNotification.name.charAt(0)}
                            </div>
                            <div className="notification-text">
                                <p className="notification-name">{currentNotification.name}</p>
                                <p className="notification-action">{currentNotification.action}</p>
                            </div>
                        </div>
                        <p className="notification-time">{currentNotification.time}</p>
                    </div>
                    <button
                        className="notification-close"
                        onClick={() => setIsVisible(false)}
                        aria-label="Fermer"
                    >
                        ×
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SocialProof;
