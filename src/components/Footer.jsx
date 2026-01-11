import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-background relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-yellow-500/5 blur-[60px] rounded-full -z-10" style={{ transform: 'translate3d(-50%, 0, 0)' }} />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center"
                    >
                        <img src="/logo.png?v=4" alt="SpeedCodx" className="h-14 w-auto" />
                    </motion.div>

                    <div className="flex gap-8 text-sm font-medium text-gray-500">
                        {['About', 'Projects', 'Services', 'Contact'].map((link, index) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                whileHover={{ y: -2, color: 'var(--color-primary-yellow)' }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                {link}
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    className="absolute bottom-0 left-0 h-0.5 bg-yellow-500"
                                />
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500/30 transition-all text-gray-400 hover:text-yellow-400 relative overflow-hidden group"
                    >
                        {/* Removed rotation animation for performance */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </motion.button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-600">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        © 2026 SPEEDCODX. ALL RIGHTS RESERVED.
                    </motion.p>
                    <div className="flex gap-6">
                        <motion.a
                            href="#"
                            whileHover={{ color: 'white', x: 2 }}
                            className="transition-colors"
                        >
                            Privacy Policy
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ color: 'white', x: 2 }}
                            className="transition-colors"
                        >
                            Terms of Service
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
