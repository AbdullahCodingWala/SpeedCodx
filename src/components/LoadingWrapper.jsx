import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
            <div className="relative">
                {/* Animated logo */}
                <motion.img
                    src="/logo.png?v=4"
                    alt="SpeedCodx"
                    className="h-32 md:h-40 w-auto relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: [0, 1, 1]
                    }}
                    transition={{
                        duration: 1.2,
                        times: [0, 0.6, 1],
                        ease: "easeOut"
                    }}
                />

                {/* Pulsing glow effect */}
                <motion.div
                    className="absolute inset-0 bg-yellow-500/30 blur-3xl rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full"
                        />
                        <span className="text-gray-400 font-heading text-sm tracking-widest uppercase">Loading...</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const LoadingWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader />}
            </AnimatePresence>
            {children}
        </>
    );
};

export default LoadingWrapper;
