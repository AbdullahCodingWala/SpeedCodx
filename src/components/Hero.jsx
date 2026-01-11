import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageSquare, Zap, ArrowRight, Monitor } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-yellow-500/15 to-amber-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-amber-600/15 to-yellow-800/10 rounded-full blur-3xl" />
            </div>
            
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-yellow-500/10 backdrop-blur-sm"
                    >
                        <Zap size={14} className="text-yellow-400" />
                        <span>Premium Minecraft Web Design</span>
                    </motion.div>

                    <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block mb-2 text-white"
                        >
                            Minecraft Server
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="animated-gradient-text block"
                        >
                            Website Designer
                        </motion.span>
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
                        Crafting <span className="text-yellow-400 font-semibold">premium, high-converting</span> frontends for Minecraft networks and SMPs. Modern UI, lightning-fast performance, and <span className="text-yellow-400 font-semibold">conversion-focused</span> designs that turn visitors into players.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group btn-primary btn-glow-yellow flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl"
                        >
                            <span>View Projects</span>
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group btn-primary btn-glow-amber flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl"
                        >
                            <MessageSquare size={18} />
                            <span>Contact Me</span>
                        </motion.a>
                    </div>

                    <div className="flex items-center gap-8 md:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col group"
                        >
                            <span className="text-2xl md:text-3xl font-black font-heading bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">50+</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">Networks Launched</span>
                        </motion.div>
                        <div className="w-px h-12 md:h-14 bg-gradient-to-b from-transparent via-yellow-500/50 to-transparent"></div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-col group"
                        >
                            <span className="text-2xl md:text-3xl font-black font-heading bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">99%</span>
                            <span className="text-xs uppercase tracking-widest text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">Success Rate</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Visual Element / Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative hidden lg:block"
                >
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative z-10 glass rounded-3xl p-3 border-2 border-yellow-500/20 hover:border-yellow-500/40 shadow-2xl shadow-black/50 hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden group/mockup"
                    >
                        {/* Animated border glow */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)' }} />
                        
                        <div className="rounded-2xl overflow-hidden bg-surface-100 aspect-video relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-amber-600/20 group-hover/mockup:opacity-50 transition-opacity duration-500"></div>
                            
                            {/* Mockup content representation */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                <motion.div
                                    animate={{ width: ["50%", "60%", "50%"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="h-3 bg-white/20 rounded-full mb-2"
                                />
                                <motion.div
                                    animate={{ width: ["75%", "85%", "75%"] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                                    className="h-6 bg-white/30 rounded-full mb-4"
                                />
                                <div className="flex gap-2">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-6 bg-yellow-500/50 rounded-lg cursor-pointer"
                                    />
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-6 bg-white/10 rounded-lg cursor-pointer"
                                    />
                                </div>
                            </div>
                            
                            {/* Floating accent */}
                            <div className="absolute top-6 right-6 w-24 h-24 bg-yellow-500/10 blur-2xl rounded-full opacity-50" />
                        </div>
                    </motion.div>

                    {/* Floating stats card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 glass p-3 md:p-4 rounded-xl border-2 border-yellow-500/30 shadow-2xl shadow-yellow-500/20 z-20 cursor-pointer"
                    >
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-600/20 flex items-center justify-center border border-yellow-500/30">
                                <Monitor className="text-yellow-400" size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Live Status</p>
                                <p className="text-base md:text-lg font-heading font-black">2,481</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/10 blur-[60px] -z-10 rounded-full" style={{ transform: 'translate3d(-50%, -50%, 0)' }} />
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-yellow-500/30 rounded-full flex justify-center p-1.5 md:p-2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
