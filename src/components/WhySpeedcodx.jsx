import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, Users, Award } from 'lucide-react';

const WhySpeedcodx = () => {
    const benefits = [
        {
            icon: <Target className="text-yellow-400" size={32} />,
            title: "Minecraft Specialist",
            desc: "Exclusively focused on Minecraft server websites. Deep understanding of server communities, player behavior, and conversion optimization."
        },
        {
            icon: <TrendingUp className="text-yellow-400" size={32} />,
            title: "Conversion-Focused",
            desc: "Every design decision prioritizes player conversion. From landing pages to store interfaces, built to turn visitors into active players."
        },
        {
            icon: <Shield className="text-yellow-400" size={32} />,
            title: "Professional Branding",
            desc: "Your server's first impression matters. Premium branding that builds trust and positions your network as a serious, professional operation."
        },
        {
            icon: <Zap className="text-yellow-400" size={32} />,
            title: "Mobile Optimization",
            desc: "100% responsive design. Your players shop and check stats on mobile - your website must be lightning-fast and intuitive on all devices."
        },
        {
            icon: <Users className="text-yellow-400" size={32} />,
            title: "Modern UI Practices",
            desc: "Cutting-edge design trends, smooth animations, and user experience best practices that keep your website ahead of the competition."
        },
        {
            icon: <Award className="text-yellow-400" size={32} />,
            title: "Proven Results",
            desc: "50+ successful network launches with 99% success rate. Real results from real Minecraft servers that saw increased player engagement."
        }
    ];

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-50/5 to-background" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold tracking-widest uppercase text-xs mb-6"
                    >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                        Why Speedcodx
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
                    >
                        Why Server Owners <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Choose Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
                    >
                        Specialization in Minecraft server websites, focus on player conversion, professional branding, mobile optimization, and modern UI practices that deliver real results.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative glass p-6 rounded-2xl border-2 border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 overflow-hidden bg-gradient-to-br from-surface-100/50 to-surface-50/30 shadow-xl shadow-black/50"
                        >
                            {/* Background gradient */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent transition-opacity duration-500"
                            />
                            
                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:border-yellow-500/50 transition-all shadow-lg shadow-yellow-500/20"
                                >
                                    {benefit.icon}
                                </motion.div>
                                <h3 className="font-heading text-xl font-black mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors">
                                    {benefit.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySpeedcodx;
