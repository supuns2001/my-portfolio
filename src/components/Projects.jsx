"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder, Code, Database, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Banking System",
        description: "Secure Account & Payment Management Architecture",
        tech: ["PHP", "JavaScript", "MySQL", "CSS"],
        github: "https://github.com/supuns2001/Banking-System",
        icon: <Database className="w-8 h-8 text-primary" />,
        status: "Stable",
    },
    {
        title: "Loan Management",
        description: "Desktop Application for financial resource allocation",
        tech: ["Java", "MySQL"],
        github: "https://github.com/supuns2001/Loan-Management-System",
        icon: <Folder className="w-8 h-8 text-secondary" />,
        status: "Legacy",
    },
    {
        title: "MEDIFINDSL",
        description: "E-Commerce Platform for pharmaceutical distribution",
        tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        github: "https://github.com/supuns2001/MEDIFINDSL-Web-Project",
        icon: <Globe className="w-8 h-8 text-accent" />,
        status: "Live",
    },
    {
        title: "E-Store Mobile",
        description: "Location-based Mobile Commerce Solution",
        tech: ["Java (Android)", "Firebase", "Google Maps"],
        github: "https://github.com/supuns2001/E-Store-Mobile-App",
        icon: <Code className="w-8 h-8 text-primary" />,
        status: "Beta",
    },
    {
        title: "Pharmacy POS",
        description: "Integrated Point of Sale System",
        tech: ["JavaFX", "MySQL"],
        github: "#",
        icon: <Database className="w-8 h-8 text-secondary" />,
        status: "Dev",
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group relative glass rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
    >
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-6 relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors">
                    {project.icon}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                        {project.status}
                    </span>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground font-mono group-hover:text-primary transition-colors">
                {project.title}
            </h3>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-1 font-light">
                {project.description}
            </p>

            <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-2 py-1 bg-white/5 border border-white/10 text-gray-300 text-[10px] uppercase tracking-wider rounded-md font-mono"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        <span className="group-hover/link:underline">source_code</span>
                    </a>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" />
                </div>
            </div>
        </div>
    </motion.div>
);

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px bg-gradient-to-r from-transparent to-primary w-20" />
                        <span className="text-primary font-mono text-sm tracking-widest uppercase">Portfolio</span>
                        <div className="h-px bg-gradient-to-r from-primary to-transparent w-20" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl font-light">
                        A collection of technical implementations and software solutions.
                    </p>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence>
                        {visibleProjects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-8 py-3 glass border border-white/10 rounded-lg text-sm font-mono text-primary hover:bg-primary/10 transition-all group"
                    >
                        {showAll ? (
                            <>
                                Show_Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                Show_All <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
