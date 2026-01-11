import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Smartphone } from 'lucide-react';

const About = () => {
    const features = [
        {
            title: "Minecraft SMP & Network Website Design",
            desc: "Complete custom website solutions for SMPs and Networks. Professional branding, player-focused layouts, and seamless store integration that converts visitors into players.",
            icon: <Server className="text-yellow-400" size={40} />,
            gradient: "from-yellow-500/20 to-transparent",
            borderColor: "group-hover:border-yellow-500/50"
        },
        {
            title: "Website Redesign for Existing Servers",
            desc: "Transform outdated server websites into modern, high-converting platforms. Better first impressions, increased player joins, and professional server branding.",
            icon: <Zap className="text-amber-400" size={40} />,
            gradient: "from-amber-500/20 to-transparent",
            borderColor: "group-hover:border-amber-500/50"
        },
        {
            title: "Fast, Mobile-First & Conversion-Focused UI",
            desc: "Lightning-fast performance optimized for mobile devices. Your players shop and check stats on mobile - your website should be intuitive, fast, and conversion-driven.",
            icon: <Smartphone className="text-yellow-400" size={40} />,
            gradient: "from-yellow-600/20 to-transparent",
            borderColor: "group-hover:border-yellow-500/50"
        }
    ];

    return (
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-50/5 to-background" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold tracking-widest uppercase text-xs mb-6"
                    >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                        Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
                    >
                        What I <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Do</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
                    >
                        Specialized exclusively in Minecraft server websites. Professional branding, conversion-focused design, and modern UI that turns visitors into players.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className={`h-full glass p-6 md:p-8 rounded-2xl border-2 border-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-500 overflow-hidden relative bg-gradient-to-br from-surface-100/50 to-surface-50/30 shadow-xl shadow-black/50`}>
                                {/* Enhanced background gradient */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-opacity duration-500`}
                                />
                                
                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                
                                {/* Removed shine effect for performance */}
                                
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="mb-8 inline-block p-5 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:border-yellow-500/50 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 transition-all duration-300 shadow-lg shadow-yellow-500/20"
                                    >
                                        {React.cloneElement(item.icon, { size: 40, className: "text-yellow-400" })}
                                    </motion.div>
                                    <h3 className="font-heading text-xl md:text-2xl font-black mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
