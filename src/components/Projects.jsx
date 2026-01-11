import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Eye } from 'lucide-react';

// Import project images
import donutImg from '/donut.png';
import hostingImg from '/hosting.png';
import eventImg from '/event.png';
import altarImg from '/alter.png';

const Projects = () => {
    const projects = [
        {
            name: "Altar SMP",
            tag: "Lifesteal Community Website",
            tags: ["SMP", "Lifesteal", "Community"],
            color: "from-yellow-600/20",
            accent: "text-yellow-400",
            image: altarImg,
            link: "https://altarsmp.netlify.app/"
        },
        {
            name: "EventMC Network",
            tag: "Tournament Platform",
            tags: ["Network", "Events", "PVP"],
            color: "from-amber-600/20",
            accent: "text-amber-400",
            image: eventImg,
            link: "https://speedeventmc.netlify.app/"
        },
        {
            name: "Donut SMP Revamp",
            tag: "Hardcore SMP Hub",
            tags: ["SMP", "Hardcore", "Revamp"],
            color: "from-yellow-500/20",
            accent: "text-yellow-400",
            image: donutImg,
            link: "https://donutsmprevamp.netlify.app/"
        },
        {
            name: "Cloud Hosting Sample",
            tag: "Premium Hosting UI",
            tags: ["Hosting", "Dashboard", "Modern"],
            color: "from-yellow-700/20",
            accent: "text-yellow-300",
            image: hostingImg,
            link: "https://speedsample2.netlify.app/"
        }
    ];

    return (
        <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-50/5 to-background" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold tracking-widest uppercase text-xs mb-6"
                        >
                            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                            Portfolio Showcase
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3"
                        >
                            Featured <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg max-w-xl"
                        >
                            Showcasing premium Minecraft network designs that drive conversions and engage communities.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden glass border border-yellow-500/20 cursor-pointer shadow-2xl shadow-black/50"
                        >
                            {/* Enhanced border glow on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 rounded-3xl pointer-events-none"
                                style={{
                                    boxShadow: "0 0 40px rgba(251, 191, 36, 0.5), inset 0 0 40px rgba(251, 191, 36, 0.1)",
                                }}
                            />
                            
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            {/* Background Mockup Image */}
                            <div className="absolute inset-0 z-0">
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover object-top opacity-70"
                                    whileHover={{ scale: 1.1, opacity: 0.95 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/10 to-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.4 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                                />
                                {/* Removed shimmer effect for performance */}
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.2 }}
                                    className="mb-4 flex flex-wrap gap-2"
                                >
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.3 + tagIndex * 0.1 }}
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 62, 62, 0.3)" }}
                                            className="px-4 py-1.5 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-yellow-300 border border-yellow-500/30 cursor-pointer hover:from-yellow-500/30 hover:to-amber-600/30 transition-all"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3 }}
                                    whileHover={{ x: 5 }}
                                    className="font-heading text-2xl md:text-3xl font-black mb-2 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent transition-all"
                                >
                                    {project.name}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.4 }}
                                    className="text-gray-400 font-medium mb-6"
                                >
                                    {project.tag}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.5 }}
                                    className="flex gap-4 opacity-100"
                                >
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 bg-gradient-to-r from-white to-gray-100 text-black px-5 py-2 rounded-lg font-bold text-xs md:text-sm hover:from-yellow-500 hover:to-amber-600 hover:text-white transition-all shadow-xl hover:shadow-yellow-500/50"
                                    >
                                        <Eye size={16} /> Live Preview
                                    </motion.a>
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 bg-yellow-500/10 backdrop-blur-md text-white px-5 py-2 rounded-lg font-bold text-xs md:text-sm border border-yellow-500/30 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all"
                                    >
                                        <Layers size={16} /> Case Study
                                    </motion.button>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-8 right-8 w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-full flex items-center justify-center border-2 border-yellow-500/40 backdrop-blur-sm shadow-lg shadow-yellow-500/30"
                            >
                                <ExternalLink size={20} className={project.accent} />
                            </motion.div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
