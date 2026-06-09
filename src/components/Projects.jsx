

import { motion, AnimatePresence } from "framer-motion";
import { Github, Folder, Code, Database, Globe, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Wizard Salon System",
        description: "A modern beauty salon appointment management platform and admin dashboard, featuring real-time client queue tracking, online booking, service catalogs, staff scheduling, and revenue analytics.",
        tech: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
        github: "https://github.com/supuns2001/Salon-system",
        icon: <Globe className="w-8 h-8 text-primary" />,
        status: "Live",
        image: "/projects/salon-system.png",
        category: "APPOINTMENT SYSTEM / FULL STACK",
    },
    {
        title: "Lumen Furniture Shop",
        description: "A premium, minimalist e-commerce web platform and integrated administrative panel for a luxury furniture brand, featuring interactive product collections, order processing, installment billing, and sales analytics dashboards.",
        tech: ["Next.js", "Tailwind CSS", "MySQL", "Prisma"],
        github: "https://github.com/supuns2001/furniture-shop",
        icon: <Globe className="w-8 h-8 text-primary" />,
        status: "Live",
        image: "/projects/lumen-furniture.png",
        category: "E-COMMERCE / FULL STACK",
    },
    {
        title: "Banking System",
        description: "A secure and robust account and payment management architecture featuring secure user authentication, transaction history logging, account balance tracking, and real-time ledger updates for reliable financial operations.",
        tech: ["PHP", "JavaScript", "MySQL", "CSS"],
        github: "https://github.com/supuns2001/Banking-System",
        icon: <Database className="w-8 h-8 text-primary" />,
        status: "Stable",
        image: "/projects/banking-system.png",
        category: "DATABASE / WEB DEVELOPMENT",
    },
    {
        title: "Loan Management",
        description: "An integrated financial resource allocation desktop system enabling administrators to manage loan approvals, verify user profiles, inspect credit limits, and automatically calculate interest and repayment schedules.",
        tech: ["Java", "MySQL"],
        github: "https://github.com/supuns2001/Loan-Management-System",
        icon: <Folder className="w-8 h-8 text-secondary" />,
        status: "Legacy",
        image: "/projects/loan-management.png",
        category: "FINANCE / DESKTOP APPLICATION",
    },
    {
        title: "MEDIFINDSL",
        description: "A fully-featured pharmaceutical distribution e-commerce web platform offering responsive client search interfaces, comprehensive product filtering, vendor inventory management, and secure checkouts for medicine distribution.",
        tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        github: "https://github.com/supuns2001/MEDIFINDSL-Web-Project",
        icon: <Globe className="w-8 h-8 text-accent" />,
        status: "Live",
        image: "/projects/medifindsl.png",
        category: "E-COMMERCE / WEB DEVELOPMENT",
    },
    {
        title: "E-Store Mobile",
        description: "A smart location-based mobile commerce application designed to connect users to nearby physical stores, integrating Google Maps navigation, Firebase real-time database, and interactive product catalogs.",
        tech: ["Java (Android)", "Firebase", "Google Maps"],
        github: "https://github.com/supuns2001/E-Store-Mobile-App",
        icon: <Code className="w-8 h-8 text-primary" />,
        status: "Beta",
        image: "/projects/e-store-mobile.png",
        category: "MOBILE / LOCATION SERVICES",
    },
    {
        title: "Pharmacy POS",
        description: "An integrated point of sale desktop application for pharmacies, optimizing payment checkouts, dynamically updating medicine inventory databases, generating digital sales receipts, and tracking employee transaction records.",
        tech: ["JavaFX", "MySQL"],
        github: "#",
        icon: <Database className="w-8 h-8 text-secondary" />,
        status: "Dev",
        image: "/projects/pharmacy-pos.png",
        category: "POS SYSTEM / DESKTOP APPLICATION",
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

        {/* Project Image Container */}
        <div className="relative h-56 md:h-64 overflow-hidden border-b border-white/10">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Floating Status Badge */}
            <div className="absolute top-4 right-4 z-20">
                <span className="text-[10px] uppercase tracking-wider font-mono text-gray-300 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                    {project.status}
                </span>
            </div>
            {/* Bottom overlay/gradient on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>

        <div className="p-6 md:p-8 relative z-10 flex flex-col flex-1">
            {/* Category tag */}
            <div className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {project.category}
            </div>

            {/* Title & Link */}
            <div className="flex justify-between items-center gap-4 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-mono group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 flex items-center justify-center"
                >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                </a>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-1 font-light">
                {project.description}
            </p>

            <div className="space-y-4 mt-auto">
                {/* Tech Stack */}
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

                {/* Source code Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        <span className="hover:underline">source_code</span>
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
);

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 4);

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

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
