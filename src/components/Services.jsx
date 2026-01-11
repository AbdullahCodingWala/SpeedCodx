import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Rocket, Command, Users } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Website Redesign for Existing Servers",
            price: "Transformation Package",
            desc: "Upgrade your outdated website to a modern, high-converting platform. Better first impressions, increased player joins, and professional server branding that stands out.",
            features: ["Modern UI Overhaul", "Performance Optimization", "Better Player Conversion", "Professional Branding"],
            icon: <Rocket className="text-yellow-400" />,
            tag: "Most Popular"
        },
        {
            title: "New Website from Scratch for SMPs & Networks",
            price: "Complete Package",
            desc: "Full custom website built from the ground up. Tailored to your server's identity, optimized for player conversion, and designed to make your network look professional.",
            features: ["Custom Design", "Full Responsiveness", "Store Integration", "Player-Focused Layout"],
            icon: <Check className="text-yellow-400" />,
            tag: "Best for New Hubs"
        },
        {
            title: "Custom Pages (Tier Lists, Staff Pages, Store UI, Stats)",
            price: "Modular Package",
            desc: "Specific pages for specific needs. Staff lists, leaderboards, tier lists, ban appeals, or custom store interfaces that enhance player experience.",
            features: ["Tier List Graphics", "Staff Page Design", "Stats Dashboards", "Custom Store UI"],
            icon: <Command className="text-yellow-400" />,
            tag: "Specific Needs"
        }
    ];

    return (
        <section id="services" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-50/5 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold tracking-widest uppercase text-xs mb-6"
                    >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                        Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
                    >
                        Premium <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Services that clearly communicate value to Minecraft server owners. Built to achieve better first impressions, more player joins, and professional server branding.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-32 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-500 mx-auto rounded-full mt-8 shadow-lg shadow-yellow-500/50"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative p-1 rounded-3xl group"
                        >
                            {/* Enhanced gradient border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 via-amber-600/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                            <div className="absolute inset-[1px] rounded-[22px] bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative glass h-full rounded-2xl p-6 md:p-8 flex flex-col items-start overflow-hidden bg-gradient-to-br from-surface-100/50 to-surface-50/30 border border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 shadow-xl shadow-black/50">
                                {/* Enhanced background glow */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

                                <div className="flex justify-between items-center w-full mb-8 relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:border-yellow-500/50 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 transition-all shadow-lg shadow-yellow-500/20"
                                    >
                                        {React.cloneElement(service.icon, { size: 36, className: "text-yellow-400" })}
                                    </motion.div>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className="text-[10px] uppercase font-black tracking-[0.2em] text-yellow-400 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 px-5 py-2 rounded-full border-2 border-yellow-500/30 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 group-hover:border-yellow-500/50 transition-all shadow-md"
                                    >
                                        {service.tag}
                                    </motion.span>
                                </div>

                                <h3 className="font-heading text-xl md:text-2xl font-black mb-2 relative z-10 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">{service.title}</h3>
                                <p className="text-yellow-400 font-bold font-heading text-sm mb-6 uppercase tracking-wider relative z-10 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 px-4 py-1.5 rounded-lg inline-block">{service.price}</p>
                                <p className="text-gray-300 mb-6 leading-relaxed relative z-10 text-sm md:text-base">{service.desc}</p>

                                <div className="space-y-4 mb-10 w-full relative z-10">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors cursor-default"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-600/30 border-2 border-yellow-500/40 flex items-center justify-center flex-shrink-0 group-hover:from-yellow-500/50 group-hover:to-amber-600/50 group-hover:border-yellow-500/60 shadow-md"
                                            >
                                                <Check size={14} className="text-yellow-300 font-bold" />
                                            </motion.div>
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Removed shine effect for performance */}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Footer benefit banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-20 p-6 md:p-8 glass rounded-2xl border-2 border-yellow-500/20 bg-gradient-to-br from-surface-100/50 to-surface-50/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl shadow-yellow-500/10"
                >
                    <div className="flex items-center gap-6">
                        <div className="p-5 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-2xl border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/20">
                            <ShieldCheck className="text-yellow-400" size={44} />
                        </div>
                        <div>
                            <h4 className="text-xl md:text-2xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Guaranteed Performance</h4>
                            <p className="text-gray-300 text-sm md:text-base">All websites are optimized for LCP, FID, and CLS to ensure 90+ Lighthouse scores.</p>
                        </div>
                    </div>
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map(i => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                className="w-14 h-14 rounded-full border-2 border-yellow-500/30 bg-gradient-to-br from-surface-200 to-surface-100 flex items-center justify-center text-xs font-black text-yellow-400 shadow-lg"
                            >
                                {i === 5 ? "+50" : <Users size={18} className="text-yellow-400" />}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
