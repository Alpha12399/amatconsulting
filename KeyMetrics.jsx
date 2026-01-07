import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './KeyMetrics.css';

const KeyMetrics = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const metrics = [
        {
            id: 1,
            value: 150,
            suffix: '+',
            label: 'Projets Accompagnés',
            color: '#264653'
        },
        {
            id: 2,
            value: 25,
            suffix: 'M€',
            label: 'Financements Sécurisés',
            color: '#2A9D8F'
        },
        {
            id: 3,
            value: 98,
            suffix: '%',
            label: 'Satisfaction Client',
            color: '#F97316'
        },
        {
            id: 4,
            value: 15,
            suffix: ' Ans',
            label: "d'Expertise",
            color: '#264653'
        }
    ];

    return (
        <section className="key-metrics-section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="metrics-header"
                >
                    <h2 className="section-title">Notre Impact en Chiffres</h2>
                    <p className="section-subtitle">
                        Des résultats concrets qui témoignent de notre engagement envers l'excellence
                    </p>
                </motion.div>

                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <MetricCard
                            key={metric.id}
                            metric={metric}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const MetricCard = ({ metric, index, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = metric.value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= metric.value) {
                setCount(metric.value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, metric.value]);

    return (
        <motion.div
            className="metric-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className="metric-value" style={{ color: metric.color }}>
                {count}{metric.suffix}
            </div>
            <div className="metric-label">{metric.label}</div>
            <div className="metric-bar" style={{ backgroundColor: metric.color }}></div>
        </motion.div>
    );
};

export default KeyMetrics;
