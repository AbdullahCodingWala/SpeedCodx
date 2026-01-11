import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-gradient-to-b from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg shadow-yellow-500/10' : 'py-5 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 group"
                >
                    <div className="relative">
                        <img src="/logo.png?v=4" alt="SpeedCodx" className="h-12 md:h-16 w-auto transition-transform group-hover:scale-110" />
                        <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-heading font-black text-xl md:text-2xl tracking-tight">
                        Speed<span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Codx</span>
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -2 }}
                            className="font-semibold text-gray-300 hover:text-white transition-colors relative group px-3 py-2 rounded-lg hover:bg-yellow-500/10"
                        >
                            {link.name}
                            <motion.span
                                initial={{ width: 0, opacity: 0 }}
                                whileHover={{ width: "100%", opacity: 1 }}
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                            />
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary btn-glow-yellow py-2 px-5 flex items-center gap-2 relative overflow-hidden rounded-xl font-semibold shadow-lg shadow-yellow-500/30 text-sm"
                    >
                        <MessageSquare size={18} />
                        <span>Hire Me</span>
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-white">
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-surface-50 border-b border-white/10 overflow-hidden"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium hover:text-yellow-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn-primary btn-glow-yellow py-3 text-center"
                        >
                            Hire Me
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
