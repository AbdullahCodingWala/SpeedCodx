import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-surface-50/5 to-background">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/15 to-amber-900/10 blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-amber-600/15 to-yellow-800/10 blur-3xl rounded-full" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <img
                            src="/logo.png?v=4"
                            alt="SpeedCodx"
                            className="h-20 md:h-24 w-auto mx-auto mb-6"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold tracking-widest uppercase text-xs mb-6"
                    >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                        Get In Touch
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight"
                    >
                        Let's Build Your <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Next Big Network</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Need a custom solution or a total redesign? I'm currently accepting new projects. Reach out and let's craft something legendary.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12"
                >
                    {/* Discord Card */}
                    <motion.a
                        href="https://discord.com/users/speed0point1"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                        className="group relative glass rounded-3xl p-6 md:p-8 border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50 hover:shadow-yellow-500/30 cursor-pointer"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/0 via-yellow-500/20 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        
                        {/* Background glow effects */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 group-hover:border-yellow-500/50 transition-all duration-300 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40"
                            >
                                <MessageSquare className="text-yellow-400" size={28} />
                            </motion.div>

                            {/* Label */}
                            <p className="text-xs uppercase font-black tracking-[0.2em] text-gray-500 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                Discord
                            </p>

                            {/* Contact Info */}
                            <motion.h3
                                whileHover={{ x: 5 }}
                                className="text-lg md:text-xl font-heading font-black mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                            >
                                speed0point1
                            </motion.h3>

                            {/* Description */}
                            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Click to send a direct message
                            </p>

                            {/* Arrow indicator */}
                            <motion.div
                                initial={{ x: 0, opacity: 0.5 }}
                                whileHover={{ x: 5, opacity: 1 }}
                                className="mt-4 inline-flex items-center gap-2 text-yellow-500 text-sm font-bold"
                            >
                                <span>Open</span>
                                <motion.svg
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </motion.a>

                    {/* Email Card */}
                    <motion.a
                        href="mailto:speedcodx@gmail.com"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                        className="group relative glass rounded-3xl p-6 md:p-8 border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50 hover:shadow-yellow-500/30 cursor-pointer"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/0 via-amber-500/20 to-yellow-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        
                        {/* Background glow effects */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-600/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 group-hover:border-yellow-500/50 transition-all duration-300 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40"
                            >
                                <Mail className="text-yellow-400" size={28} />
                            </motion.div>

                            {/* Label */}
                            <p className="text-xs uppercase font-black tracking-[0.2em] text-gray-500 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                Email
                            </p>

                            {/* Contact Info */}
                            <motion.h3
                                whileHover={{ x: 5 }}
                                className="text-base md:text-lg font-heading font-black mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 break-all"
                            >
                                speedcodx@gmail.com
                            </motion.h3>

                            {/* Description */}
                            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Click to send an email
                            </p>

                            {/* Arrow indicator */}
                            <motion.div
                                initial={{ x: 0, opacity: 0.5 }}
                                whileHover={{ x: 5, opacity: 1 }}
                                className="mt-4 inline-flex items-center gap-2 text-yellow-500 text-sm font-bold"
                            >
                                <span>Open</span>
                                <motion.svg
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </motion.a>

                    {/* WhatsApp Card */}
                    <motion.a
                        href="https://wa.me/923322858942"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                        className="group relative glass rounded-3xl p-6 md:p-8 border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50 hover:shadow-yellow-500/30 cursor-pointer"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-600/0 via-yellow-500/20 to-amber-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        
                        {/* Background glow effects */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-700/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 group-hover:border-yellow-500/50 transition-all duration-300 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40"
                            >
                                <Phone className="text-yellow-400" size={28} />
                            </motion.div>

                            {/* Label */}
                            <p className="text-xs uppercase font-black tracking-[0.2em] text-gray-500 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                WhatsApp
                            </p>

                            {/* Contact Info */}
                            <motion.h3
                                whileHover={{ x: 5 }}
                                className="text-base md:text-lg font-heading font-black mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                            >
                                +92 03322858942
                            </motion.h3>

                            {/* Description */}
                            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Click to message on WhatsApp
                            </p>

                            {/* Arrow indicator */}
                            <motion.div
                                initial={{ x: 0, opacity: 0.5 }}
                                whileHover={{ x: 5, opacity: 1 }}
                                className="mt-4 inline-flex items-center gap-2 text-yellow-500 text-sm font-bold"
                            >
                                <span>Open</span>
                                <motion.svg
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </motion.a>

                    {/* Instagram Card */}
                    <motion.a
                        href="https://instagram.com/abdullah8989_"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ scale: 1.03, y: -8 }}
                        className="group relative glass rounded-3xl p-6 md:p-8 border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50 hover:shadow-yellow-500/30 cursor-pointer"
                    >
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-600/0 via-amber-500/20 to-yellow-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        
                        {/* Background glow effects */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-700/15 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                                className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border-2 border-yellow-500/30 group-hover:from-yellow-500/30 group-hover:to-amber-600/30 group-hover:border-yellow-500/50 transition-all duration-300 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40"
                            >
                                <Instagram className="text-yellow-400" size={28} />
                            </motion.div>

                            {/* Label */}
                            <p className="text-xs uppercase font-black tracking-[0.2em] text-gray-500 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                                Instagram
                            </p>

                            {/* Contact Info */}
                            <motion.h3
                                whileHover={{ x: 5 }}
                                className="text-base md:text-lg font-heading font-black mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                            >
                                @abdullah8989_
                            </motion.h3>

                            {/* Description */}
                            <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Click to view profile
                            </p>

                            {/* Arrow indicator */}
                            <motion.div
                                initial={{ x: 0, opacity: 0.5 }}
                                whileHover={{ x: 5, opacity: 1 }}
                                className="mt-4 inline-flex items-center gap-2 text-yellow-500 text-sm font-bold"
                            >
                                <span>Open</span>
                                <motion.svg
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </motion.svg>
                            </motion.div>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
