import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="dark-mode-toggle"
            aria-label={`Passer en mode ${theme === 'light' ? 'sombre' : 'clair'}`}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
        </button>
    );
};

export default DarkModeToggle;
