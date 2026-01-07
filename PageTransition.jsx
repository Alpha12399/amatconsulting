import React from 'react';
import { motion } from 'framer-motion';

const variations = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -20 },
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            variants={variations}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 0.4 }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
