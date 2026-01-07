import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './About.css';

const dataGrowth = [
    { year: '2020', value: 30 },
    { year: '2021', value: 45 },
    { year: '2022', value: 75 },
    { year: '2023', value: 120 },
    { year: '2024', value: 200 },
    { year: '2025', value: 320 },
];

const dataClients = [
    { name: 'PME', value: 150 },
    { name: 'Grands Groupes', value: 40 },
    { name: 'Startups', value: 80 },
];

const dataServices = [
    { name: 'Gestion', value: 35 },
    { name: 'Fiscalité', value: 25 },
    { name: 'Audit', value: 20 },
    { name: 'Social', value: 20 },
];

const dataSatisfaction = [
    { name: 'Recommandation', value: 95 },
    { name: 'Fidélisation', value: 98 },
];

const COLORS = ['#264653', '#2A9D8F', '#F97316', '#E9C46A'];

const About = () => {
    // Refs for each chart section
    const lineChartRef = useRef(null);
    const pieChartRef = useRef(null);
    const barChartRef = useRef(null);
    const donutChartRef = useRef(null);

    // InView hooks for each chart
    const lineChartInView = useInView(lineChartRef, { once: true, margin: "-100px" });
    const pieChartInView = useInView(pieChartRef, { once: true, margin: "-100px" });
    const barChartInView = useInView(barChartRef, { once: true, margin: "-100px" });
    const donutChartInView = useInView(donutChartRef, { once: true, margin: "-100px" });

    return (
        <div className="about-page">
            <section className="about-header-modern">
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="modern-badge">Expertise & Innovation</span>
                        <h1 className="modern-title">
                            L'Expert-Comptable <br />
                            <span className="text-gradient">Augmenté</span>
                        </h1>
                    </motion.div>
                </div>
                <div className="header-overlay-modern"></div>
            </section>

            {/* Section 1: Growth Chart (Line) */}
            <section className="section story-modern">
                <div className="container grid split-grid items-center">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Une trajectoire ascendante</h2>
                        <p>
                            Chez Amat Consulting, nous ne nous contentons pas de suivre l'évolution, nous la créons.
                            Notre méthodologie unique a permis à nos partenaires de doubler leur croissance en moyenne tous les 2 ans.
                        </p>
                        <div className="highlight-box">
                            <strong>+200%</strong> de croissance moyenne pour nos clients accompagnés sur 4 ans.
                        </div>
                    </motion.div>

                    <motion.div
                        ref={lineChartRef}
                        className="chart-container-modern"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="chart-label">Croissance Partenaires</h4>
                        <div style={{ width: '100%', height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={dataGrowth}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        name="Croissance (%)"
                                        stroke="#F97316"
                                        strokeWidth={3}
                                        dot={{ r: 4, fill: '#F97316' }}
                                        activeDot={{ r: 6 }}
                                        isAnimationActive={lineChartInView}
                                        animationDuration={1500}
                                        animationBegin={0}
                                    />
                                    <Legend verticalAlign="bottom" height={36} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Ecosystem (Pie Chart) */}
            <section className="section story-modern bg-light">
                <div className="container grid split-grid items-center reversed-grid">
                    <motion.div
                        ref={pieChartRef}
                        className="chart-container-modern"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="chart-label">Répartition de l'Expertise</h4>
                        <div style={{ width: '100%', height: '350px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataServices}
                                        cx="50%"
                                        cy="45%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={pieChartInView}
                                        animationDuration={1500}
                                        animationBegin={200}
                                        animationEasing="ease-out"
                                    >
                                        {dataServices.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2>Une Approche 360°</h2>
                        <p>
                            Notre expertise ne se limite pas à la comptabilité. Nous intervenons sur l'ensemble des leviers de votre performance :
                            <strong> Gestion, Fiscalité, Audit et Social</strong>.
                        </p>
                        <p className="mt-4 text-primary font-medium">
                            Une vision globale pour des décisions précises.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Client Type (Bar Chart) */}
            <section className="section story-modern">
                <div className="container grid split-grid items-center">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Un écosystème diversifié</h2>
                        <p>
                            De la start-up technologique à la grande industrie, nous adaptons nos outils d'analyse.
                            Cette diversité nous donne une vision macro-économique unique.
                        </p>
                    </motion.div>

                    <motion.div
                        ref={barChartRef}
                        className="chart-container-modern"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="chart-label">Typologie Clients</h4>
                        <div style={{ width: '100%', height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={dataClients} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#4b5563', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                                    <Bar
                                        dataKey="value"
                                        name="Nombre d'entreprises"
                                        fill="#264653"
                                        radius={[0, 4, 4, 0]}
                                        barSize={20}
                                        isAnimationActive={barChartInView}
                                        animationDuration={1000}
                                        animationBegin={0}
                                    />
                                    <Legend iconType="rect" align="right" verticalAlign="top" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Satisfaction (Donut Chart) */}
            <section className="section story-modern bg-light">
                <div className="container grid split-grid items-center reversed-grid">
                    <motion.div
                        ref={donutChartRef}
                        className="chart-container-modern"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="chart-label">Excellence Client</h4>
                        <div style={{ width: '100%', height: '350px' }} className="flex items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataSatisfaction}
                                        cx="50%"
                                        cy="45%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        startAngle={180}
                                        endAngle={0}
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={donutChartInView}
                                        animationDuration={2000}
                                        animationBegin={200}
                                        animationEasing="ease-out"
                                    >
                                        <Cell key="cell-0" fill="#2A9D8F" name="Recommandation" />
                                        <Cell key="cell-1" fill="#F97316" name="Fidélisation" />
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" layout="horizontal" align="center" wrapperStyle={{ paddingTop: '20px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute text-center" style={{ bottom: '45%' }}>
                                <span className="text-4xl font-bold text-primary">98%</span>
                                <p className="text-sm text-gray-500">Fidélisation</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2>La Confiance comme Moteur</h2>
                        <p>
                            Notre plus grande fierté n'est pas seulement technique, elle est humaine.
                            Le taux de fidélisation exceptionnel de nos clients témoigne de la qualité de notre relation.
                        </p>
                        <div className="highlight-box">
                            <strong>98%</strong> de nos clients renouvellent leur confiance chaque année.
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
