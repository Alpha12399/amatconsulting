import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar, BarChart, Bar } from 'recharts';
import { motion } from 'framer-motion';

const dataGrowth = [
    { year: '2020', sans: 30, avec: 30 },
    { year: '2021', sans: 35, avec: 55 },
    { year: '2022', sans: 40, avec: 85 },
    { year: '2023', sans: 45, avec: 120 },
    { year: '2024', sans: 50, avec: 180 },
];

const dataClients = [
    { name: 'Start-ups', value: 45, fill: '#2A9D8F' },
    { name: 'PME', value: 120, fill: '#264653' },
    { name: 'Grands Comptes', value: 35, fill: '#F97316' },
];

const PerformanceCharts = () => {
    return (
        <section className="section bg-light py-20 overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title text-primary">L'Impact Amat Consulting</h2>
                    <p className="section-subtitle">Visualisez comment nous accélérons la croissance de nos partenaires.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Chart 1: Evolution Curve */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary">Accélération du Chiffre d'Affaires</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataGrowth}>
                                    <defs>
                                        <linearGradient id="colorAvec" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#F97316" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                                    <YAxis hide />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="avec"
                                        stroke="#F97316"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorAvec)"
                                        name="Avec Amat"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="sans"
                                        stroke="#9CA3AF"
                                        strokeDasharray="5 5"
                                        fill="transparent"
                                        name="Sans Accompagnement"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-sm text-gray-500 mt-4 text-center italic">
                            *Comparaison moyenne observée sur 5 ans.
                        </p>
                    </motion.div>

                    {/* Chart 2: Client Portfolio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h3 className="text-xl font-bold mb-6 text-primary">Répartition de nos Partenaires</h3>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <div className="h-[300px] w-full md:w-1/2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={dataClients}
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {dataClients.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.fill} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="md:w-1/2 space-y-4">
                                {dataClients.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                                            <span className="font-medium text-gray-700">{item.name}</span>
                                        </div>
                                        <span className="font-bold text-primary">{item.value}+</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* KPI Charts Overlay - Fully Animated Diagrams */}
                <h3 className="text-2xl font-bold text-center mb-10 text-primary">Performance en Temps Réel</h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* KPI 1 : Performance Radial (+40%) */}
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary flex flex-col items-center relative overflow-hidden">
                        <div className="h-[150px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    barSize={15}
                                    data={[{ name: 'Perf', value: 40, fill: '#F97316' }]}
                                    startAngle={180}
                                    endAngle={0}
                                >
                                    <RadialBar background={{ fill: '#eee' }} clockWise dataKey="value" cornerRadius={10} />
                                </RadialBarChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 text-center">
                                <span className="text-3xl font-bold text-gray-800">+40%</span>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-gray-500 mt-[-20px] uppercase tracking-wider">Performance</span>
                    </motion.div>

                    {/* KPI 2 : Satisfaction Radial (98%) */}
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary-light flex flex-col items-center relative overflow-hidden">
                        <div className="h-[150px] w-full relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart
                                    innerRadius="70%"
                                    outerRadius="100%"
                                    barSize={15}
                                    data={[{ name: 'Sat', value: 98, fill: '#2A9D8F' }]}
                                    startAngle={180}
                                    endAngle={0}
                                >
                                    <RadialBar background={{ fill: '#eee' }} clockWise dataKey="value" cornerRadius={10} />
                                </RadialBarChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4 text-center">
                                <span className="text-3xl font-bold text-gray-800">98%</span>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-gray-500 mt-[-20px] uppercase tracking-wider">Clients Satisfaits</span>
                    </motion.div>

                    {/* KPI 3 : Dossiers Bar (1200+) */}
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-primary flex flex-col items-center justify-center">
                        <div className="h-[100px] w-full mb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={[{ name: 'Dossiers', val: 120 }]}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                    <Bar dataKey="val" fill="#264653" radius={[4, 4, 0, 0]} barSize={40} />
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="text-3xl font-bold text-primary mb-1">1200+</div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Dossiers Traités</span>
                    </motion.div>

                    {/* KPI 4 : Economies Area (150M) */}
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500 flex flex-col items-center justify-center">
                        <div className="h-[100px] w-full mb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={[
                                    { v: 10 }, { v: 40 }, { v: 30 }, { v: 70 }, { v: 100 }, { v: 150 }
                                ]}>
                                    <defs>
                                        <linearGradient id="colorEco" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#E9C46A" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#E9C46A" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="v" stroke="#E9C46A" fill="url(#colorEco)" strokeWidth={3} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="text-3xl font-bold text-yellow-600 mb-1">150M</div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Économies (FCFA)</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceCharts;
