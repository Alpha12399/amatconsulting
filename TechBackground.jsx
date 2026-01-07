import React from 'react';
import { motion } from 'framer-motion';

const TechBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-[#0a0f1c] perspective-1000">
            {/* 3D Grid Floor */}
            <div
                className="absolute inset-0 opacity-30 origin-bottom transform rotate-x-60"
                style={{
                    backgroundImage: 'linear-gradient(#2A9D8F 1px, transparent 1px), linear-gradient(90deg, #2A9D8F 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
                }}
            ></div>

            {/* Circuit Board SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow-teal">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glow-orange">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central Data Stream Lines */}
                <motion.path
                    d="M0 400 H 400 L 500 300 H 900 L 1000 400 H 1600"
                    fill="none"
                    stroke="#2A9D8F"
                    strokeWidth="3"
                    filter="url(#glow-teal)"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: [0, 1, 0], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Secondary Stream */}
                <motion.path
                    d="M1600 500 H 1100 L 1000 600 H 600 L 500 500 H 0"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="3"
                    filter="url(#glow-orange)"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: [0, 1, 0], opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Vertical Nodes */}
                {[100, 300, 800, 1100, 1400].map((x, i) => (
                    <motion.line
                        key={i}
                        x1={x} y1="0" x2={x} y2="1000"
                        stroke="#264653"
                        strokeWidth="1"
                        strokeDasharray="5 5"
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                    />
                ))}

                {/* Flying Data Packets */}
                <motion.circle cx="0" cy="400" r="4" fill="#fff" filter="url(#glow-teal)">
                    <motion.animateMotion
                        path="M0 400 H 400 L 500 300 H 900 L 1000 400 H 1600"
                        dur="3s"
                        repeatCount="indefinite"
                        rotate="auto"
                    />
                </motion.circle>

                <motion.circle cx="1600" cy="500" r="4" fill="#fff" filter="url(#glow-orange)">
                    <motion.animateMotion
                        path="M1600 500 H 1100 L 1000 600 H 600 L 500 500 H 0"
                        dur="4s"
                        repeatCount="indefinite"
                        rotate="auto"
                    />
                </motion.circle>

            </svg>

            {/* Vignette Overlay to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0F172A_90%)] z-10"></div>
        </div>
    );
};

export default TechBackground;
